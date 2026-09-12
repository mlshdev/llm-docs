> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/enablinganddisabling](https://developer.apple.com/documentation/testing/enablinganddisabling)

# Enabling and disabling tests

**Framework:** Swift Testing  
**Kind:** Article

Conditionally enable or disable individual tests before they run.

<a id="Overview"></a>

## Overview

Often, a test is only applicable in specific circumstances. For instance, you might want to write a test that only runs on devices with particular hardware capabilities, or performs locale-dependent operations. The testing library allows you to add traits to your tests that cause runners to automatically skip them if conditions like these are not met.

> **Note**

> A condition may be evaluated multiple times during testing.

<a id="Disable-a-test"></a>

### Disable a test

If you need to disable a test unconditionally, use the [disabled(\_:sourceLocation:)](trait/disabled%28__sourcelocation_%29.md) function. Given the following test function:

```swift
@Test("Food truck sells burritos")
func sellsBurritos() async throws { ... }
```

Add the trait *after* the test’s display name:

```swift
@Test("Food truck sells burritos", .disabled())
func sellsBurritos() async throws { ... }
```

The test will now always be skipped.

It’s also possible to add a comment to the trait to present in the output from the runner when it skips the test:

```swift
@Test("Food truck sells burritos", .disabled("We only sell Thai cuisine"))
func sellsBurritos() async throws { ... }
```

<a id="Enable-or-disable-a-test-conditionally"></a>

### Enable or disable a test conditionally

Sometimes, it makes sense to enable a test only when a certain condition is met. Consider the following test function:

```swift
@Test("Ice cream is cold")
func isCold() async throws { ... }
```

If it’s currently winter, then presumably ice cream won’t be available for sale and this test will fail. It therefore makes sense to only enable it if it’s currently summer. You can conditionally enable a test with [enabled(if:\_:sourceLocation:)](trait/enabled%28if___sourcelocation_%29.md):

```swift
@Test("Ice cream is cold", .enabled(if: Season.current == .summer))
func isCold() async throws { ... }
```

It’s also possible to conditionally *disable* a test and to combine multiple conditions:

```swift
@Test(
  "Ice cream is cold",
  .enabled(if: Season.current == .summer),
  .disabled("We ran out of sprinkles")
)
func isCold() async throws { ... }
```

If a test is disabled because of a problem for which there is a corresponding bug report, you can use one of these functions to show the relationship between the test and the bug report:

- [bug(\_:\_:)](trait/bug%28____%29.md)
- [bug(\_:id:\_:)](trait/bug%28__id___%29-10yf5.md)
- [bug(\_:id:\_:)](trait/bug%28__id___%29-3vtpl.md)

For example, the following test cannot run due to bug number `"12345"`:

```swift
@Test(
  "Ice cream is cold",
  .enabled(if: Season.current == .summer),
  .disabled("We ran out of sprinkles"),
  .bug(id: "12345")
)
func isCold() async throws { ... }
```

If a test has multiple conditions applied to it, they must *all* pass for it to run. Otherwise, the test notes the first condition to fail as the reason the test is skipped.

<a id="Handle-complex-conditions"></a>

### Handle complex conditions

If a condition is complex, consider factoring it out into a helper function to improve readability:

```swift
func allIngredientsAvailable(for food: Food) -> Bool { ... }

@Test(
  "Can make sundaes",
  .enabled(if: Season.current == .summer),
  .enabled(if: allIngredientsAvailable(for: .sundae))
)
func makeSundae() async throws { ... }
```

<a id="End-a-test-after-it-has-already-started"></a>

### End a test after it has already started

If a test is running and you determine it cannot complete and should end early without failing, use [cancel(\_:sourceLocation:)](test/cancel%28__sourcelocation_%29.md) to cancel the test:

```swift
@Test("Can make sundaes")
func makeSundae() throws {
  guard let iceCreamMaker = IceCreamMaker() else {
    try Test.cancel("The ice cream maker isn't working right now")
  }
  ...
}
```

## See Also

### Customizing runtime behaviors

- [Limiting the running time of tests](limitingexecutiontime.md): Set limits on how long a test can run for until it fails.
- [enabled(if:\_:sourceLocation:)](trait/enabled%28if___sourcelocation_%29.md): Conforms when `Self` is `ConditionTrait`. Constructs a condition trait that disables a test if it returns `false`.
- [enabled(\_:sourceLocation:\_:)](trait/enabled%28__sourcelocation___%29.md): Conforms when `Self` is `ConditionTrait`. Constructs a condition trait that disables a test if it returns `false`.
- [disabled(\_:sourceLocation:)](trait/disabled%28__sourcelocation_%29.md): Conforms when `Self` is `ConditionTrait`. Constructs a condition trait that disables a test unconditionally.
- [disabled(if:\_:sourceLocation:)](trait/disabled%28if___sourcelocation_%29.md): Conforms when `Self` is `ConditionTrait`. Constructs a condition trait that disables a test if its value is true.
- [disabled(\_:sourceLocation:\_:)](trait/disabled%28__sourcelocation___%29.md): Conforms when `Self` is `ConditionTrait`. Constructs a condition trait that disables a test if its value is true.
- [timeLimit(\_:)](trait/timelimit%28__%29.md): Conforms when `Self` is `TimeLimitTrait`. Construct a time limit trait that causes a test to time out if it runs for too long.
