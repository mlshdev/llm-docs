> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/trait/testscopeprovider](https://developer.apple.com/documentation/testing/trait/testscopeprovider)

# TestScopeProvider

**Framework:** Swift Testing  
**Kind:** Associated Type  
**Availability:** Swift 6.1+ · Xcode 16.3+

The type of the test scope provider for this trait.

## Declaration

```swift
associatedtype TestScopeProvider : TestScoping = Never
```

<a id="discussion"></a>

## Discussion

The default type is `Never`, which can’t be instantiated. The [scopeProvider(for:testCase:)](scopeprovider%28for_testcase_%29.md) method for any trait with `Never` as its test scope provider type must return `nil`, meaning that the trait doesn’t provide a custom scope for tests it’s applied to.

## See Also

### Running code before and after a test or suite

- [TestScoping](../testscoping.md): A protocol that tells the test runner to run custom code before or after it runs a test suite or test function.
- [scopeProvider(for:testCase:)](scopeprovider%28for_testcase_%29.md): Get this trait’s scope provider for the specified test and optional test case.
- [prepare(for:)](prepare%28for_%29.md): Prepare to run the test that has this trait.
