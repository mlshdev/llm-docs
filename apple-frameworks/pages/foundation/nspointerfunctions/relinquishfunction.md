> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nspointerfunctions/relinquishfunction](https://developer.apple.com/documentation/foundation/nspointerfunctions/relinquishfunction)

# relinquishFunction (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The function used to relinquish memory.

## Declaration

```swift
var relinquishFunction: ((UnsafeRawPointer, ((UnsafeRawPointer) -> Int)?) -> Void)? { get set }
```

<a id="Discussion"></a>

## Discussion

This specifies the function to use when an item is removed from a table or pointer array.

## See Also

### Memory Configuration

- [acquireFunction](acquirefunction.md): The function used to acquire memory.
- [usesStrongWriteBarrier](usesstrongwritebarrier.md): Deprecated. Specifies whether, in a garbage collected environment, pointers should be assigned using a strong write barrier.
- [usesWeakReadAndWriteBarriers](usesweakreadandwritebarriers.md): Deprecated. Specifies whether, in a garbage collected environment, pointers should use weak read and write barriers.

# relinquishFunction (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The function used to relinquish memory.

## Declaration

```objectivec
@property (nullable) void (*)(const void *, unsigned long (*)(const void *)) relinquishFunction;
```

<a id="Discussion"></a>

## Discussion

This specifies the function to use when an item is removed from a table or pointer array.

## See Also

### Memory Configuration

- [acquireFunction](acquirefunction.md): The function used to acquire memory.
- [usesStrongWriteBarrier](usesstrongwritebarrier.md): Deprecated. Specifies whether, in a garbage collected environment, pointers should be assigned using a strong write barrier.
- [usesWeakReadAndWriteBarriers](usesweakreadandwritebarriers.md): Deprecated. Specifies whether, in a garbage collected environment, pointers should use weak read and write barriers.
