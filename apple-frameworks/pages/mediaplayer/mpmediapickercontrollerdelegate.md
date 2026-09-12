> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediapickercontrollerdelegate](https://developer.apple.com/documentation/mediaplayer/mpmediapickercontrollerdelegate)

# MPMediaPickerControllerDelegate (Swift)

**Framework:** Media Player  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst

The protocol you implement so that a media item picker can respond to a user making media item selections.

## Declaration

```swift
protocol MPMediaPickerControllerDelegate : NSObjectProtocol
```

## Mentioned In

- [Displaying a media picker from your app](displaying-a-media-picker-from-your-app.md)

<a id="overview"></a>

## Overview

The delegate for a media item picker can respond to a user making media item selections. The delegate is also responsible for dismissing the media item picker from the parent view controller. The methods in this protocol are optional.

[MPMediaItem](mpmediaitem.md) describes the media items and [MPMediaPickerController](mpmediapickercontroller.md) describes the media item pickers.

## Topics

### Responding to user actions

- [mediaPicker(\_:didPickMediaItems:)](mpmediapickercontrollerdelegate/mediapicker%28__didpickmediaitems_%29.md): A method that the system calls when a user selects a set of media items.
- [mediaPickerDidCancel(\_:)](mpmediapickercontrollerdelegate/mediapickerdidcancel%28__%29.md): A method that the system calls when a user taps Cancel to dismiss a media item picker.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Responding to media item picker selections

- [delegate](mpmediapickercontroller/delegate.md): The delegate for a media item picker.

# MPMediaPickerControllerDelegate (Objective-C)

**Framework:** Media Player  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst

The protocol you implement so that a media item picker can respond to a user making media item selections.

## Declaration

```objectivec
@protocol MPMediaPickerControllerDelegate <NSObject>
```

## Mentioned In

- [Displaying a media picker from your app](displaying-a-media-picker-from-your-app.md)

<a id="overview"></a>

## Overview

The delegate for a media item picker can respond to a user making media item selections. The delegate is also responsible for dismissing the media item picker from the parent view controller. The methods in this protocol are optional.

[MPMediaItem](mpmediaitem.md) describes the media items and [MPMediaPickerController](mpmediapickercontroller.md) describes the media item pickers.

## Topics

### Responding to user actions

- [mediaPicker:didPickMediaItems:](mpmediapickercontrollerdelegate/mediapicker%28__didpickmediaitems_%29.md): A method that the system calls when a user selects a set of media items.
- [mediaPickerDidCancel:](mpmediapickercontrollerdelegate/mediapickerdidcancel%28__%29.md): A method that the system calls when a user taps Cancel to dismiss a media item picker.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Responding to media item picker selections

- [delegate](mpmediapickercontroller/delegate.md): The delegate for a media item picker.
