> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediaquery-init](https://developer.apple.com/documentation/mediaplayer/mpmediaquery-init)

# init

**Interface language:** Objective-C

**Framework:** Media Player  
**Kind:** Article

Initializes a generic media query.

<a id="Return-Value"></a>

## Return Value

A query containing everything in the user’s Music library.

<a id="Overview"></a>

## Overview

A generic media query has no filter predicates and no grouping configuration. It matches everything in the Music library and provides no grouping or sorting.

## See Also

### Creating media queries

- [albumsQuery](mpmediaquery/albums%28%29.md): Creates a media query that matches music items and that groups and sorts collections by album name.
- [artistsQuery](mpmediaquery/artists%28%29.md): Creates a media query that matches music items and that groups and sorts collections by artist name.
- [songsQuery](mpmediaquery/songs%28%29.md): Creates a media query that matches music items and that groups and sorts collections by song name.
- [playlistsQuery](mpmediaquery/playlists%28%29.md): Creates a media query that matches the entire library and that groups and sorts collections by playlist name.
- [podcastsQuery](mpmediaquery/podcasts%28%29.md): Creates a media query that matches podcast items and that groups and sorts collections by podcast name.
- [audiobooksQuery](mpmediaquery/audiobooks%28%29.md): Creates a media query that matches audio book items and that groups and sorts collections by audio book name.
- [compilationsQuery](mpmediaquery/compilations%28%29.md): Creates a media query that matches compilation items and that groups and sorts collections by album name.
- [composersQuery](mpmediaquery/composers%28%29.md): Creates a media query that matches all media items and that groups and sorts collections by composer name.
- [genresQuery](mpmediaquery/genres%28%29.md): Creates a media query that matches all media items and that groups and sorts collections by genre name.
- [initWithFilterPredicates:](mpmediaquery/init%28filterpredicates_%29.md): Initializes a media query with a set of media property predicates.
