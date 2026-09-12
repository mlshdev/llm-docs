> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/trait/prepare(for:)](https://developer.apple.com/documentation/testing/trait/prepare(for:))

# prepare(for:)

**Framework:** Swift Testing  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Swift 6.0+ · Xcode 16.0+

Prepare to run the test that has this trait.

## Declaration

```swift
func prepare(for test: Test) async throws
```

## Parameters

- `test`: The test that has this trait.

<a id="discussion"></a>

## Discussion

> **Throws**

> Any error that prevents the test from running. If an error is thrown from this method, the test is skipped and the error is recorded as an [Issue](../issue.md).

The testing library calls this method after it discovers all tests and their traits, and before it begins to run any tests. Use this method to prepare necessary internal state, or to determine whether the test should run.

The default implementation of this method does nothing.

## Default Implementations

### Trait Implementations

- [prepare(for:)](prepare%28for_%29-4pe01.md): Prepare to run the test that has this trait.

## See Also

### Running code before and after a test or suite

- [TestScoping](../testscoping.md): A protocol that tells the test runner to run custom code before or after it runs a test suite or test function.
- [scopeProvider(for:testCase:)](scopeprovider%28for_testcase_%29.md): Get this trait’s scope provider for the specified test and optional test case.
- [TestScopeProvider](testscopeprovider.md): The type of the test scope provider for this trait.
