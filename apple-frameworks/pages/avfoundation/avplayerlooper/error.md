> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avplayerlooper/error

# error (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

An error that describes the reason looping failed.

## Declaration

```swift
var error: (any Error)? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` unless the looper’s [status](status-swift.property.md) changes to [AVPlayerLooper.Status.failed](status-swift.enum/failed.md). If this occurs, this property value contains an error object that provides the details of the error that prevented looping.

# error (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

An error that describes the reason looping failed.

## Declaration

```objectivec
@property (readonly, nullable) NSError * error;
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` unless the looper’s [status](status-swift.property.md) changes to [AVPlayerLooperStatusFailed](status-swift.enum/failed.md). If this occurs, this property value contains an error object that provides the details of the error that prevented looping.
