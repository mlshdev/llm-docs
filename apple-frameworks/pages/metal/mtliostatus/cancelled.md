> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtliostatus/cancelled](https://developer.apple.com/documentation/metal/mtliostatus/cancelled)

# MTLIOStatus.cancelled (Swift)

**Framework:** Metal  
**Kind:** Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Indicates the GPU has successfully abandoned the input/output command buffer.

## Declaration

```swift
case cancelled
```

## See Also

### I/O command queue states

- [MTLIOStatus.pending](pending.md): Indicates the GPU hasn’t finished executing the input/output command buffer.
- [MTLIOStatus.complete](complete.md): Indicates the GPU has successfully finished executing the input/output command buffer.
- [MTLIOStatus.error](error.md): Indicates the GPU experienced a problem with the input/output command buffer.

# MTLIOStatusCancelled (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Indicates the GPU has successfully abandoned the input/output command buffer.

## Declaration

```objectivec
MTLIOStatusCancelled
```

## See Also

### I/O command queue states

- [MTLIOStatusPending](pending.md): Indicates the GPU hasn’t finished executing the input/output command buffer.
- [MTLIOStatusComplete](complete.md): Indicates the GPU has successfully finished executing the input/output command buffer.
- [MTLIOStatusError](error.md): Indicates the GPU experienced a problem with the input/output command buffer.
