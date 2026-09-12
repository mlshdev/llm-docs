> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtliostatus/pending](https://developer.apple.com/documentation/metal/mtliostatus/pending)

# MTLIOStatus.pending (Swift)

**Framework:** Metal  
**Kind:** Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Indicates the GPU hasn’t finished executing the input/output command buffer.

## Declaration

```swift
case pending
```

## See Also

### I/O command queue states

- [MTLIOStatus.complete](complete.md): Indicates the GPU has successfully finished executing the input/output command buffer.
- [MTLIOStatus.cancelled](cancelled.md): Indicates the GPU has successfully abandoned the input/output command buffer.
- [MTLIOStatus.error](error.md): Indicates the GPU experienced a problem with the input/output command buffer.

# MTLIOStatusPending (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Indicates the GPU hasn’t finished executing the input/output command buffer.

## Declaration

```objectivec
MTLIOStatusPending
```

## See Also

### I/O command queue states

- [MTLIOStatusComplete](complete.md): Indicates the GPU has successfully finished executing the input/output command buffer.
- [MTLIOStatusCancelled](cancelled.md): Indicates the GPU has successfully abandoned the input/output command buffer.
- [MTLIOStatusError](error.md): Indicates the GPU experienced a problem with the input/output command buffer.
