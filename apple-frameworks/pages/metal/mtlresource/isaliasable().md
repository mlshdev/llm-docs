> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlresource/isaliasable()](https://developer.apple.com/documentation/metal/mtlresource/isaliasable())

# isAliasable() (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value that indicates whether future heap resource allocations may alias against the resource’s memory.

## Declaration

```swift
func isAliasable() -> Bool
```

<a id="return-value"></a>

## Return Value

The default value is [false](https://developer.apple.com/documentation/swift/false). The value is [true](https://developer.apple.com/documentation/swift/true) only if the [makeAliasable()](makealiasable%28%29.md) method was previously called on this resource.

## See Also

### Managing heap resources

- [heapOffset](heapoffset.md): The distance, in bytes, from the beginning of the heap to the first byte of the resource, if you allocated the resource on a heap.
- [heap](heap.md): The heap on which the resource is allocated, if any.
- [makeAliasable()](makealiasable%28%29.md): Allows future heap resource allocations to alias against the resource’s memory, reusing it.

# isAliasable (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value that indicates whether future heap resource allocations may alias against the resource’s memory.

## Declaration

```objectivec
- (BOOL) isAliasable;
```

<a id="return-value"></a>

## Return Value

The default value is [false](https://developer.apple.com/documentation/swift/false). The value is [true](https://developer.apple.com/documentation/swift/true) only if the [makeAliasable](makealiasable%28%29.md) method was previously called on this resource.

## See Also

### Managing heap resources

- [heapOffset](heapoffset.md): The distance, in bytes, from the beginning of the heap to the first byte of the resource, if you allocated the resource on a heap.
- [heap](heap.md): The heap on which the resource is allocated, if any.
- [makeAliasable](makealiasable%28%29.md): Allows future heap resource allocations to alias against the resource’s memory, reusing it.
