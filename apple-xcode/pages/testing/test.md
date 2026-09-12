> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/test](https://developer.apple.com/documentation/testing/test)

# Test

**Framework:** Swift Testing  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Swift 6.0+ · Xcode 16.0+

A type representing a test or suite.

## Declaration

```swift
struct Test
```

<a id="overview"></a>

## Overview

An instance of this type may represent:

- A type containing zero or more tests (i.e. a *test suite*);
- An individual test function (possibly contained within a type); or
- A test function parameterized over one or more sequences of inputs.

Two instances of this type are considered to be equal if the values of their `Test/id-swift.property` properties are equal.

## Topics

### Structures

- [Test.Case](test/case.md): A single test case from a parameterized [Test](test.md).

### Instance Properties

- [associatedBugs](test/associatedbugs.md): The set of bugs associated with this test.
- [comments](test/comments.md): The complete set of comments about this test from all of its traits.
- [displayName](test/displayname.md): The customized display name of this instance, if specified.
- [isParameterized](test/isparameterized.md): Whether or not this test is parameterized.
- [isSuite](test/issuite.md): Whether or not this instance is a test suite containing other tests.
- [name](test/name.md): The name of this instance.
- [sourceLocation](test/sourcelocation.md): The source location of this test.
- [tags](test/tags.md): The complete, unique set of tags associated with this test.
- [timeLimit](test/timelimit.md): The maximum amount of time this test’s cases may run for.
- [traits](test/traits.md): The set of traits added to this instance when it was initialized.

### Type Properties

- [current](test/current.md): The test that is running on the current task, if any.

### Type Methods

- [cancel(\_:sourceLocation:)](test/cancel%28__sourcelocation_%29.md): Cancel the current test or test case.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Essentials

- [Defining test functions](definingtests.md): Define a test function to validate that code is working correctly.
- [Organizing test functions with suite types](organizingtests.md): Organize tests into test suites.
- [Migrating a test from XCTest](migratingfromxctest.md): Migrate an existing test method or test class written using XCTest.
- [Test(\_:\_:)](test%28____%29.md): Declare a test.
- [Suite(\_:\_:)](suite%28____%29.md): Declare a test suite.
