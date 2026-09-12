> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/suite(_:_:)](https://developer.apple.com/documentation/testing/suite(_:_:))

# Suite(\_:\_:)

**Framework:** Swift Testing  
**Kind:** Macro  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Swift 6.0+ · Xcode 16.0+

Declare a test suite.

## Declaration

```swift
@attached(peer) macro Suite(_ displayName: String? = nil, _ traits: any SuiteTrait...)
```

## Parameters

- `displayName`: The customized display name of this test suite. If the value of this argument is `nil`, the display name of the test is derived from the associated type’s name.
- `traits`: Zero or more traits to apply to this test suite.

<a id="overview"></a>

## Overview

A test suite is a type that contains one or more test functions. Any type may be a test suite.

The use of the `@Suite` attribute is optional; types are recognized as test suites even if they do not have the `@Suite` attribute applied to them.

When adding test functions to a type extension, do not use the `@Suite` attribute. Only a type’s primary declaration may have the `@Suite` attribute applied to it.

## See Also

### Related Documentation

- [Organizing test functions with suite types](organizingtests.md): Organize tests into test suites.

### Essentials

- [Defining test functions](definingtests.md): Define a test function to validate that code is working correctly.
- [Organizing test functions with suite types](organizingtests.md): Organize tests into test suites.
- [Migrating a test from XCTest](migratingfromxctest.md): Migrate an existing test method or test class written using XCTest.
- [Test(\_:\_:)](test%28____%29.md): Declare a test.
- [Test](test.md): A type representing a test or suite.
