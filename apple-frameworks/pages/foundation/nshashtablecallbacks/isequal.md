> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nshashtablecallbacks/isequal](https://developer.apple.com/documentation/foundation/nshashtablecallbacks/isequal)

# isEqual (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Points to the function that compares second and third parameters. If `NULL`, then == is used for comparison.

## Declaration

```swift
var isEqual: ((NSHashTable<AnyObject>, UnsafeRawPointer, UnsafeRawPointer) -> ObjCBool)?
```

# isEqual (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Points to the function that compares second and third parameters. If `NULL`, then == is used for comparison.

## Declaration

```objectivec
_Bool (*)(NSHashTable *, const void *, const void *) isEqual;
```
