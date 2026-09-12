> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/trait](https://developer.apple.com/documentation/testing/trait)

# Trait

**Framework:** Swift Testing  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Swift 6.0+ · Xcode 16.0+

A protocol describing traits that can be added to a test function or to a test suite.

## Declaration

```swift
protocol Trait : Sendable
```

<a id="overview"></a>

## Overview

The testing library defines a number of traits that can be added to test functions and to test suites. Define your own traits by creating types that conform to [TestTrait](testtrait.md) or [SuiteTrait](suitetrait.md):

- **[TestTrait](testtrait.md)**: Conform to this type in traits that you add to test functions.
- **[SuiteTrait](suitetrait.md)**: Conform to this type in traits that you add to test suites.

You can add a trait that conforms to both [TestTrait](testtrait.md) and [SuiteTrait](suitetrait.md) to test functions and test suites.

## Topics

### Enabling and disabling tests

- [enabled(if:\_:sourceLocation:)](trait/enabled%28if___sourcelocation_%29.md): Conforms when `Self` is `ConditionTrait`. Constructs a condition trait that disables a test if it returns `false`.
- [enabled(\_:sourceLocation:\_:)](trait/enabled%28__sourcelocation___%29.md): Conforms when `Self` is `ConditionTrait`. Constructs a condition trait that disables a test if it returns `false`.
- [disabled(\_:sourceLocation:)](trait/disabled%28__sourcelocation_%29.md): Conforms when `Self` is `ConditionTrait`. Constructs a condition trait that disables a test unconditionally.
- [disabled(if:\_:sourceLocation:)](trait/disabled%28if___sourcelocation_%29.md): Conforms when `Self` is `ConditionTrait`. Constructs a condition trait that disables a test if its value is true.
- [disabled(\_:sourceLocation:\_:)](trait/disabled%28__sourcelocation___%29.md): Conforms when `Self` is `ConditionTrait`. Constructs a condition trait that disables a test if its value is true.

### Controlling how tests are run

- [timeLimit(\_:)](trait/timelimit%28__%29.md): Conforms when `Self` is `TimeLimitTrait`. Construct a time limit trait that causes a test to time out if it runs for too long.
- [serialized](trait/serialized.md): Conforms when `Self` is `ParallelizationTrait`. A trait that serializes the test to which it is applied.

### Categorizing tests and adding information

- [tags(\_:)](trait/tags%28__%29.md): Conforms when `Self` is `Tag.List`. Construct a list of tags to apply to a test.
- [comments](trait/comments.md): The user-provided comments for this trait.

### Associating bugs

- [bug(\_:\_:)](trait/bug%28____%29.md): Conforms when `Self` is `Bug`. Constructs a bug to track with a test.
- [bug(\_:id:\_:)](trait/bug%28__id___%29-10yf5.md): Conforms when `Self` is `Bug`. Constructs a bug to track with a test.
- [bug(\_:id:\_:)](trait/bug%28__id___%29-3vtpl.md): Conforms when `Self` is `Bug`. Constructs a bug to track with a test.

### Running code before and after a test or suite

- [TestScoping](testscoping.md): A protocol that tells the test runner to run custom code before or after it runs a test suite or test function.
- [scopeProvider(for:testCase:)](trait/scopeprovider%28for_testcase_%29.md): Get this trait’s scope provider for the specified test and optional test case.
- [TestScopeProvider](trait/testscopeprovider.md): The type of the test scope provider for this trait.
- [prepare(for:)](trait/prepare%28for_%29.md): Prepare to run the test that has this trait.

### Type Methods

- [compactMapIssues(\_:)](trait/compactmapissues%28__%29.md): Conforms when `Self` is `IssueHandlingTrait`. Constructs an trait that transforms issues recorded by a test.
- [filterIssues(\_:)](trait/filterissues%28__%29.md): Conforms when `Self` is `IssueHandlingTrait`. Constructs a trait that filters issues recorded by a test.

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Inherited By

- [SuiteTrait](suitetrait.md)
- [TestTrait](testtrait.md)

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

- [TestTrait](testtrait.md): A protocol describing a trait that you can add to a test function.
- [SuiteTrait](suitetrait.md): A protocol describing a trait that you can add to a test suite.
- [TestScoping](testscoping.md): A protocol that tells the test runner to run custom code before or after it runs a test suite or test function.
