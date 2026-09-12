> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nshashtablecallbacks/retain](https://developer.apple.com/documentation/foundation/nshashtablecallbacks/retain)

# retain (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Points to the function that increments a reference count for the given element. If `NULL`, then nothing is done for reference counting.

## Declaration

```swift
var retain: ((NSHashTable<AnyObject>, UnsafeRawPointer) -> Void)?
```

# retain (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Points to the function that increments a reference count for the given element. If `NULL`, then nothing is done for reference counting.

## Declaration

```objectivec
void (*)(NSHashTable *, const void *) retain;
```
