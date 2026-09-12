> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetexportsession/progress](https://developer.apple.com/documentation/avfoundation/avassetexportsession/progress)

# progress (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 27.0) · iPadOS 4.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.7+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A value that indicates the progress of the export.

> Use `progressStates(updateInterval:)` instead.

## Declaration

```swift
var progress: Float { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property ranges from `0.0` to `1.0.`

# progress (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

A value that indicates the progress of the export.

## Declaration

```objectivec
@property (nonatomic, readonly) float progress;
```

<a id="Discussion"></a>

## Discussion

The value of this property ranges from `0.0` to `1.0.`

## See Also

### Monitoring export progress

- [status](status-swift.property.md): Deprecated. The status of the export session.
- [error](error.md): Deprecated. An optional error object.
