> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdata/readingoptions/alwaysmapped](https://developer.apple.com/documentation/foundation/nsdata/readingoptions/alwaysmapped)

# alwaysMapped (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Hint to map the file in if possible.

## Declaration

```swift
static var alwaysMapped: NSData.ReadingOptions { get }
```

<a id="Discussion"></a>

## Discussion

This takes precedence over [mappedIfSafe](mappedifsafe.md) if both are given.

## See Also

### Constants

- [mappedIfSafe](mappedifsafe.md): A hint indicating the file should be mapped into virtual memory, if possible and safe.
- [uncached](uncached.md): A hint indicating the file should not be stored in the file-system caches.

# NSDataReadingMappedAlways (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Hint to map the file in if possible.

## Declaration

```objectivec
NSDataReadingMappedAlways
```

<a id="Discussion"></a>

## Discussion

This takes precedence over [NSDataReadingMappedIfSafe](mappedifsafe.md) if both are given.

## See Also

### Constants

- [NSDataReadingMappedIfSafe](mappedifsafe.md): A hint indicating the file should be mapped into virtual memory, if possible and safe.
- [NSDataReadingUncached](uncached.md): A hint indicating the file should not be stored in the file-system caches.
