> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsmaptablevaluecallbacks/retain

# retain (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Points to the function that increments a reference count for the given element. If `NULL`, then nothing is done for reference counting.

## Declaration

```swift
var retain: ((NSMapTable<AnyObject, AnyObject>, UnsafeRawPointer) -> Void)?
```

# retain (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Points to the function that increments a reference count for the given element. If `NULL`, then nothing is done for reference counting.

## Declaration

```objectivec
void (*)(NSMapTable *, const void *) retain;
```
