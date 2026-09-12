> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cfnetwork/cfhostclientcontext/release](https://developer.apple.com/documentation/cfnetwork/cfhostclientcontext/release)

# release (Swift)

**Framework:** CFNetwork  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

The callback used to remove a retain previously added for the host on the info pointer.

## Declaration

```swift
var release: CFAllocatorReleaseCallBack?
```

## See Also

### Instance Properties

- [copyDescription](copydescription.md): The callback used to create a descriptive string representation of the info pointer (or the data pointed to by the info pointer) for debugging purposes. This callback is called by the [CFCopyDescription(\_:)](../../corefoundation/cfcopydescription%28__%29.md) function.
- [info](info.md): An arbitrary pointer to allocated memory containing user-defined data that can be associated with the host and that is passed to the callbacks.
- [retain](retain.md): The callback used to add a retain for the host on the info pointer for the life of the host, and may be used for temporary references the host needs to take. This callback returns the actual info pointer to store in the host, almost always just the pointer passed as the parameter.
- [version](version.md): The version number of the structure type passed as a parameter to the host client function. The only valid version number is `0`.

# release (Objective-C)

**Framework:** CFNetwork  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

The callback used to remove a retain previously added for the host on the info pointer.

## Declaration

```objectivec
CFAllocatorReleaseCallBack release;
```

## See Also

### Instance Properties

- [copyDescription](copydescription.md): The callback used to create a descriptive string representation of the info pointer (or the data pointed to by the info pointer) for debugging purposes. This callback is called by the [CFCopyDescription](../../corefoundation/cfcopydescription%28__%29.md) function.
- [info](info.md): An arbitrary pointer to allocated memory containing user-defined data that can be associated with the host and that is passed to the callbacks.
- [retain](retain.md): The callback used to add a retain for the host on the info pointer for the life of the host, and may be used for temporary references the host needs to take. This callback returns the actual info pointer to store in the host, almost always just the pointer passed as the parameter.
- [version](version.md): The version number of the structure type passed as a parameter to the host client function. The only valid version number is `0`.
