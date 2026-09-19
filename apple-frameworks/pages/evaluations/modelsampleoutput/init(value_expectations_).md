> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/evaluations/modelsampleoutput/init(value:expectations:)

# init(value:expectations:)

**Framework:** Evaluations  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

Creates a model sample output with an optional expected value and expectations.

## Declaration

```swift
init(value: Value? = nil, expectations: Expectation? = nil)
```

## Parameters

- `value`: The expected output value for comparison.
- `expectations`: The expected behavior, such as a tool-call trajectory.

<a id="discussion"></a>

## Discussion

```swift
let output = ModelSampleOutput<String, TrajectoryExpectation>(value: "Paris", expectations: nil)
```
