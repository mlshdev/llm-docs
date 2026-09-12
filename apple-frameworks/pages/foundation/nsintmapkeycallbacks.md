> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsintmapkeycallbacks](https://developer.apple.com/documentation/foundation/nsintmapkeycallbacks)

# NSIntMapKeyCallBacks (Swift)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ (deprecated in 2.0) · iPadOS 2.0+ (deprecated in 2.0) · Mac Catalyst 2.0+ (deprecated in 2.0) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

For keys that are pointer-sized quantities or smaller (for example, `int`, `long`, or `unichar`).

> Use `NSIntegerMapKeyCallBacks` instead.

## Declaration

```swift
let NSIntMapKeyCallBacks: NSMapTableKeyCallBacks
```

## See Also

### Constants

- [NSIntegerMapKeyCallBacks](nsintegermapkeycallbacks.md): For keys that are pointer-sized quantities or smaller (for example, `int`, `long`, or `unichar`).
- [NSNonOwnedPointerMapKeyCallBacks](nsnonownedpointermapkeycallbacks.md): For keys that are pointers not freed.
- [NSNonOwnedPointerOrNullMapKeyCallBacks](nsnonownedpointerornullmapkeycallbacks.md): For keys that are pointers not freed, or `NULL`.
- [NSNonRetainedObjectMapKeyCallBacks](nsnonretainedobjectmapkeycallbacks.md): For sets of objects, but without retaining/releasing.
- [NSObjectMapKeyCallBacks](nsobjectmapkeycallbacks.md): For keys that are objects.
- [NSOwnedPointerMapKeyCallBacks](nsownedpointermapkeycallbacks.md): For keys that are pointers, with transfer of ownership upon insertion.

# NSIntMapKeyCallBacks (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ (deprecated in 2.0) · iPadOS 2.0+ (deprecated in 2.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.5) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

For keys that are pointer-sized quantities or smaller (for example, `int`, `long`, or `unichar`).

> Use `NSIntegerMapKeyCallBacks` instead.

## Declaration

```objectivec
extern const NSMapTableKeyCallBacks NSIntMapKeyCallBacks;
```

## See Also

### Constants

- [NSIntegerMapKeyCallBacks](nsintegermapkeycallbacks.md): For keys that are pointer-sized quantities or smaller (for example, `int`, `long`, or `unichar`).
- [NSNonOwnedPointerMapKeyCallBacks](nsnonownedpointermapkeycallbacks.md): For keys that are pointers not freed.
- [NSNonOwnedPointerOrNullMapKeyCallBacks](nsnonownedpointerornullmapkeycallbacks.md): For keys that are pointers not freed, or `NULL`.
- [NSNonRetainedObjectMapKeyCallBacks](nsnonretainedobjectmapkeycallbacks.md): For sets of objects, but without retaining/releasing.
- [NSObjectMapKeyCallBacks](nsobjectmapkeycallbacks.md): For keys that are objects.
- [NSOwnedPointerMapKeyCallBacks](nsownedpointermapkeycallbacks.md): For keys that are pointers, with transfer of ownership upon insertion.
