> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpnowplayingtemplateobserver/nowplayingtemplateupnextbuttontapped(_:)](https://developer.apple.com/documentation/carplay/cpnowplayingtemplateobserver/nowplayingtemplateupnextbuttontapped(_:))

# nowPlayingTemplateUpNextButtonTapped(\_:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Tells the observer that the user tapped the Up Next button.

## Declaration

```swift
optional func nowPlayingTemplateUpNextButtonTapped(_ nowPlayingTemplate: CPNowPlayingTemplate)
```

## Parameters

- `nowPlayingTemplate`: The template that contains the button that the user tapped.

<a id="Discussion"></a>

## Discussion

When CarPlay calls this method on your observer, you should push an instance of [CPListTemplate](../cplisttemplate.md)—other template types are not supported when Now Playing is the visible template—on to your navigation stack that displays a list of upcoming or queued content.

## See Also

### Responding to User Interactions

- [nowPlayingTemplateAlbumArtistButtonTapped(\_:)](nowplayingtemplatealbumartistbuttontapped%28__%29.md): Tells the observer that the user tapped the Album-Artist button.

# nowPlayingTemplateUpNextButtonTapped: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Tells the observer that the user tapped the Up Next button.

## Declaration

```objectivec
- (void) nowPlayingTemplateUpNextButtonTapped:(CPNowPlayingTemplate *) nowPlayingTemplate;
```

## Parameters

- `nowPlayingTemplate`: The template that contains the button that the user tapped.

<a id="Discussion"></a>

## Discussion

When CarPlay calls this method on your observer, you should push an instance of [CPListTemplate](../cplisttemplate.md)—other template types are not supported when Now Playing is the visible template—on to your navigation stack that displays a list of upcoming or queued content.

## See Also

### Responding to User Interactions

- [nowPlayingTemplateAlbumArtistButtonTapped:](nowplayingtemplatealbumartistbuttontapped%28__%29.md): Tells the observer that the user tapped the Album-Artist button.
