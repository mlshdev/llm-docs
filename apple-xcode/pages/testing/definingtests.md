> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/definingtests](https://developer.apple.com/documentation/testing/definingtests)

# Defining test functions

**Framework:** Swift Testing  
**Kind:** Article

Define a test function to validate that code is working correctly.

<a id="Overview"></a>

## Overview

Defining a test function for a Swift package or project is straightforward.

<a id="Import-the-testing-library"></a>

### Import the testing library

To import the testing library, add the following to the Swift source file that contains the test:

```swift
import Testing
```

> **Note**

> Only import the testing library into a test target or library meant for test targets. Importing the testing library into a target intended for distribution such as an application, app library, or executable target isn’t supported or recommended. Test functions aren’t stripped from binaries when building for release, so logic and fixtures of a test may be visible to anyone who inspects a build product that contains a test function.

<a id="Declare-a-test-function"></a>

### Declare a test function

To declare a test function, write a Swift function declaration that doesn’t take any arguments, then prefix its name with the `@Test` attribute:

```swift
@Test func foodTruckExists() {
  // Test logic goes here.
}
```

This test function can be present at file scope or within a type. A type containing test functions is automatically a *test suite* and can be optionally annotated with the `@Suite` attribute. For more information about suites, see [Organizing test functions with suite types](organizingtests.md).

Note that, while this function is a valid test function, it doesn’t actually perform any action or test any code. To check for expected values and outcomes in test functions, add [expectations](expectations.md) to the test function.

<a id="Customize-a-tests-name"></a>

### Customize a test’s name

To customize a test function’s name as presented in an IDE or at the command line, supply a string literal as an argument to the `@Test` attribute:

```swift
@Test("Food truck exists") func foodTruckExists() { ... }
```

To further customize the appearance and behavior of a test function, use [traits](traits.md) such as [tags(\_:)](trait/tags%28__%29.md).

<a id="Write-concurrent-or-throwing-tests"></a>

### Write concurrent or throwing tests

As with other Swift functions, test functions can be marked `async` and `throws` to annotate them as concurrent or throwing, respectively. If a test is only safe to run in the main actor’s execution context (that is, from the main thread of the process), it can be annotated `@MainActor`:

```swift
@Test @MainActor func foodTruckExists() async throws { ... }
```

<a id="Limit-the-availability-of-a-test"></a>

### Limit the availability of a test

If a test function can only run on newer versions of an operating system or of the Swift language, use the `@available` attribute when declaring it. When a test can’t run due to limited availability, the testing library reports it as skipped. Use the `message` argument of the `@available` attribute to include a message explaining why the test is unable to run:

```swift
@available(macOS 11.0, *)
@available(swift, introduced: 8.0, message: "Requires Swift 8.0 features to run")
@Test func foodTruckExists() { ... }
```

## See Also

### Essentials

- [Organizing test functions with suite types](organizingtests.md): Organize tests into test suites.
- [Migrating a test from XCTest](migratingfromxctest.md): Migrate an existing test method or test class written using XCTest.
- [Test(\_:\_:)](test%28____%29.md): Declare a test.
- [Test](test.md): A type representing a test or suite.
- [Suite(\_:\_:)](suite%28____%29.md): Declare a test suite.
