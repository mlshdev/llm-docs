> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsinthashcallbacks](https://developer.apple.com/documentation/foundation/nsinthashcallbacks)

# NSIntHashCallBacks

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** macOS 10.0+ (deprecated in 10.5)

For sets of pointer-sized quantities or smaller (for example, `int`, `long`, or `unichar`).

> Use `NSIntegerHashCallBacks` instead.

## Declaration

```objectivec
extern const NSHashTableCallBacks NSIntHashCallBacks;
```

## See Also

### Constants

- [NSIntegerHashCallBacks](nsintegerhashcallbacks.md): For sets of `NSInteger`-sized quantities or smaller (for example, `int`, `long`, or `unichar`).
- [NSNonOwnedPointerHashCallBacks](nsnonownedpointerhashcallbacks.md): For sets of pointers, hashed by address.
- [NSNonRetainedObjectHashCallBacks](nsnonretainedobjecthashcallbacks.md): For sets of objects, but without retaining/releasing.
- [NSObjectHashCallBacks](nsobjecthashcallbacks.md): For sets of objects (similar to `NSSet`).
- [NSOwnedObjectIdentityHashCallBacks](nsownedobjectidentityhashcallbacks.md): For sets of objects, with transfer of ownership upon insertion, using pointer equality.
- [NSOwnedPointerHashCallBacks](nsownedpointerhashcallbacks.md): For sets of pointers, with transfer of ownership upon insertion.
- [NSPointerToStructHashCallBacks](nspointertostructhashcallbacks.md): For sets of pointers to structs, when the first field of the struct is `int`-sized.
