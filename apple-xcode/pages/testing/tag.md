> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/tag](https://developer.apple.com/documentation/testing/tag)

# Tag

**Framework:** Swift Testing  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Swift 6.0+ · Xcode 16.0+

A type representing a tag that can be applied to a test.

## Declaration

```swift
struct Tag
```

## Mentioned In

- [Adding tags to tests](addingtags.md)

<a id="overview"></a>

## Overview

To apply tags to a test, use the [tags(\_:)](trait/tags%28__%29.md) function.

## Topics

### Structures

- [Tag.List](tag/list.md): A type representing one or more tags applied to a test.

## Relationships

### Conforms To

- [CodingKeyRepresentable](https://developer.apple.com/documentation/swift/codingkeyrepresentable)
- [Comparable](https://developer.apple.com/documentation/swift/comparable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting types

- [Bug](bug.md): A type that represents a bug report tracked by a test.
- [Comment](comment.md): A type that represents a comment related to a test.
- [ConditionTrait](conditiontrait.md): A type that defines a condition which must be satisfied for the testing library to enable a test.
- [IssueHandlingTrait](issuehandlingtrait.md): A type that allows transforming or filtering the issues recorded by a test.
- [ParallelizationTrait](parallelizationtrait.md): A type that defines whether the testing library runs this test serially or in parallel.
- [Tag.List](tag/list.md): A type representing one or more tags applied to a test.
- [TimeLimitTrait](timelimittrait.md): A type that defines a time limit to apply to a test.
