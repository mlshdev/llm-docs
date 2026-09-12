> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscopying/copy(with:)](https://developer.apple.com/documentation/foundation/nscopying/copy(with:))

# copy(with:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 1.0+ · iPadOS 1.0+ · Mac Catalyst 1.0+ · macOS 10.0+ · tvOS 1.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a new instance that’s a copy of the receiver.

## Declaration

```swift
func copy(with zone: NSZone? = nil) -> Any
```

## Parameters

- `zone`: This parameter is ignored. Memory zones are no longer used by Objective-C.

<a id="Discussion"></a>

## Discussion

The returned object is implicitly retained by the sender, who is responsible for releasing it. The copy returned is immutable if the consideration “immutable vs. mutable” applies to the receiving object; otherwise the exact nature of the copy is determined by the class.

## See Also

### Related Documentation

- [mutableCopy(with:)](../nsmutablecopying/mutablecopy%28with_%29.md): Returns a new instance that’s a mutable copy of the receiver.
- [copy()](../../objectivec/nsobject-swift.class/copy%28%29.md): Returns the object returned by `copy(with:)`.
- [Advanced Memory Management Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/MemoryMgmt/Articles/MemoryMgmt.html#//apple_ref/doc/uid/10000011i)

# copyWithZone: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new instance that’s a copy of the receiver.

## Declaration

```objectivec
- (id) copyWithZone:(NSZone *) zone;
```

## Parameters

- `zone`: This parameter is ignored. Memory zones are no longer used by Objective-C.

<a id="Discussion"></a>

## Discussion

The returned object is implicitly retained by the sender, who is responsible for releasing it. The copy returned is immutable if the consideration “immutable vs. mutable” applies to the receiving object; otherwise the exact nature of the copy is determined by the class.

## See Also

### Related Documentation

- [mutableCopyWithZone:](../nsmutablecopying/mutablecopy%28with_%29.md): Returns a new instance that’s a mutable copy of the receiver.
- [copy](../../objectivec/nsobject-swift.class/copy%28%29.md): Returns the object returned by `copy(with:)`.
- [Advanced Memory Management Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/MemoryMgmt/Articles/MemoryMgmt.html#//apple_ref/doc/uid/10000011i)
