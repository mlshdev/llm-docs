> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnowplayingbutton

# CPNowPlayingButton (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The abstract base class for buttons in the Now Playing interface.

## Declaration

```swift
@MainActor class CPNowPlayingButton
```

<a id="overview"></a>

## Overview

`CPNowPlayingButton` is an abstract base class that provides common behavior for buttons you add to a [CPNowPlayingTemplate](cpnowplayingtemplate.md) object. Don’t instantiate this class directly or define any custom subclasses. Instead, use the properties of this class to affect the behavior of concrete subclasses such as [CPNowPlayingImageButton](cpnowplayingimagebutton.md) or [CPNowPlayingShuffleButton](cpnowplayingshufflebutton.md).

## Topics

### Creating a button

- [init(handler:)](cpnowplayingbutton/init%28handler_%29.md): Creates a button and sets its action to the provided handler.

### Managing the button state

- [isEnabled](cpnowplayingbutton/isenabled.md): A Boolean value that indicates whether the button is enabled.
- [isSelected](cpnowplayingbutton/isselected.md): A Boolean value that indicates the selected state of a custom button.

### Initializers

- [init(coder:)](cpnowplayingbutton/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [CPNowPlayingAddToLibraryButton](cpnowplayingaddtolibrarybutton.md)
- [CPNowPlayingImageButton](cpnowplayingimagebutton.md)
- [CPNowPlayingMoreButton](cpnowplayingmorebutton.md)
- [CPNowPlayingPlaybackRateButton](cpnowplayingplaybackratebutton.md)
- [CPNowPlayingRepeatButton](cpnowplayingrepeatbutton.md)
- [CPNowPlayingShuffleButton](cpnowplayingshufflebutton.md)

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

### Now Playing buttons

- [CPNowPlayingShuffleButton](cpnowplayingshufflebutton.md): A button for toggling shuffle mode on and off.
- [CPNowPlayingRepeatButton](cpnowplayingrepeatbutton.md): A button for cycling through the available repeat modes.
- [CPNowPlayingPlaybackRateButton](cpnowplayingplaybackratebutton.md): A button for changing the playback rate of the media.
- [CPNowPlayingAddToLibraryButton](cpnowplayingaddtolibrarybutton.md): A button for adding the current item to a collection, such as the person’s library.
- [CPNowPlayingMoreButton](cpnowplayingmorebutton.md): A button for displaying additional playback options.
- [CPNowPlayingImageButton](cpnowplayingimagebutton.md): A custom Now Playing button that displays an image.

# CPNowPlayingButton (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The abstract base class for buttons in the Now Playing interface.

## Declaration

```objectivec
@interface CPNowPlayingButton : NSObject
```

<a id="overview"></a>

## Overview

`CPNowPlayingButton` is an abstract base class that provides common behavior for buttons you add to a [CPNowPlayingTemplate](cpnowplayingtemplate.md) object. Don’t instantiate this class directly or define any custom subclasses. Instead, use the properties of this class to affect the behavior of concrete subclasses such as [CPNowPlayingImageButton](cpnowplayingimagebutton.md) or [CPNowPlayingShuffleButton](cpnowplayingshufflebutton.md).

## Topics

### Creating a button

- [initWithHandler:](cpnowplayingbutton/init%28handler_%29.md): Creates a button and sets its action to the provided handler.

### Managing the button state

- [enabled](cpnowplayingbutton/isenabled.md): A Boolean value that indicates whether the button is enabled.
- [selected](cpnowplayingbutton/isselected.md): A Boolean value that indicates the selected state of a custom button.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [CPNowPlayingAddToLibraryButton](cpnowplayingaddtolibrarybutton.md)
- [CPNowPlayingImageButton](cpnowplayingimagebutton.md)
- [CPNowPlayingMoreButton](cpnowplayingmorebutton.md)
- [CPNowPlayingPlaybackRateButton](cpnowplayingplaybackratebutton.md)
- [CPNowPlayingRepeatButton](cpnowplayingrepeatbutton.md)
- [CPNowPlayingShuffleButton](cpnowplayingshufflebutton.md)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Now Playing buttons

- [CPNowPlayingShuffleButton](cpnowplayingshufflebutton.md): A button for toggling shuffle mode on and off.
- [CPNowPlayingRepeatButton](cpnowplayingrepeatbutton.md): A button for cycling through the available repeat modes.
- [CPNowPlayingPlaybackRateButton](cpnowplayingplaybackratebutton.md): A button for changing the playback rate of the media.
- [CPNowPlayingAddToLibraryButton](cpnowplayingaddtolibrarybutton.md): A button for adding the current item to a collection, such as the person’s library.
- [CPNowPlayingMoreButton](cpnowplayingmorebutton.md): A button for displaying additional playback options.
- [CPNowPlayingImageButton](cpnowplayingimagebutton.md): A custom Now Playing button that displays an image.
