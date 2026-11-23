> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnowplayingtemplateobserver/nowplayingtemplatealbumartistbuttontapped(_:)

# nowPlayingTemplateAlbumArtistButtonTapped(\_:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Tells the delegate that someone wants to view album artist information.

## Declaration

```swift
optional func nowPlayingTemplateAlbumArtistButtonTapped(_ nowPlayingTemplate: CPNowPlayingTemplate)
```

## Parameters

- `nowPlayingTemplate`: The Now Playing template that originated the request.

<a id="discussion"></a>

## Discussion

In your implementation of this method, present or push a new template to display content for the current album, playlist, or podcast.

## See Also

### Responding to interactions

- [nowPlayingTemplateUpNextButtonTapped(\_:)](nowplayingtemplateupnextbuttontapped%28__%29.md): Tells the delegate that someone wants to view the Up Next content.

# nowPlayingTemplateAlbumArtistButtonTapped: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Tells the delegate that someone wants to view album artist information.

## Declaration

```objectivec
- (void) nowPlayingTemplateAlbumArtistButtonTapped:(CPNowPlayingTemplate *) nowPlayingTemplate;
```

## Parameters

- `nowPlayingTemplate`: The Now Playing template that originated the request.

<a id="discussion"></a>

## Discussion

In your implementation of this method, present or push a new template to display content for the current album, playlist, or podcast.

## See Also

### Responding to interactions

- [nowPlayingTemplateUpNextButtonTapped:](nowplayingtemplateupnextbuttontapped%28__%29.md): Tells the delegate that someone wants to view the Up Next content.
