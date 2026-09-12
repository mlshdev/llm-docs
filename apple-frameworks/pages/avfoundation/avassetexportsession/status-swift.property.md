> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetexportsession/status-swift.property](https://developer.apple.com/documentation/avfoundation/avassetexportsession/status-swift.property)

# status (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 18.0) · iPadOS 4.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The status of the export session.

> Use [states(updateInterval:)](states%28updateinterval_%29.md) instead.

## Declaration

```swift
var status: AVAssetExportSession.Status { get }
```

<a id="Discussion"></a>

## Discussion

For possible values, see [AVAssetExportSession.Status](status-swift.enum.md).

This value is key-value observable.

# status (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

The status of the export session.

## Declaration

```objectivec
@property (nonatomic, readonly) AVAssetExportSessionStatus status;
```

<a id="Discussion"></a>

## Discussion

For possible values, see [AVAssetExportSessionStatus](status-swift.enum.md).

This value is key-value observable.

## See Also

### Monitoring export progress

- [progress](progress.md): Deprecated. A value that indicates the progress of the export.
- [error](error.md): Deprecated. An optional error object.
