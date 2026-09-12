> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpnowplayingtemplateobserver/nowplayingtemplatealbumartistbuttontapped(_:)](https://developer.apple.com/documentation/carplay/cpnowplayingtemplateobserver/nowplayingtemplatealbumartistbuttontapped(_:))

# nowPlayingTemplateAlbumArtistButtonTapped(\_:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Tells the observer that the user tapped the Album-Artist button.

## Declaration

```swift
optional func nowPlayingTemplateAlbumArtistButtonTapped(_ nowPlayingTemplate: CPNowPlayingTemplate)
```

## Parameters

- `nowPlayingTemplate`: The template that contains the button that the user tapped.

<a id="Discussion"></a>

## Discussion

When CarPlay calls this method on your observer, you should present or push a new template that displays the content of the current album, playlist or podcast.

## See Also

### Responding to User Interactions

- [nowPlayingTemplateUpNextButtonTapped(\_:)](nowplayingtemplateupnextbuttontapped%28__%29.md): Tells the observer that the user tapped the Up Next button.

# nowPlayingTemplateAlbumArtistButtonTapped: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Tells the observer that the user tapped the Album-Artist button.

## Declaration

```objectivec
- (void) nowPlayingTemplateAlbumArtistButtonTapped:(CPNowPlayingTemplate *) nowPlayingTemplate;
```

## Parameters

- `nowPlayingTemplate`: The template that contains the button that the user tapped.

<a id="Discussion"></a>

## Discussion

When CarPlay calls this method on your observer, you should present or push a new template that displays the content of the current album, playlist or podcast.

## See Also

### Responding to User Interactions

- [nowPlayingTemplateUpNextButtonTapped:](nowplayingtemplateupnextbuttontapped%28__%29.md): Tells the observer that the user tapped the Up Next button.
