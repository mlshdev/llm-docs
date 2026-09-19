> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsmaptablekeycallbacks/isequal

# isEqual (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Points to the function which compares second and third parameters. If `NULL`, then == is used for comparison.

## Declaration

```swift
var isEqual: ((NSMapTable<AnyObject, AnyObject>, UnsafeRawPointer, UnsafeRawPointer) -> ObjCBool)?
```

# isEqual (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Points to the function which compares second and third parameters. If `NULL`, then == is used for comparison.

## Declaration

```objectivec
_Bool (*)(NSMapTable *, const void *, const void *) isEqual;
```
