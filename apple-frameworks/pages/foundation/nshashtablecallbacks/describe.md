> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nshashtablecallbacks/describe](https://developer.apple.com/documentation/foundation/nshashtablecallbacks/describe)

# describe (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Points to the function that produces an autoreleased NSString \* describing the given element. If `NULL`, then the hash table produces a generic string description.

## Declaration

```swift
var describe: ((NSHashTable<AnyObject>, UnsafeRawPointer) -> String?)?
```

# describe (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Points to the function that produces an autoreleased NSString \* describing the given element. If `NULL`, then the hash table produces a generic string description.

## Declaration

```objectivec
NSString *(*)(NSHashTable *, const void *) describe;
```
