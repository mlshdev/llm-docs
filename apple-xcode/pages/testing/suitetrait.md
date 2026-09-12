> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/suitetrait](https://developer.apple.com/documentation/testing/suitetrait)

# SuiteTrait

**Framework:** Swift Testing  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Swift 6.0+ · Xcode 16.0+

A protocol describing a trait that you can add to a test suite.

## Declaration

```swift
protocol SuiteTrait : Trait
```

<a id="overview"></a>

## Overview

The testing library defines a number of traits that you can add to test suites. You can also define your own traits by creating types that conform to this protocol, or to the [TestTrait](testtrait.md) protocol.

## Topics

### Instance Properties

- [isRecursive](suitetrait/isrecursive.md): Whether this instance should be applied recursively to child test suites and test functions.

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
- [TestTrait](testtrait.md): A protocol describing a trait that you can add to a test function.
- [TestScoping](testscoping.md): A protocol that tells the test runner to run custom code before or after it runs a test suite or test function.
