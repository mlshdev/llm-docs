> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/timelimittrait](https://developer.apple.com/documentation/testing/timelimittrait)

# TimeLimitTrait

**Framework:** Swift Testing  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+ · Swift 6.0+ · Xcode 16.0+

A type that defines a time limit to apply to a test.

## Declaration

```swift
struct TimeLimitTrait
```

<a id="overview"></a>

## Overview

To add this trait to a test, use [timeLimit(\_:)](trait/timelimit%28__%29.md).

## Topics

### Structures

- [TimeLimitTrait.Duration](timelimittrait/duration.md): A type representing the duration of a time limit applied to a test.

### Instance Properties

- [timeLimit](timelimittrait/timelimit.md): The maximum amount of time a test may run for before timing out.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SuiteTrait](suitetrait.md)
- [TestTrait](testtrait.md)
- [Trait](trait.md)

## See Also

### Supporting types

- [Bug](bug.md): A type that represents a bug report tracked by a test.
- [Comment](comment.md): A type that represents a comment related to a test.
- [ConditionTrait](conditiontrait.md): A type that defines a condition which must be satisfied for the testing library to enable a test.
- [IssueHandlingTrait](issuehandlingtrait.md): A type that allows transforming or filtering the issues recorded by a test.
- [ParallelizationTrait](parallelizationtrait.md): A type that defines whether the testing library runs this test serially or in parallel.
- [Tag](tag.md): A type representing a tag that can be applied to a test.
- [Tag.List](tag/list.md): A type representing one or more tags applied to a test.
