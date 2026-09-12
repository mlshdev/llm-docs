> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/measurement/attributedstyle/bytecount/format(_:)](https://developer.apple.com/documentation/foundation/measurement/attributedstyle/bytecount/format(_:))

# format(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Formats a byte count measurment, using this style.

## Declaration

```swift
func format(_ value: Measurement<UnitInformationStorage>) -> AttributedString
```

## Parameters

- `value`: The byte count measurement to format.

<a id="return-value"></a>

## Return Value

A formatted representation of `value`, formatted according to the style’s configuration.

<a id="Discussion"></a>

## Discussion

Use this method when you want to create a single style instance, and then use it to format multiple values.
