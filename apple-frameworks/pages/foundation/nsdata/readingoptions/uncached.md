> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdata/readingoptions/uncached](https://developer.apple.com/documentation/foundation/nsdata/readingoptions/uncached)

# uncached (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A hint indicating the file should not be stored in the file-system caches.

## Declaration

```swift
static var uncached: NSData.ReadingOptions { get }
```

<a id="Discussion"></a>

## Discussion

For data being read once and discarded, this option can improve performance.

## See Also

### Constants

- [mappedIfSafe](mappedifsafe.md): A hint indicating the file should be mapped into virtual memory, if possible and safe.
- [alwaysMapped](alwaysmapped.md): Hint to map the file in if possible.

# NSDataReadingUncached (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A hint indicating the file should not be stored in the file-system caches.

## Declaration

```objectivec
NSDataReadingUncached
```

<a id="Discussion"></a>

## Discussion

For data being read once and discarded, this option can improve performance.

## See Also

### Constants

- [NSDataReadingMappedIfSafe](mappedifsafe.md): A hint indicating the file should be mapped into virtual memory, if possible and safe.
- [NSDataReadingMappedAlways](alwaysmapped.md): Hint to map the file in if possible.
