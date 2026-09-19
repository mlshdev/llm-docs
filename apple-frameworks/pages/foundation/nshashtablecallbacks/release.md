> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nshashtablecallbacks/release

# release (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Points to the function that decrements a reference count for the given element, and if the reference count becomes 0, frees the given element. If `NULL`, then nothing is done for reference counting or releasing.

## Declaration

```swift
var release: ((NSHashTable<AnyObject>, UnsafeMutableRawPointer) -> Void)?
```

# release (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Points to the function that decrements a reference count for the given element, and if the reference count becomes 0, frees the given element. If `NULL`, then nothing is done for reference counting or releasing.

## Declaration

```objectivec
void (*)(NSHashTable *, void *) release;
```
