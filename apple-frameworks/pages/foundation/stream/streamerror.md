> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/stream/streamerror](https://developer.apple.com/documentation/foundation/stream/streamerror)

# streamError (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an `NSError` object representing the stream error.

## Declaration

```swift
var streamError: (any Error)? { get }
```

<a id="return-value"></a>

## Return Value

An `NSError` object representing the stream error, or `nil` if no error has been encountered.

## See Also

### Getting Stream Information

- [streamStatus](streamstatus.md): Returns the receiver’s status.

# streamError (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an `NSError` object representing the stream error.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSError * streamError;
```

<a id="return-value"></a>

## Return Value

An `NSError` object representing the stream error, or `nil` if no error has been encountered.

## See Also

### Getting Stream Information

- [streamStatus](streamstatus.md): Returns the receiver’s status.
