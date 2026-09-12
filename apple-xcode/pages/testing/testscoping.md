> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/testscoping](https://developer.apple.com/documentation/testing/testscoping)

# TestScoping

**Framework:** Swift Testing  
**Kind:** Protocol  
**Availability:** Swift 6.1+ · Xcode 16.3+

A protocol that tells the test runner to run custom code before or after it runs a test suite or test function.

## Declaration

```swift
protocol TestScoping : Sendable
```

<a id="overview"></a>

## Overview

Provide custom scope for tests by implementing the [scopeProvider(for:testCase:)](trait/scopeprovider%28for_testcase_%29.md) method, returning a type that conforms to this protocol. Create a custom scope to consolidate common set-up and tear-down logic for tests which have similar needs, which allows each test function to focus on the unique aspects of its test.

## Topics

### Instance Methods

- [provideScope(for:testCase:performing:)](testscoping/providescope%28for_testcase_performing_%29.md): Provide custom execution scope for a function call which is related to the specified test or test case.

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [IssueHandlingTrait](issuehandlingtrait.md)
- [ParallelizationTrait](parallelizationtrait.md)

## See Also

### Creating custom traits

- [Trait](trait.md): A protocol describing traits that can be added to a test function or to a test suite.
- [TestTrait](testtrait.md): A protocol describing a trait that you can add to a test function.
- [SuiteTrait](suitetrait.md): A protocol describing a trait that you can add to a test suite.
