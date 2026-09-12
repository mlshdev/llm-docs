> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsobjecthashcallbacks](https://developer.apple.com/documentation/foundation/nsobjecthashcallbacks)

# NSObjectHashCallBacks (Swift)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

For sets of objects (similar to `NSSet`).

## Declaration

```swift
let NSObjectHashCallBacks: NSHashTableCallBacks
```

## See Also

### Constants

- [NSIntegerHashCallBacks](nsintegerhashcallbacks.md): For sets of `NSInteger`-sized quantities or smaller (for example, `int`, `long`, or `unichar`).
- [NSNonOwnedPointerHashCallBacks](nsnonownedpointerhashcallbacks.md): For sets of pointers, hashed by address.
- [NSNonRetainedObjectHashCallBacks](nsnonretainedobjecthashcallbacks.md): For sets of objects, but without retaining/releasing.
- [NSOwnedObjectIdentityHashCallBacks](nsownedobjectidentityhashcallbacks.md): For sets of objects, with transfer of ownership upon insertion, using pointer equality.
- [NSOwnedPointerHashCallBacks](nsownedpointerhashcallbacks.md): For sets of pointers, with transfer of ownership upon insertion.
- [NSPointerToStructHashCallBacks](nspointertostructhashcallbacks.md): For sets of pointers to structs, when the first field of the struct is `int`-sized.

# NSObjectHashCallBacks (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

For sets of objects (similar to `NSSet`).

## Declaration

```objectivec
extern const NSHashTableCallBacks NSObjectHashCallBacks;
```

## See Also

### Constants

- [NSIntegerHashCallBacks](nsintegerhashcallbacks.md): For sets of `NSInteger`-sized quantities or smaller (for example, `int`, `long`, or `unichar`).
- [NSIntHashCallBacks](nsinthashcallbacks.md): Deprecated. For sets of pointer-sized quantities or smaller (for example, `int`, `long`, or `unichar`).
- [NSNonOwnedPointerHashCallBacks](nsnonownedpointerhashcallbacks.md): For sets of pointers, hashed by address.
- [NSNonRetainedObjectHashCallBacks](nsnonretainedobjecthashcallbacks.md): For sets of objects, but without retaining/releasing.
- [NSOwnedObjectIdentityHashCallBacks](nsownedobjectidentityhashcallbacks.md): For sets of objects, with transfer of ownership upon insertion, using pointer equality.
- [NSOwnedPointerHashCallBacks](nsownedpointerhashcallbacks.md): For sets of pointers, with transfer of ownership upon insertion.
- [NSPointerToStructHashCallBacks](nspointertostructhashcallbacks.md): For sets of pointers to structs, when the first field of the struct is `int`-sized.
