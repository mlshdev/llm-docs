> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsintegerhashcallbacks](https://developer.apple.com/documentation/foundation/nsintegerhashcallbacks)

# NSIntegerHashCallBacks (Swift)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

For sets of `NSInteger`-sized quantities or smaller (for example, `int`, `long`, or `unichar`).

## Declaration

```swift
let NSIntegerHashCallBacks: NSHashTableCallBacks
```

## See Also

### Constants

- [NSNonOwnedPointerHashCallBacks](nsnonownedpointerhashcallbacks.md): For sets of pointers, hashed by address.
- [NSNonRetainedObjectHashCallBacks](nsnonretainedobjecthashcallbacks.md): For sets of objects, but without retaining/releasing.
- [NSObjectHashCallBacks](nsobjecthashcallbacks.md): For sets of objects (similar to `NSSet`).
- [NSOwnedObjectIdentityHashCallBacks](nsownedobjectidentityhashcallbacks.md): For sets of objects, with transfer of ownership upon insertion, using pointer equality.
- [NSOwnedPointerHashCallBacks](nsownedpointerhashcallbacks.md): For sets of pointers, with transfer of ownership upon insertion.
- [NSPointerToStructHashCallBacks](nspointertostructhashcallbacks.md): For sets of pointers to structs, when the first field of the struct is `int`-sized.

# NSIntegerHashCallBacks (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

For sets of `NSInteger`-sized quantities or smaller (for example, `int`, `long`, or `unichar`).

## Declaration

```objectivec
extern const NSHashTableCallBacks NSIntegerHashCallBacks;
```

## See Also

### Constants

- [NSIntHashCallBacks](nsinthashcallbacks.md): Deprecated. For sets of pointer-sized quantities or smaller (for example, `int`, `long`, or `unichar`).
- [NSNonOwnedPointerHashCallBacks](nsnonownedpointerhashcallbacks.md): For sets of pointers, hashed by address.
- [NSNonRetainedObjectHashCallBacks](nsnonretainedobjecthashcallbacks.md): For sets of objects, but without retaining/releasing.
- [NSObjectHashCallBacks](nsobjecthashcallbacks.md): For sets of objects (similar to `NSSet`).
- [NSOwnedObjectIdentityHashCallBacks](nsownedobjectidentityhashcallbacks.md): For sets of objects, with transfer of ownership upon insertion, using pointer equality.
- [NSOwnedPointerHashCallBacks](nsownedpointerhashcallbacks.md): For sets of pointers, with transfer of ownership upon insertion.
- [NSPointerToStructHashCallBacks](nspointertostructhashcallbacks.md): For sets of pointers to structs, when the first field of the struct is `int`-sized.
