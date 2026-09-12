> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/sccontentsharingpickerobserver/contentsharingpicker(_:didcancelfor:)](https://developer.apple.com/documentation/screencapturekit/sccontentsharingpickerobserver/contentsharingpicker(_:didcancelfor:))

# contentSharingPicker(\_:didCancelFor:) (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 14.0+ · tvOS 27.0+ · visionOS 27.0+

Tells the observer that a sharing picker canceled selection for a stream.

## Declaration

```swift
func contentSharingPicker(_ picker: SCContentSharingPicker, didCancelFor stream: SCStream?)
```

## Parameters

- `picker`: The content-sharing picker that sent this event.
- `stream`: The canceled stream, if any.

## See Also

### Observing events

- [contentSharingPicker(\_:didUpdateWith:for:)](contentsharingpicker%28__didupdatewith_for_%29.md): Tells the observer that a sharing picker updated the content filter for a stream.

# contentSharingPicker:didCancelForStream: (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 14.0+ · tvOS 27.0+ · visionOS 27.0+

Tells the observer that a sharing picker canceled selection for a stream.

## Declaration

```objectivec
- (void) contentSharingPicker:(SCContentSharingPicker *) picker didCancelForStream:(SCStream *) stream;
```

## Parameters

- `picker`: The content-sharing picker that sent this event.
- `stream`: The canceled stream, if any.

## See Also

### Observing events

- [contentSharingPicker:didUpdateWithFilter:forStream:](contentsharingpicker%28__didupdatewith_for_%29.md): Tells the observer that a sharing picker updated the content filter for a stream.
