> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsmaptablevaluecallbacks/describe

# describe (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Points to the function that produces an autoreleased NSString \* describing the given element. If `NULL`, then the map table produces a generic string description.

## Declaration

```swift
var describe: ((NSMapTable<AnyObject, AnyObject>, UnsafeRawPointer) -> String?)?
```

# describe (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Points to the function that produces an autoreleased NSString \* describing the given element. If `NULL`, then the map table produces a generic string description.

## Declaration

```objectivec
NSString *(*)(NSMapTable *, const void *) describe;
```
