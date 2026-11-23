> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnowplayingmode

# CPNowPlayingMode (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

A type that defines the appearance and layout of the Now Playing interface.

## Declaration

```swift
@MainActor class CPNowPlayingMode
```

<a id="overview"></a>

## Overview

Use the `CPNowPlayingMode` type to retrieve the default mode for the Now Playing interface. The default mode specifies a layout suitable for showing the currently playing audio track from a playlist. For example, it shows the track title, artist information, album artwork, and any custom controls to manage playback behaviors.

You don’t create an instance of this class directly. When you need to return the Now Playing interface to the default mode, retrieve the [default](cpnowplayingmode/default.md) object and assign it to the [nowPlayingMode](cpnowplayingtemplate/nowplayingmode.md) property of the Now Playing template. Return the interface to the default mode when you’re not actively using a different mode. For example, a sports app might return the interface to the default mode after a match finishes.

## Topics

### Creating a playing mode

- [default](cpnowplayingmode/default.md): The default appearance and layout for the Now Playing interface.
- [init(coder:)](cpnowplayingmode/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [CPNowPlayingModeSports](cpnowplayingmodesports.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Interface modes

- [CPNowPlayingModeSports](cpnowplayingmodesports.md): A mode that manages the sporting event details to display in the Now Playing interface.

# CPNowPlayingMode (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

A type that defines the appearance and layout of the Now Playing interface.

## Declaration

```objectivec
@interface CPNowPlayingMode : NSObject
```

<a id="overview"></a>

## Overview

Use the `CPNowPlayingMode` type to retrieve the default mode for the Now Playing interface. The default mode specifies a layout suitable for showing the currently playing audio track from a playlist. For example, it shows the track title, artist information, album artwork, and any custom controls to manage playback behaviors.

You don’t create an instance of this class directly. When you need to return the Now Playing interface to the default mode, retrieve the [defaultNowPlayingMode](cpnowplayingmode/default.md) object and assign it to the [nowPlayingMode](cpnowplayingtemplate/nowplayingmode.md) property of the Now Playing template. Return the interface to the default mode when you’re not actively using a different mode. For example, a sports app might return the interface to the default mode after a match finishes.

## Topics

### Creating a playing mode

- [defaultNowPlayingMode](cpnowplayingmode/default.md): The default appearance and layout for the Now Playing interface.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [CPNowPlayingModeSports](cpnowplayingmodesports.md)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Interface modes

- [CPNowPlayingModeSports](cpnowplayingmodesports.md): A mode that manages the sporting event details to display in the Now Playing interface.
