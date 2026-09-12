> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/datecomponents/isvaliddate(in:)](https://developer.apple.com/documentation/foundation/datecomponents/isvaliddate(in:))

# isValidDate(in:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Indicates whether the current combination of properties represents a date which exists in the specified calendar.

## Declaration

```swift
func isValidDate(in calendar: Calendar) -> Bool
```

<a id="Discussion"></a>

## Discussion

This method is not appropriate for use on `DateComponents` values which are specifying relative quantities of calendar components.

Except for some trivial cases (e.g., ‘seconds’ should be 0 - 59 in any calendar), this method is not necessarily cheap.

If the time zone property is set in the `DateComponents`, it is used.

## See Also

### Validating a Date

- [isValidDate](isvaliddate.md): Indicates whether the current combination of properties represents a date which exists in the current calendar.
- [date](date.md): The date calculated from the current components using the stored calendar.
