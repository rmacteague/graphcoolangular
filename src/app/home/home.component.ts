import { Subscription } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import {Apollo, ApolloQueryObservable} from 'apollo-angular';
import gql from 'graphql-tag';

const AllPostsQuery = gql`
  query allPosts {
    allPosts {
      description
      imageUrl
    }
  }
`

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allPostsSub: Subscription;
  allPosts: any;
  loading: boolean;
  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.allPostsSub = this.apollo.watchQuery({
      query: AllPostsQuery
    }).subscribe(({data, loading}: any) => {
      this.allPosts = data.allPosts;
      this.loading = loading;
    })
  }

  ngOnDestroy() {
    this.allPostsSub.unsubscribe();
  }
}
