> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/testtrait](https://developer.apple.com/documentation/testing/testtrait)

# TestTrait

**Framework:** Swift Testing  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Swift 6.0+ · Xcode 16.0+

A protocol describing a trait that you can add to a test function.

## Declaration

```swift
protocol TestTrait : Trait
```

<a id="overview"></a>

## Overview

The testing library defines a number of traits that you can add to test functions. You can also define your own traits by creating types that conform to this protocol, or to the [SuiteTrait](suitetrait.md) protocol.

## Topics

### Type Methods

- [evaluates(\_:info:recordTranscripts:)](testtrait/evaluates%28__info_recordtranscripts_%29.md): Conforms when `Self` is `EvaluationTrait`. Creates a trait that runs a single evaluation and makes its result available through the current evaluation context.

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Trait](trait.md)

### Conforming Types

- [Bug](bug.md)
- [Comment](comment.md)
- [ConditionTrait](conditiontrait.md)
- [IssueHandlingTrait](issuehandlingtrait.md)
- [ParallelizationTrait](parallelizationtrait.md)
- [Tag.List](tag/list.md)
- [TimeLimitTrait](timelimittrait.md)

## See Also

### Creating custom traits

- [Trait](trait.md): A protocol describing traits that can be added to a test function or to a test suite.
- [SuiteTrait](suitetrait.md): A protocol describing a trait that you can add to a test suite.
- [TestScoping](testscoping.md): A protocol that tells the test runner to run custom code before or after it runs a test suite or test function.
