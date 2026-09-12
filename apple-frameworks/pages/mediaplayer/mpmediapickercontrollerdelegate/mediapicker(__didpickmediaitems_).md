> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediapickercontrollerdelegate/mediapicker(_:didpickmediaitems:)](https://developer.apple.com/documentation/mediaplayer/mpmediapickercontrollerdelegate/mediapicker(_:didpickmediaitems:))

# mediaPicker(\_:didPickMediaItems:) (Swift)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+

A method that the system calls when a user selects a set of media items.

## Declaration

```swift
optional func mediaPicker(_ mediaPicker: MPMediaPickerController, didPickMediaItems mediaItemCollection: MPMediaItemCollection)
```

## Parameters

- `mediaPicker`: The media item picker to dismiss.
- `mediaItemCollection`: The selected media items.

## Mentioned In

- [Displaying a media picker from your app](../displaying-a-media-picker-from-your-app.md)

## See Also

### Related Documentation

- [iPod Library Access Programming Guide](https://developer.apple.com/library/archive/documentation/Audio/Conceptual/iPodLibraryAccess_Guide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40008765)

### Responding to user actions

- [mediaPickerDidCancel(\_:)](mediapickerdidcancel%28__%29.md): A method that the system calls when a user taps Cancel to dismiss a media item picker.

# mediaPicker:didPickMediaItems: (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst

A method that the system calls when a user selects a set of media items.

## Declaration

```objectivec
- (void) mediaPicker:(MPMediaPickerController *) mediaPicker didPickMediaItems:(MPMediaItemCollection *) mediaItemCollection;
```

## Parameters

- `mediaPicker`: The media item picker to dismiss.
- `mediaItemCollection`: The selected media items.

## Mentioned In

- [Displaying a media picker from your app](../displaying-a-media-picker-from-your-app.md)

## See Also

### Related Documentation

- [iPod Library Access Programming Guide](https://developer.apple.com/library/archive/documentation/Audio/Conceptual/iPodLibraryAccess_Guide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40008765)

### Responding to user actions

- [mediaPickerDidCancel:](mediapickerdidcancel%28__%29.md): A method that the system calls when a user taps Cancel to dismiss a media item picker.
