> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/trait/disabled(_:sourcelocation:_:)](https://developer.apple.com/documentation/testing/trait/disabled(_:sourcelocation:_:))

# disabled(\_:sourceLocation:\_:)

**Framework:** Swift Testing  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Swift 6.0+ · Xcode 16.0+

Constructs a condition trait that disables a test if its value is true.

## Declaration

```swift
static func disabled(_ comment: Comment? = nil, sourceLocation: SourceLocation = #_sourceLocation, _ condition: @escaping @Sendable () async throws -> Bool) -> Self
```

## Parameters

- `comment`: An optional comment that describes this trait.
- `sourceLocation`: The source location of the trait.
- `condition`: A closure that contains the trait’s custom condition logic. If this closure returns `false`, the trait allows the test to run. Otherwise, the testing library skips the test.

<a id="return-value"></a>

## Return Value

An instance of [ConditionTrait](../conditiontrait.md) that evaluates the specified closure.

## See Also

### Customizing runtime behaviors

- [Enabling and disabling tests](../enablinganddisabling.md): Conditionally enable or disable individual tests before they run.
- [Limiting the running time of tests](../limitingexecutiontime.md): Set limits on how long a test can run for until it fails.
- [enabled(if:\_:sourceLocation:)](enabled%28if___sourcelocation_%29.md): Conforms when `Self` is `ConditionTrait`. Constructs a condition trait that disables a test if it returns `false`.
- [enabled(\_:sourceLocation:\_:)](enabled%28__sourcelocation___%29.md): Conforms when `Self` is `ConditionTrait`. Constructs a condition trait that disables a test if it returns `false`.
- [disabled(\_:sourceLocation:)](disabled%28__sourcelocation_%29.md): Conforms when `Self` is `ConditionTrait`. Constructs a condition trait that disables a test unconditionally.
- [disabled(if:\_:sourceLocation:)](disabled%28if___sourcelocation_%29.md): Conforms when `Self` is `ConditionTrait`. Constructs a condition trait that disables a test if its value is true.
- [timeLimit(\_:)](timelimit%28__%29.md): Conforms when `Self` is `TimeLimitTrait`. Construct a time limit trait that causes a test to time out if it runs for too long.
