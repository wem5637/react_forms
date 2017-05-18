import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';

import AppContainer from './containers/AppContainer';
import Albums from './components/Albums';
import Album from './components/Album';
import Artists from './components/Artists';
import Artist from './components/Artist';
import Songs from './components/Songs';
import FilterableArtistsContainer from './containers/FilterableArtistsContainer';
import NewPlaylistContainer from './containers/NewPlaylistContainer';

const router = (
  <Router history={hashHistory}>
    <Route path="/" component={AppContainer}>
      <IndexRedirect to="/albums" />
      <Route path="/albums" component={Albums} />
      <Route path="albums/:albumId" component={Album} />

      <Route path="/artists" component={FilterableArtistsContainer} />
      <Route path="/artists/:artistId" component={Artist}>
        <Route path="albums" component={Albums} />
        <Route path="songs" component={Songs} />
      </Route>

      <Route path="/newplaylist" component={NewPlaylistContainer} />
    </Route>
  </Router>
);

ReactDOM.render(
  router,
  document.getElementById('app'),
);
