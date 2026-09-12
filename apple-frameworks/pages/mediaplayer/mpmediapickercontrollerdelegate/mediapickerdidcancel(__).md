> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediapickercontrollerdelegate/mediapickerdidcancel(_:)](https://developer.apple.com/documentation/mediaplayer/mpmediapickercontrollerdelegate/mediapickerdidcancel(_:))

# mediaPickerDidCancel(\_:) (Swift)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+

A method that the system calls when a user taps Cancel to dismiss a media item picker.

## Declaration

```swift
optional func mediaPickerDidCancel(_ mediaPicker: MPMediaPickerController)
```

## Parameters

- `mediaPicker`: The media item picker to dismiss.

## Mentioned In

- [Displaying a media picker from your app](../displaying-a-media-picker-from-your-app.md)

## See Also

### Responding to user actions

- [mediaPicker(\_:didPickMediaItems:)](mediapicker%28__didpickmediaitems_%29.md): A method that the system calls when a user selects a set of media items.

# mediaPickerDidCancel: (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst

A method that the system calls when a user taps Cancel to dismiss a media item picker.

## Declaration

```objectivec
- (void) mediaPickerDidCancel:(MPMediaPickerController *) mediaPicker;
```

## Parameters

- `mediaPicker`: The media item picker to dismiss.

## Mentioned In

- [Displaying a media picker from your app](../displaying-a-media-picker-from-your-app.md)

## See Also

### Responding to user actions

- [mediaPicker:didPickMediaItems:](mediapicker%28__didpickmediaitems_%29.md): A method that the system calls when a user selects a set of media items.
