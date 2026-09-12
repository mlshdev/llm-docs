> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfcomparisonresult](https://developer.apple.com/documentation/corefoundation/cfcomparisonresult)

# CFComparisonResult (Swift)

**Framework:** Core Foundation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants returned by comparison functions, indicating whether a value is equal to, less than, or greater than another value.

## Declaration

```swift
enum CFComparisonResult
```

## Topics

### Constants

- [CFComparisonResult.compareLessThan](cfcomparisonresult/comparelessthan.md): Returned by a comparison function if the first value is less than the second value.
- [CFComparisonResult.compareEqualTo](cfcomparisonresult/compareequalto.md): Returned by a comparison function if the first value is equal to the second value.
- [CFComparisonResult.compareGreaterThan](cfcomparisonresult/comparegreaterthan.md): Returned by a comparison function if the first value is greater than the second value.

### Initializers

- [init(rawValue:)](cfcomparisonresult/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [Value Not Found](value-not-found.md): Special value returned when a Core Foundation function cannot locate a requested value.
- [Current Framework Version Number](current-framework-version-number.md): Current version number of the Core Foundation framework.
- [Framework Version Numbers](framework-version-numbers.md): Version numbers of the Core Foundation framework.

# CFComparisonResult (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants returned by comparison functions, indicating whether a value is equal to, less than, or greater than another value.

## Declaration

```objectivec
enum CFComparisonResult : CFIndex;
```

## Topics

### Constants

- [kCFCompareLessThan](cfcomparisonresult/comparelessthan.md): Returned by a comparison function if the first value is less than the second value.
- [kCFCompareEqualTo](cfcomparisonresult/compareequalto.md): Returned by a comparison function if the first value is equal to the second value.
- [kCFCompareGreaterThan](cfcomparisonresult/comparegreaterthan.md): Returned by a comparison function if the first value is greater than the second value.

## See Also

### Constants

- [Value Not Found](value-not-found.md): Special value returned when a Core Foundation function cannot locate a requested value.
- [Current Framework Version Number](current-framework-version-number.md): Current version number of the Core Foundation framework.
- [Framework Version Numbers](framework-version-numbers.md): Version numbers of the Core Foundation framework.
