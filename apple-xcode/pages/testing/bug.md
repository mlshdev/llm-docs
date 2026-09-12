> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/bug](https://developer.apple.com/documentation/testing/bug)

# Bug

**Framework:** Swift Testing  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Swift 6.0+ · Xcode 16.0+

A type that represents a bug report tracked by a test.

## Declaration

```swift
struct Bug
```

## Mentioned In

- [Interpreting bug identifiers](bugidentifiers.md)
- [Adding comments to tests](addingcomments.md)

<a id="overview"></a>

## Overview

To add this trait to a test, use one of the following functions:

- [bug(\_:\_:)](trait/bug%28____%29.md)
- [bug(\_:id:\_:)](trait/bug%28__id___%29-10yf5.md)
- [bug(\_:id:\_:)](trait/bug%28__id___%29-3vtpl.md)

## Topics

### Instance Properties

- [id](bug/id.md): A unique identifier in this bug’s associated bug-tracking system, if available.
- [title](bug/title.md): The human-readable title of the bug, if specified by the test author.
- [url](bug/url.md): A URL that links to more information about the bug, if available.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SuiteTrait](suitetrait.md)
- [TestTrait](testtrait.md)
- [Trait](trait.md)

## See Also

### Supporting types

- [Comment](comment.md): A type that represents a comment related to a test.
- [ConditionTrait](conditiontrait.md): A type that defines a condition which must be satisfied for the testing library to enable a test.
- [IssueHandlingTrait](issuehandlingtrait.md): A type that allows transforming or filtering the issues recorded by a test.
- [ParallelizationTrait](parallelizationtrait.md): A type that defines whether the testing library runs this test serially or in parallel.
- [Tag](tag.md): A type representing a tag that can be applied to a test.
- [Tag.List](tag/list.md): A type representing one or more tags applied to a test.
- [TimeLimitTrait](timelimittrait.md): A type that defines a time limit to apply to a test.
