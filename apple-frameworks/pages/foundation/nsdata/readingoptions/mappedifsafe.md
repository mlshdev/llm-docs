> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdata/readingoptions/mappedifsafe](https://developer.apple.com/documentation/foundation/nsdata/readingoptions/mappedifsafe)

# mappedIfSafe (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A hint indicating the file should be mapped into virtual memory, if possible and safe.

## Declaration

```swift
static var mappedIfSafe: NSData.ReadingOptions { get }
```

## See Also

### Constants

- [uncached](uncached.md): A hint indicating the file should not be stored in the file-system caches.
- [alwaysMapped](alwaysmapped.md): Hint to map the file in if possible.

# NSDataReadingMappedIfSafe (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A hint indicating the file should be mapped into virtual memory, if possible and safe.

## Declaration

```objectivec
NSDataReadingMappedIfSafe
```

## See Also

### Constants

- [NSDataReadingUncached](uncached.md): A hint indicating the file should not be stored in the file-system caches.
- [NSDataReadingMappedAlways](alwaysmapped.md): Hint to map the file in if possible.
