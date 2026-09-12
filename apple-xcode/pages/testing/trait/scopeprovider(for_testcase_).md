> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/trait/scopeprovider(for:testcase:)](https://developer.apple.com/documentation/testing/trait/scopeprovider(for:testcase:))

# scopeProvider(for:testCase:)

**Framework:** Swift Testing  
**Kind:** Instance Method  
**Availability:** Swift 6.1+ · Xcode 16.3+

Get this trait’s scope provider for the specified test and optional test case.

## Declaration

```swift
func scopeProvider(for test: Test, testCase: Test.Case?) -> Self.TestScopeProvider?
```

## Parameters

- `test`: The test for which a scope provider is being requested.
- `testCase`: The test case for which a scope provider is being requested, if any. When `test` represents a suite, the value of this argument is `nil`.

<a id="return-value"></a>

## Return Value

A value conforming to [TestScopeProvider](testscopeprovider.md) which you use to provide custom scoping for `test` or `testCase`. Returns `nil` if the trait doesn’t provide any custom scope for the test or test case.

<a id="discussion"></a>

## Discussion

If this trait’s type conforms to [TestScoping](../testscoping.md), the default value returned by this method depends on the values of`test` and `testCase`:

- If `test` represents a suite, this trait must conform to [SuiteTrait](../suitetrait.md). If the value of this suite trait’s [isRecursive](../suitetrait/isrecursive.md) property is `true`, then this method returns `nil`, and the suite trait provides its custom scope once for each test function the test suite contains. If the value of [isRecursive](../suitetrait/isrecursive.md) is `false`, this method returns `self`, and the suite trait provides its custom scope once for the entire test suite.
- If `test` represents a test function, this trait also conforms to [TestTrait](../testtrait.md). If `testCase` is `nil`, this method returns `nil`; otherwise, it returns `self`. This means that by default, a trait which is applied to or inherited by a test function provides its custom scope once for each of that function’s cases.

A trait may override this method to further customize the default behaviors above. For example, if a trait needs to provide custom test scope both once per-suite and once per-test function in that suite, it implements the method to return a non-`nil` scope provider under those conditions.

A trait may also implement this method and return `nil` if it determines that it does not need to provide a custom scope for a particular test at runtime, even if the test has the trait applied. This can improve performance and make diagnostics clearer by avoiding an unnecessary call to [provideScope(for:testCase:performing:)](../testscoping/providescope%28for_testcase_performing_%29.md).

If this trait’s type does not conform to [TestScoping](../testscoping.md) and its associated [TestScopeProvider](testscopeprovider.md) type is the default `Never`, then this method returns `nil` by default. This means that instances of this trait don’t provide a custom scope for tests to which they’re applied.

## Default Implementations

### Trait Implementations

- [scopeProvider(for:testCase:)](scopeprovider%28for_testcase_%29-1z8kh.md): Conforms when `Self` conforms to `TestScoping`. Get this trait’s scope provider for the specified test or test case.
- [scopeProvider(for:testCase:)](scopeprovider%28for_testcase_%29-9fxg4.md): Conforms when `TestScopeProvider` is `Never`. Get this trait’s scope provider for the specified test or test case.
- [scopeProvider(for:testCase:)](scopeprovider%28for_testcase_%29-inmj.md): Conforms when `Self` conforms to `TestScoping`. Get this trait’s scope provider for the specified test and optional test case.

## See Also

### Running code before and after a test or suite

- [TestScoping](../testscoping.md): A protocol that tells the test runner to run custom code before or after it runs a test suite or test function.
- [TestScopeProvider](testscopeprovider.md): The type of the test scope provider for this trait.
- [prepare(for:)](prepare%28for_%29.md): Prepare to run the test that has this trait.
