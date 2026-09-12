> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtliocommandbuffer/error](https://developer.apple.com/documentation/metal/mtliocommandbuffer/error)

# error (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Stores the details of an error when the GPU experienced a problem with the input/output command buffer.

## Declaration

```swift
var error: (any Error)? { get }
```

## See Also

### Checking the state of a command buffer

- [status](status.md): Represents the state of the input/output command buffer.

# error (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Stores the details of an error when the GPU experienced a problem with the input/output command buffer.

## Declaration

```objectivec
@property (readonly, nullable) NSError * error;
```

## See Also

### Checking the state of a command buffer

- [status](status.md): Represents the state of the input/output command buffer.
