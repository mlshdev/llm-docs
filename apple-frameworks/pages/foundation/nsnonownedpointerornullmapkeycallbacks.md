> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsnonownedpointerornullmapkeycallbacks](https://developer.apple.com/documentation/foundation/nsnonownedpointerornullmapkeycallbacks)

# NSNonOwnedPointerOrNullMapKeyCallBacks (Swift)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

For keys that are pointers not freed, or `NULL`.

## Declaration

```swift
let NSNonOwnedPointerOrNullMapKeyCallBacks: NSMapTableKeyCallBacks
```

## See Also

### Constants

- [NSIntegerMapKeyCallBacks](nsintegermapkeycallbacks.md): For keys that are pointer-sized quantities or smaller (for example, `int`, `long`, or `unichar`).
- [NSIntMapKeyCallBacks](nsintmapkeycallbacks.md): Deprecated. For keys that are pointer-sized quantities or smaller (for example, `int`, `long`, or `unichar`).
- [NSNonOwnedPointerMapKeyCallBacks](nsnonownedpointermapkeycallbacks.md): For keys that are pointers not freed.
- [NSNonRetainedObjectMapKeyCallBacks](nsnonretainedobjectmapkeycallbacks.md): For sets of objects, but without retaining/releasing.
- [NSObjectMapKeyCallBacks](nsobjectmapkeycallbacks.md): For keys that are objects.
- [NSOwnedPointerMapKeyCallBacks](nsownedpointermapkeycallbacks.md): For keys that are pointers, with transfer of ownership upon insertion.

# NSNonOwnedPointerOrNullMapKeyCallBacks (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

For keys that are pointers not freed, or `NULL`.

## Declaration

```objectivec
extern const NSMapTableKeyCallBacks NSNonOwnedPointerOrNullMapKeyCallBacks;
```

## See Also

### Constants

- [NSIntegerMapKeyCallBacks](nsintegermapkeycallbacks.md): For keys that are pointer-sized quantities or smaller (for example, `int`, `long`, or `unichar`).
- [NSIntMapKeyCallBacks](nsintmapkeycallbacks.md): Deprecated. For keys that are pointer-sized quantities or smaller (for example, `int`, `long`, or `unichar`).
- [NSNonOwnedPointerMapKeyCallBacks](nsnonownedpointermapkeycallbacks.md): For keys that are pointers not freed.
- [NSNonRetainedObjectMapKeyCallBacks](nsnonretainedobjectmapkeycallbacks.md): For sets of objects, but without retaining/releasing.
- [NSObjectMapKeyCallBacks](nsobjectmapkeycallbacks.md): For keys that are objects.
- [NSOwnedPointerMapKeyCallBacks](nsownedpointermapkeycallbacks.md): For keys that are pointers, with transfer of ownership upon insertion.
