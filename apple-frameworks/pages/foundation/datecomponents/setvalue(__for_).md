> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/datecomponents/setvalue(_:for:)](https://developer.apple.com/documentation/foundation/datecomponents/setvalue(_:for:))

# setValue(\_:for:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Set the value of one of the properties, using an enumeration value instead of a property name.

## Declaration

```swift
mutating func setValue(_ value: Int?, for component: Calendar.Component)
```

<a id="Discussion"></a>

## Discussion

The calendar and timeZone and isLeapMonth properties cannot be set by this method.

## See Also

### Accessing Calendar Components

- [value(for:)](value%28for_%29.md): Returns the value of one of the properties, using an enumeration value instead of a property name.
- [Calendar.Component](../calendar/component.md): An enumeration for the various components of a calendar date.
