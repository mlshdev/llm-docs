> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nspointerfunctions/usesweakreadandwritebarriers](https://developer.apple.com/documentation/foundation/nspointerfunctions/usesweakreadandwritebarriers)

# usesWeakReadAndWriteBarriers (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 10.0) · iPadOS 2.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.5+ (deprecated in 10.12) · tvOS 9.0+ (deprecated in 10.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 3.0)

Specifies whether, in a garbage collected environment, pointers should use weak read and write barriers.

> Garbage collection no longer supported

## Declaration

```swift
var usesWeakReadAndWriteBarriers: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If you use garbage collection, read and write barrier functions must be used when pointers are from memory scanned by the collector.

## See Also

### Memory Configuration

- [acquireFunction](acquirefunction.md): The function used to acquire memory.
- [relinquishFunction](relinquishfunction.md): The function used to relinquish memory.
- [usesStrongWriteBarrier](usesstrongwritebarrier.md): Deprecated. Specifies whether, in a garbage collected environment, pointers should be assigned using a strong write barrier.

# usesWeakReadAndWriteBarriers (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 10.0) · iPadOS 6.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.5+ (deprecated in 10.12) · tvOS 9.0+ (deprecated in 10.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 3.0)

Specifies whether, in a garbage collected environment, pointers should use weak read and write barriers.

> Garbage collection no longer supported

## Declaration

```objectivec
@property BOOL usesWeakReadAndWriteBarriers;
```

<a id="Discussion"></a>

## Discussion

If you use garbage collection, read and write barrier functions must be used when pointers are from memory scanned by the collector.

## See Also

### Memory Configuration

- [acquireFunction](acquirefunction.md): The function used to acquire memory.
- [relinquishFunction](relinquishfunction.md): The function used to relinquish memory.
- [usesStrongWriteBarrier](usesstrongwritebarrier.md): Deprecated. Specifies whether, in a garbage collected environment, pointers should be assigned using a strong write barrier.
