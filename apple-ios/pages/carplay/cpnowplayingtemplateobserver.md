> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnowplayingtemplateobserver

# CPNowPlayingTemplateObserver (Swift)

**Framework:** CarPlay  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Methods for responding to interactions with buttons in the Now Playing template.

## Declaration

```swift
protocol CPNowPlayingTemplateObserver : NSObjectProtocol
```

<a id="overview"></a>

## Overview

If you enable the Album Artist or Up Next button in the Now Playing interface, use this protocol to respond to interactions with those buttons. Implement this protocol in one of your app’s custom objects, and register the object as an observer using the [add(\_:)](cpnowplayingtemplate/add%28__%29.md) method of [CPNowPlayingTemplate](cpnowplayingtemplate.md). For each of the protocol’s methods, provide a response when someone interacts with the button. For example, when someone selects the Album Artist button, update your app’s interface to display the artist information for the currently playing item.

## Topics

### Responding to interactions

- [nowPlayingTemplateAlbumArtistButtonTapped(\_:)](cpnowplayingtemplateobserver/nowplayingtemplatealbumartistbuttontapped%28__%29.md): Tells the delegate that someone wants to view album artist information.
- [nowPlayingTemplateUpNextButtonTapped(\_:)](cpnowplayingtemplateobserver/nowplayingtemplateupnextbuttontapped%28__%29.md): Tells the delegate that someone wants to view the Up Next content.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Now playing

- [CPNowPlayingTemplate](cpnowplayingtemplate.md): A shared system template that shows the currently selected audio content and offers controls to manage playback.
- [Now Playing supporting types](now-playing-support.md): Add Now Playing buttons to your interface and configure overlays with sports information.

# CPNowPlayingTemplateObserver (Objective-C)

**Framework:** CarPlay  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Methods for responding to interactions with buttons in the Now Playing template.

## Declaration

```objectivec
@protocol CPNowPlayingTemplateObserver <NSObject>
```

<a id="overview"></a>

## Overview

If you enable the Album Artist or Up Next button in the Now Playing interface, use this protocol to respond to interactions with those buttons. Implement this protocol in one of your app’s custom objects, and register the object as an observer using the [addObserver:](cpnowplayingtemplate/add%28__%29.md) method of [CPNowPlayingTemplate](cpnowplayingtemplate.md). For each of the protocol’s methods, provide a response when someone interacts with the button. For example, when someone selects the Album Artist button, update your app’s interface to display the artist information for the currently playing item.

## Topics

### Responding to interactions

- [nowPlayingTemplateAlbumArtistButtonTapped:](cpnowplayingtemplateobserver/nowplayingtemplatealbumartistbuttontapped%28__%29.md): Tells the delegate that someone wants to view album artist information.
- [nowPlayingTemplateUpNextButtonTapped:](cpnowplayingtemplateobserver/nowplayingtemplateupnextbuttontapped%28__%29.md): Tells the delegate that someone wants to view the Up Next content.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Now playing

- [CPNowPlayingTemplate](cpnowplayingtemplate.md): A shared system template that shows the currently selected audio content and offers controls to manage playback.
- [Now Playing supporting types](now-playing-support.md): Add Now Playing buttons to your interface and configure overlays with sports information.
