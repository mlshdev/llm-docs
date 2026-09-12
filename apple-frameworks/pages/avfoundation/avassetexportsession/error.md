> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetexportsession/error](https://developer.apple.com/documentation/avfoundation/avassetexportsession/error)

# error (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 18.0) · iPadOS 4.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

An optional error object.

> Use `export(to:as:)` instead.

## Declaration

```swift
var error: (any Error)? { get }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `nil`. The export session sets it to an error object if its status changes to [AVAssetExportSession.Status.failed](status-swift.enum/failed.md) or [AVAssetExportSession.Status.cancelled](status-swift.enum/cancelled.md).

# error (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

An optional error object.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSError * error;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `nil`. The export session sets it to an error object if its status changes to [AVAssetExportSessionStatusFailed](status-swift.enum/failed.md) or [AVAssetExportSessionStatusCancelled](status-swift.enum/cancelled.md).

## See Also

### Monitoring export progress

- [status](status-swift.property.md): Deprecated. The status of the export session.
- [progress](progress.md): Deprecated. A value that indicates the progress of the export.
