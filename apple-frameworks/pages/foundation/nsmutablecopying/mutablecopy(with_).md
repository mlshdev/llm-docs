> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutablecopying/mutablecopy(with:)](https://developer.apple.com/documentation/foundation/nsmutablecopying/mutablecopy(with:))

# mutableCopy(with:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 1.0+ · iPadOS 1.0+ · Mac Catalyst 1.0+ · macOS 10.0+ · tvOS 1.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a new instance that’s a mutable copy of the receiver.

## Declaration

```swift
func mutableCopy(with zone: NSZone? = nil) -> Any
```

## Parameters

- `zone`: This parameter is ignored. Memory zones are no longer used by Objective-C.

<a id="Discussion"></a>

## Discussion

The returned object is implicitly retained by the sender, which is responsible for releasing it. The copy returned is mutable whether the original is mutable or not.

## See Also

### Related Documentation

- [copy(with:)](../nscopying/copy%28with_%29.md): Returns a new instance that’s a copy of the receiver.
- [Advanced Memory Management Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/MemoryMgmt/Articles/MemoryMgmt.html#//apple_ref/doc/uid/10000011i)
- [mutableCopy()](../../objectivec/nsobject-swift.class/mutablecopy%28%29.md): Returns the object returned by `mutableCopy(with:)` where the zone is `nil`.

# mutableCopyWithZone: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new instance that’s a mutable copy of the receiver.

## Declaration

```objectivec
- (id) mutableCopyWithZone:(NSZone *) zone;
```

## Parameters

- `zone`: This parameter is ignored. Memory zones are no longer used by Objective-C.

<a id="Discussion"></a>

## Discussion

The returned object is implicitly retained by the sender, which is responsible for releasing it. The copy returned is mutable whether the original is mutable or not.

## See Also

### Related Documentation

- [copyWithZone:](../nscopying/copy%28with_%29.md): Returns a new instance that’s a copy of the receiver.
- [Advanced Memory Management Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/MemoryMgmt/Articles/MemoryMgmt.html#//apple_ref/doc/uid/10000011i)
- [mutableCopy](../../objectivec/nsobject-swift.class/mutablecopy%28%29.md): Returns the object returned by `mutableCopy(with:)` where the zone is `nil`.
