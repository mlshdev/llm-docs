> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/sccontentsharingpickerobserver](https://developer.apple.com/documentation/screencapturekit/sccontentsharingpickerobserver)

# SCContentSharingPickerObserver (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 14.0+ · tvOS 27.0+ · visionOS 27.0+

An observer protocol your app implements to receive messages from the operating system’s content picker.

## Declaration

```swift
protocol SCContentSharingPickerObserver : NSObjectProtocol
```

## Topics

### Observing events

- [contentSharingPicker(\_:didCancelFor:)](sccontentsharingpickerobserver/contentsharingpicker%28__didcancelfor_%29.md): Tells the observer that a sharing picker canceled selection for a stream.
- [contentSharingPicker(\_:didUpdateWith:for:)](sccontentsharingpickerobserver/contentsharingpicker%28__didupdatewith_for_%29.md): Tells the observer that a sharing picker updated the content filter for a stream.

### Observing errors

- [contentSharingPickerStartDidFailWithError(\_:)](sccontentsharingpickerobserver/contentsharingpickerstartdidfailwitherror%28__%29.md): Tells the observer that a sharing picker was unable to start.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### System content-sharing picker

- [SCContentSharingPicker](sccontentsharingpicker.md): An instance of a picker presented by the operating system for managing frame-capture streams.
- [SCContentSharingPickerConfiguration](sccontentsharingpickerconfiguration-swift.struct.md): An instance for configuring the system content-sharing picker.
- [SCContentSharingPickerMode](sccontentsharingpickermode.md): Available modes for selecting streaming content from a picker presented by the operating system.

# SCContentSharingPickerObserver (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 14.0+ · tvOS 27.0+ · visionOS 27.0+

An observer protocol your app implements to receive messages from the operating system’s content picker.

## Declaration

```objectivec
@protocol SCContentSharingPickerObserver <NSObject>
```

## Topics

### Observing events

- [contentSharingPicker:didCancelForStream:](sccontentsharingpickerobserver/contentsharingpicker%28__didcancelfor_%29.md): Tells the observer that a sharing picker canceled selection for a stream.
- [contentSharingPicker:didUpdateWithFilter:forStream:](sccontentsharingpickerobserver/contentsharingpicker%28__didupdatewith_for_%29.md): Tells the observer that a sharing picker updated the content filter for a stream.

### Observing errors

- [contentSharingPickerStartDidFailWithError:](sccontentsharingpickerobserver/contentsharingpickerstartdidfailwitherror%28__%29.md): Tells the observer that a sharing picker was unable to start.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### System content-sharing picker

- [SCContentSharingPicker](sccontentsharingpicker.md): An instance of a picker presented by the operating system for managing frame-capture streams.
- [SCContentSharingPickerConfiguration](sccontentsharingpickerconfiguration-c.class.md): An instance for configuring the system content-sharing picker.
- [SCContentSharingPickerMode](sccontentsharingpickermode.md): Available modes for selecting streaming content from a picker presented by the operating system.
