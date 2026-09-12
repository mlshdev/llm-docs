> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/trait/scopeprovider(for:testcase:)-inmj](https://developer.apple.com/documentation/testing/trait/scopeprovider(for:testcase:)-inmj)

# scopeProvider(for:testCase:)

**Framework:** Swift Testing  
**Kind:** Instance Method  
**Availability:** Swift 6.1+ · Xcode 16.3+

Get this trait’s scope provider for the specified test and optional test case.

## Declaration

```swift
func scopeProvider(for test: Test, testCase: Test.Case?) -> Self?
```

## Parameters

- `test`: The test for which the testing library requests a scope provider.
- `testCase`: The test case for which the testing library requests a scope provider, if any. When `test` represents a suite, the value of this argument is `nil`.

<a id="discussion"></a>

## Discussion

The testing library uses this implementation of [scopeProvider(for:testCase:)](scopeprovider%28for_testcase_%29.md) when the trait type conforms to both [SuiteTrait](../suitetrait.md) and [TestScoping](../testscoping.md).
