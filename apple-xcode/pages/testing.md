> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing](https://developer.apple.com/documentation/testing)

# Swift Testing

**Framework:** Swift Testing  
**Kind:** Framework  
**Availability:** Swift 6.0+ · Xcode 16.0+

Create and run tests for your Swift packages and Xcode projects.

<a id="Overview"></a>

## Overview

![The Swift logo on a blue gradient background that contains function, number, tag, and checkmark diamond symbols.](https://developer.apple.com/images/org.swift.testing/swift-testing-hero@2x.png)

With Swift Testing you leverage powerful and expressive capabilities of the Swift programming language to develop tests with more confidence and less code. The library integrates seamlessly with Swift Package Manager testing workflow, supports flexible test organization, customizable metadata, and scalable test execution.

- Define test functions almost anywhere with a single attribute.
- Group related tests into hierarchies using Swift’s type system.
- Integrate seamlessly with Swift concurrency.
- Parameterize test functions across wide ranges of inputs.
- Enable tests dynamically depending on runtime conditions.
- Parallelize tests in-process.
- Categorize tests using tags.
- Associate bugs directly with the tests that verify their fixes or reproduce their problems.

<a id="Related-videos"></a>

#### Related videos

- [Meet Swift Testing](https://developer.apple.com/videos/play/wwdc2024/10179)
- [Go further with Swift Testing](https://developer.apple.com/videos/play/wwdc2024/10195)

## Topics

### Essentials

- [Defining test functions](testing/definingtests.md): Define a test function to validate that code is working correctly.
- [Organizing test functions with suite types](testing/organizingtests.md): Organize tests into test suites.
- [Migrating a test from XCTest](testing/migratingfromxctest.md): Migrate an existing test method or test class written using XCTest.
- [Test(\_:\_:)](testing/test%28____%29.md): Declare a test.
- [Test](testing/test.md): A type representing a test or suite.
- [Suite(\_:\_:)](testing/suite%28____%29.md): Declare a test suite.

### Test parameterization

- [Implementing parameterized tests](testing/parameterizedtesting.md): Specify different input parameters to generate multiple test cases from a test function.
- [Test(\_:\_:arguments:)](testing/test%28____arguments_%29-8kn7a.md): Declare a test parameterized over a collection of values.
- [Test(\_:\_:arguments:\_:)](testing/test%28____arguments___%29.md): Declare a test parameterized over two collections of values.
- [Test(\_:\_:arguments:)](testing/test%28____arguments_%29-3rzok.md): Declare a test parameterized over two zipped collections of values.
- [CustomTestArgumentEncodable](testing/customtestargumentencodable.md): A protocol for customizing how arguments passed to parameterized tests are encoded, which is used to match against when running specific arguments.
- [Test.Case](testing/test/case.md): A single test case from a parameterized [Test](testing/test.md).

### Behavior validation

- [Expectations and confirmations](testing/expectations.md): Check for expected values, outcomes, and asynchronous events in tests.
- [Known issues](testing/known-issues.md): Mark issues as known when running tests.

### Test customization

- [Traits](testing/traits.md): Annotate test functions and suites, and customize their behavior.

### Value description and reflection

- [Describing and reflecting values](testing/describing-values.md): Add custom descriptions and mirrors to values you use in your tests.
- [CustomTestReflectable](testing/customtestreflectable.md): A protocol describing types with a custom reflection when presented as part of a test’s output.
- [CustomTestStringConvertible](testing/customteststringconvertible.md): A protocol describing types with a custom string representation when presented as part of a test’s output.

### Data collection

- [Attachments](testing/attachments.md): Attach values to tests to help diagnose issues and gather feedback.
