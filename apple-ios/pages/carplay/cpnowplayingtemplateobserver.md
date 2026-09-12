> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpnowplayingtemplateobserver](https://developer.apple.com/documentation/carplay/cpnowplayingtemplateobserver)

# CPNowPlayingTemplateObserver (Swift)

**Framework:** CarPlay  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The methods for responding to the user interacting with the Now Playing template.

## Declaration

```swift
protocol CPNowPlayingTemplateObserver : NSObjectProtocol
```

<a id="overview"></a>

## Overview

You use a Now Playing template observer to respond when the user interacts with the Album-Artist and Up Next buttons. The protocol defines methods that CarPlay calls when a user taps these buttons. Use your implementation to provide the appropriate behavior when these events occur. For example, when the user taps the Album-Artist button, you can present a new template that displays the content of the current album, playlist, or podcast.

To register an observer, create an object that implements the `CPNowPlayingTemplateObserver` protocol and then call the Now Playing template’s [add(\_:)](cpnowplayingtemplate/add%28__%29.md) method, passing your object as the only parameter.

## Topics

### Responding to User Interactions

- [nowPlayingTemplateAlbumArtistButtonTapped(\_:)](cpnowplayingtemplateobserver/nowplayingtemplatealbumartistbuttontapped%28__%29.md): Tells the observer that the user tapped the Album-Artist button.
- [nowPlayingTemplateUpNextButtonTapped(\_:)](cpnowplayingtemplateobserver/nowplayingtemplateupnextbuttontapped%28__%29.md): Tells the observer that the user tapped the Up Next button.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Observing Now Playing Events

- [add(\_:)](cpnowplayingtemplate/add%28__%29.md): Registers an observer that receives Now Playing template events.
- [remove(\_:)](cpnowplayingtemplate/remove%28__%29.md): Removes an observer from receiving Now Playing template events.

# CPNowPlayingTemplateObserver (Objective-C)

**Framework:** CarPlay  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The methods for responding to the user interacting with the Now Playing template.

## Declaration

```objectivec
@protocol CPNowPlayingTemplateObserver <NSObject>
```

<a id="overview"></a>

## Overview

You use a Now Playing template observer to respond when the user interacts with the Album-Artist and Up Next buttons. The protocol defines methods that CarPlay calls when a user taps these buttons. Use your implementation to provide the appropriate behavior when these events occur. For example, when the user taps the Album-Artist button, you can present a new template that displays the content of the current album, playlist, or podcast.

To register an observer, create an object that implements the `CPNowPlayingTemplateObserver` protocol and then call the Now Playing template’s [addObserver:](cpnowplayingtemplate/add%28__%29.md) method, passing your object as the only parameter.

## Topics

### Responding to User Interactions

- [nowPlayingTemplateAlbumArtistButtonTapped:](cpnowplayingtemplateobserver/nowplayingtemplatealbumartistbuttontapped%28__%29.md): Tells the observer that the user tapped the Album-Artist button.
- [nowPlayingTemplateUpNextButtonTapped:](cpnowplayingtemplateobserver/nowplayingtemplateupnextbuttontapped%28__%29.md): Tells the observer that the user tapped the Up Next button.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Observing Now Playing Events

- [addObserver:](cpnowplayingtemplate/add%28__%29.md): Registers an observer that receives Now Playing template events.
- [removeObserver:](cpnowplayingtemplate/remove%28__%29.md): Removes an observer from receiving Now Playing template events.
