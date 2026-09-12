> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/conditiontrait](https://developer.apple.com/documentation/testing/conditiontrait)

# ConditionTrait

**Framework:** Swift Testing  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Swift 6.0+ · Xcode 16.0+

A type that defines a condition which must be satisfied for the testing library to enable a test.

## Declaration

```swift
struct ConditionTrait
```

## Mentioned In

- [Migrating a test from XCTest](migratingfromxctest.md)

<a id="overview"></a>

## Overview

To add this trait to a test, use one of the following functions:

- [enabled(if:\_:sourceLocation:)](trait/enabled%28if___sourcelocation_%29.md)
- [enabled(\_:sourceLocation:\_:)](trait/enabled%28__sourcelocation___%29.md)
- [disabled(\_:sourceLocation:)](trait/disabled%28__sourcelocation_%29.md)
- [disabled(if:\_:sourceLocation:)](trait/disabled%28if___sourcelocation_%29.md)
- [disabled(\_:sourceLocation:\_:)](trait/disabled%28__sourcelocation___%29.md)

## Topics

### Instance Properties

- [sourceLocation](conditiontrait/sourcelocation.md): The source location where this trait is specified.

### Instance Methods

- [evaluate()](conditiontrait/evaluate%28%29.md): Evaluate this instance’s underlying condition.

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
- [IssueHandlingTrait](issuehandlingtrait.md): A type that allows transforming or filtering the issues recorded by a test.
- [ParallelizationTrait](parallelizationtrait.md): A type that defines whether the testing library runs this test serially or in parallel.
- [Tag](tag.md): A type representing a tag that can be applied to a test.
- [Tag.List](tag/list.md): A type representing one or more tags applied to a test.
- [TimeLimitTrait](timelimittrait.md): A type that defines a time limit to apply to a test.
