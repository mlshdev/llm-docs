> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/limitingexecutiontime](https://developer.apple.com/documentation/testing/limitingexecutiontime)

# Limiting the running time of tests

**Framework:** Swift Testing  
**Kind:** Article

Set limits on how long a test can run for until it fails.

<a id="Overview"></a>

## Overview

Some tests may naturally run slowly: they may require significant system resources to complete, may rely on downloaded data from a server, or may otherwise be dependent on external factors.

If a test might stall indefinitely or might consume too many system resources to complete effectively, consider setting a time limit for it so that it’s marked as failing if it runs for an excessive amount of time. Use the [timeLimit(\_:)](trait/timelimit%28__%29.md) trait as an upper bound:

```swift
@Test(.timeLimit(.minutes(60))
func serve100CustomersInOneHour() async {
  for _ in 0 ..< 100 {
    let customer = await Customer.next()
    await customer.order()
    ...
  }
}
```

If the above test function takes longer than an hour (60 x 60 seconds) to execute, the task in which it’s running is [cancelled](https://developer.apple.com/documentation/swift/task/cancel%28%29) and the test fails with an issue of kind [Issue.Kind.timeLimitExceeded(timeLimitComponents:)](issue/kind-swift.enum/timelimitexceeded%28timelimitcomponents_%29.md).

> **Note**

> If multiple time limit traits apply to a test, the testing library uses the shortest time limit.

The testing library may adjust the specified time limit for performance reasons or to ensure tests have enough time to run. In particular, a granularity of (by default) one minute is applied to tests. The testing library can also be configured with a maximum time limit per test that overrides any applied time limit traits.

<a id="Apply-time-limits-to-test-suites"></a>

### Apply time limits to test suites

When you apply a time limit to a test suite, the testing library recursively applies it to all test functions and child test suites within that suite. The time limit applies to each test in the test suite and any child test suites, or each test case for parameterized tests.

For example, if a suite contains five tests and you apply a time limit trait with a duration of one minute, then each test in the suite may run for up to one minute.

<a id="Apply-time-limits-to-parameterized-tests"></a>

### Apply time limits to parameterized tests

When you apply a time limit to a parameterized test function, the testing library applies it to each invocation *separately* so that if only some cases cause failures due to timeouts, then the testing library doesn’t incorrectly mark successful cases as failing.

## See Also

### Customizing runtime behaviors

- [Enabling and disabling tests](enablinganddisabling.md): Conditionally enable or disable individual tests before they run.
- [enabled(if:\_:sourceLocation:)](trait/enabled%28if___sourcelocation_%29.md): Conforms when `Self` is `ConditionTrait`. Constructs a condition trait that disables a test if it returns `false`.
- [enabled(\_:sourceLocation:\_:)](trait/enabled%28__sourcelocation___%29.md): Conforms when `Self` is `ConditionTrait`. Constructs a condition trait that disables a test if it returns `false`.
- [disabled(\_:sourceLocation:)](trait/disabled%28__sourcelocation_%29.md): Conforms when `Self` is `ConditionTrait`. Constructs a condition trait that disables a test unconditionally.
- [disabled(if:\_:sourceLocation:)](trait/disabled%28if___sourcelocation_%29.md): Conforms when `Self` is `ConditionTrait`. Constructs a condition trait that disables a test if its value is true.
- [disabled(\_:sourceLocation:\_:)](trait/disabled%28__sourcelocation___%29.md): Conforms when `Self` is `ConditionTrait`. Constructs a condition trait that disables a test if its value is true.
- [timeLimit(\_:)](trait/timelimit%28__%29.md): Conforms when `Self` is `TimeLimitTrait`. Construct a time limit trait that causes a test to time out if it runs for too long.
