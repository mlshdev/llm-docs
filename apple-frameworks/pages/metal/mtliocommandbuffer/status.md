> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtliocommandbuffer/status](https://developer.apple.com/documentation/metal/mtliocommandbuffer/status)

# status (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Represents the state of the input/output command buffer.

## Declaration

```swift
var status: MTLIOStatus { get }
```

## See Also

### Checking the state of a command buffer

- [error](error.md): Stores the details of an error when the GPU experienced a problem with the input/output command buffer.

# status (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Represents the state of the input/output command buffer.

## Declaration

```objectivec
@property (readonly) MTLIOStatus status;
```

## See Also

### Checking the state of a command buffer

- [error](error.md): Stores the details of an error when the GPU experienced a problem with the input/output command buffer.
