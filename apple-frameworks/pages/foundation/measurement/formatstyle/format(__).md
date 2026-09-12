> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/measurement/formatstyle/format(_:)](https://developer.apple.com/documentation/foundation/measurement/formatstyle/format(_:))

# format(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a string representation of a measurement.

## Declaration

```swift
func format(_ measurement: Measurement<UnitType>) -> String
```

## Parameters

- `measurement`: The measurement value to format.

<a id="return-value"></a>

## Return Value

A formatted representation of `measurement`, using the properties of this style.
