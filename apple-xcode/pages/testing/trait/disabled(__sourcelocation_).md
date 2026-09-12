> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/trait/disabled(_:sourcelocation:)](https://developer.apple.com/documentation/testing/trait/disabled(_:sourcelocation:))

# disabled(\_:sourceLocation:)

**Framework:** Swift Testing  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Swift 6.0+ · Xcode 16.0+

Constructs a condition trait that disables a test unconditionally.

## Declaration

```swift
static func disabled(_ comment: Comment? = nil, sourceLocation: SourceLocation = #_sourceLocation) -> Self
```

## Parameters

- `comment`: An optional comment that describes this trait.
- `sourceLocation`: The source location of the trait.

<a id="return-value"></a>

## Return Value

An instance of [ConditionTrait](../conditiontrait.md) that always disables the test to which it is added.

## Mentioned In

- [Enabling and disabling tests](../enablinganddisabling.md)
- [Organizing test functions with suite types](../organizingtests.md)

## See Also

### Customizing runtime behaviors

- [Enabling and disabling tests](../enablinganddisabling.md): Conditionally enable or disable individual tests before they run.
- [Limiting the running time of tests](../limitingexecutiontime.md): Set limits on how long a test can run for until it fails.
- [enabled(if:\_:sourceLocation:)](enabled%28if___sourcelocation_%29.md): Conforms when `Self` is `ConditionTrait`. Constructs a condition trait that disables a test if it returns `false`.
- [enabled(\_:sourceLocation:\_:)](enabled%28__sourcelocation___%29.md): Conforms when `Self` is `ConditionTrait`. Constructs a condition trait that disables a test if it returns `false`.
- [disabled(if:\_:sourceLocation:)](disabled%28if___sourcelocation_%29.md): Conforms when `Self` is `ConditionTrait`. Constructs a condition trait that disables a test if its value is true.
- [disabled(\_:sourceLocation:\_:)](disabled%28__sourcelocation___%29.md): Conforms when `Self` is `ConditionTrait`. Constructs a condition trait that disables a test if its value is true.
- [timeLimit(\_:)](timelimit%28__%29.md): Conforms when `Self` is `TimeLimitTrait`. Construct a time limit trait that causes a test to time out if it runs for too long.
