> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/trait/timelimit(_:)](https://developer.apple.com/documentation/testing/trait/timelimit(_:))

# timeLimit(\_:)

**Framework:** Swift Testing  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+ · Swift 6.0+ · Xcode 16.0+

Construct a time limit trait that causes a test to time out if it runs for too long.

## Declaration

```swift
static func timeLimit(_ timeLimit: TimeLimitTrait.Duration) -> Self
```

## Parameters

- `timeLimit`: The maximum amount of time the test may run for.

<a id="return-value"></a>

## Return Value

An instance of [TimeLimitTrait](../timelimittrait.md).

## Mentioned In

- [Limiting the running time of tests](../limitingexecutiontime.md)

<a id="discussion"></a>

## Discussion

Test timeouts do not support high-precision, arbitrarily short durations due to variability in testing environments. You express the duration in minutes, with a minimum duration of one minute.

When you associate this trait with a test, that test must complete within a time limit of, at most, `timeLimit`. If the test runs longer, the testing library records a [Issue.Kind.timeLimitExceeded(timeLimitComponents:)](../issue/kind-swift.enum/timelimitexceeded%28timelimitcomponents_%29.md) issue, which it treats as a test failure.

The testing library can use a shorter time limit than that specified by `timeLimit` if you configure it to enforce a maximum per-test limit. When you configure a maximum per-test limit, the time limit of the test this trait is applied to is the shorter of `timeLimit` and the maximum per-test limit. For information on configuring maximum per-test limits, consult the documentation for the tool you use to run your tests.

If a test is parameterized, this time limit is applied to each of its test cases individually. If a test has more than one time limit associated with it, the testing library uses the shortest time limit.

If you apply this trait to a test suite, then it sets the time limit for each test in the suite, or each test case in parameterized tests in the suite. For example, if a suite contains five tests and you apply a time limit trait with a duration of one minute, then each test in the suite may run for up to one minute.

## See Also

### Customizing runtime behaviors

- [Enabling and disabling tests](../enablinganddisabling.md): Conditionally enable or disable individual tests before they run.
- [Limiting the running time of tests](../limitingexecutiontime.md): Set limits on how long a test can run for until it fails.
- [enabled(if:\_:sourceLocation:)](enabled%28if___sourcelocation_%29.md): Conforms when `Self` is `ConditionTrait`. Constructs a condition trait that disables a test if it returns `false`.
- [enabled(\_:sourceLocation:\_:)](enabled%28__sourcelocation___%29.md): Conforms when `Self` is `ConditionTrait`. Constructs a condition trait that disables a test if it returns `false`.
- [disabled(\_:sourceLocation:)](disabled%28__sourcelocation_%29.md): Conforms when `Self` is `ConditionTrait`. Constructs a condition trait that disables a test unconditionally.
- [disabled(if:\_:sourceLocation:)](disabled%28if___sourcelocation_%29.md): Conforms when `Self` is `ConditionTrait`. Constructs a condition trait that disables a test if its value is true.
- [disabled(\_:sourceLocation:\_:)](disabled%28__sourcelocation___%29.md): Conforms when `Self` is `ConditionTrait`. Constructs a condition trait that disables a test if its value is true.
