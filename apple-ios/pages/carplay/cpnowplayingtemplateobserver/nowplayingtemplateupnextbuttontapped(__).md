> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnowplayingtemplateobserver/nowplayingtemplateupnextbuttontapped(_:)

# nowPlayingTemplateUpNextButtonTapped(\_:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Tells the delegate that someone wants to view the Up Next content.

## Declaration

```swift
optional func nowPlayingTemplateUpNextButtonTapped(_ nowPlayingTemplate: CPNowPlayingTemplate)
```

## Parameters

- `nowPlayingTemplate`: The Now Playing template that originated the request.

<a id="discussion"></a>

## Discussion

In your implementation of this method, push a [CPListTemplate](../cplisttemplate.md) object onto your interface and fill it with the upcoming or queued content. Don’t push other types of templates.

## See Also

### Responding to interactions

- [nowPlayingTemplateAlbumArtistButtonTapped(\_:)](nowplayingtemplatealbumartistbuttontapped%28__%29.md): Tells the delegate that someone wants to view album artist information.

# nowPlayingTemplateUpNextButtonTapped: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Tells the delegate that someone wants to view the Up Next content.

## Declaration

```objectivec
- (void) nowPlayingTemplateUpNextButtonTapped:(CPNowPlayingTemplate *) nowPlayingTemplate;
```

## Parameters

- `nowPlayingTemplate`: The Now Playing template that originated the request.

<a id="discussion"></a>

## Discussion

In your implementation of this method, push a [CPListTemplate](../cplisttemplate.md) object onto your interface and fill it with the upcoming or queued content. Don’t push other types of templates.

## See Also

### Responding to interactions

- [nowPlayingTemplateAlbumArtistButtonTapped:](nowplayingtemplatealbumartistbuttontapped%28__%29.md): Tells the delegate that someone wants to view album artist information.
