> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/issuehandlingtrait](https://developer.apple.com/documentation/testing/issuehandlingtrait)

# IssueHandlingTrait

**Framework:** Swift Testing  
**Kind:** Structure  
**Availability:** Swift 6.2+ · Xcode 26.0+

A type that allows transforming or filtering the issues recorded by a test.

## Declaration

```swift
struct IssueHandlingTrait
```

<a id="overview"></a>

## Overview

Use this type to observe or customize the issue(s) recorded by the test this trait is applied to. You can transform a recorded issue by copying it, modifying one or more of its properties, and returning the copy. You can observe recorded issues by returning them unmodified. Or you can suppress an issue by either filtering it using [filterIssues(\_:)](trait/filterissues%28__%29.md) or returning `nil` from the closure passed to [compactMapIssues(\_:)](trait/compactmapissues%28__%29.md).

When an instance of this trait is applied to a suite, it is recursively inherited by all child suites and tests.

To add this trait to a test, use one of the following functions:

- [compactMapIssues(\_:)](trait/compactmapissues%28__%29.md)
- [filterIssues(\_:)](trait/filterissues%28__%29.md)

## Topics

### Instance Methods

- [handleIssue(\_:)](issuehandlingtrait/handleissue%28__%29.md): Handle a specified issue.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SuiteTrait](suitetrait.md)
- [TestScoping](testscoping.md)
- [TestTrait](testtrait.md)
- [Trait](trait.md)

## See Also

### Supporting types

- [Bug](bug.md): A type that represents a bug report tracked by a test.
- [Comment](comment.md): A type that represents a comment related to a test.
- [ConditionTrait](conditiontrait.md): A type that defines a condition which must be satisfied for the testing library to enable a test.
- [ParallelizationTrait](parallelizationtrait.md): A type that defines whether the testing library runs this test serially or in parallel.
- [Tag](tag.md): A type representing a tag that can be applied to a test.
- [Tag.List](tag/list.md): A type representing one or more tags applied to a test.
- [TimeLimitTrait](timelimittrait.md): A type that defines a time limit to apply to a test.
