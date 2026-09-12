> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/rangecheckingresolver](https://developer.apple.com/documentation/appintents/rangecheckingresolver)

# RangeCheckingResolver

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

An interface for validating that a value is within a parameter’s defined inclusive range.

## Declaration

```swift
protocol RangeCheckingResolver : Resolver
```

## Topics

### Checking the range of a parameter

- [checkParameterRangeContains(value:context:)](rangecheckingresolver/checkparameterrangecontains%28value_context_%29.md)

## Relationships

### Inherits From

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Resolver](resolver.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [DoubleFromIntResolver](doublefromintresolver.md)
- [DoubleFromStringResolver](doublefromstringresolver.md)
- [DoubleResolver](doubleresolver.md)
- [IntFromDoubleResolver](intfromdoubleresolver.md)
- [IntFromStringResolver](intfromstringresolver.md)
- [IntResolver](intresolver.md)

## See Also

### Range validation

- [RangeComparableProperty](rangecomparableproperty.md)
