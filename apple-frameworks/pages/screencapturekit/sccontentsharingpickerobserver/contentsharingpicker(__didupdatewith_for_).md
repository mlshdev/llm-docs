> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/sccontentsharingpickerobserver/contentsharingpicker(_:didupdatewith:for:)](https://developer.apple.com/documentation/screencapturekit/sccontentsharingpickerobserver/contentsharingpicker(_:didupdatewith:for:))

# contentSharingPicker(\_:didUpdateWith:for:) (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 14.0+ · tvOS 27.0+ · visionOS 27.0+

Tells the observer that a sharing picker updated the content filter for a stream.

## Declaration

```swift
func contentSharingPicker(_ picker: SCContentSharingPicker, didUpdateWith filter: SCContentFilter, for stream: SCStream?)
```

## Parameters

- `picker`: The content-sharing picker that sent this event.
- `filter`: The new filter applied to streaming content.
- `stream`: The changed stream, if any.

## See Also

### Observing events

- [contentSharingPicker(\_:didCancelFor:)](contentsharingpicker%28__didcancelfor_%29.md): Tells the observer that a sharing picker canceled selection for a stream.

# contentSharingPicker:didUpdateWithFilter:forStream: (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 14.0+ · tvOS 27.0+ · visionOS 27.0+

Tells the observer that a sharing picker updated the content filter for a stream.

## Declaration

```objectivec
- (void) contentSharingPicker:(SCContentSharingPicker *) picker didUpdateWithFilter:(SCContentFilter *) filter forStream:(SCStream *) stream;
```

## Parameters

- `picker`: The content-sharing picker that sent this event.
- `filter`: The new filter applied to streaming content.
- `stream`: The changed stream, if any.

## See Also

### Observing events

- [contentSharingPicker:didCancelForStream:](contentsharingpicker%28__didcancelfor_%29.md): Tells the observer that a sharing picker canceled selection for a stream.
