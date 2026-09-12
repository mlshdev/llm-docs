> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/stream/streamstatus](https://developer.apple.com/documentation/foundation/stream/streamstatus)

# streamStatus (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the receiver’s status.

## Declaration

```swift
var streamStatus: Stream.Status { get }
```

<a id="return-value"></a>

## Return Value

The receiver’s status.

<a id="Discussion"></a>

## Discussion

See Constants for a description of the available NSStreamStatus constants.

## See Also

### Getting Stream Information

- [streamError](streamerror.md): Returns an `NSError` object representing the stream error.

# streamStatus (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the receiver’s status.

## Declaration

```objectivec
@property (readonly) NSStreamStatus streamStatus;
```

<a id="return-value"></a>

## Return Value

The receiver’s status.

<a id="Discussion"></a>

## Discussion

See Constants for a description of the available NSStreamStatus constants.

## See Also

### Getting Stream Information

- [streamError](streamerror.md): Returns an `NSError` object representing the stream error.
