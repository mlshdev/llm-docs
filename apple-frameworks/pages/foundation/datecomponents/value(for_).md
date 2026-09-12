> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/datecomponents/value(for:)](https://developer.apple.com/documentation/foundation/datecomponents/value(for:))

# value(for:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the value of one of the properties, using an enumeration value instead of a property name.

## Declaration

```swift
func value(for component: Calendar.Component) -> Int?
```

<a id="Discussion"></a>

## Discussion

The calendar and timeZone and isLeapMonth property values cannot be retrieved by this method.

## See Also

### Accessing Calendar Components

- [setValue(\_:for:)](setvalue%28__for_%29.md): Set the value of one of the properties, using an enumeration value instead of a property name.
- [Calendar.Component](../calendar/component.md): An enumeration for the various components of a calendar date.
