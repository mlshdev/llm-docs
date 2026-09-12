> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/formatstyle/timestyle/standard](https://developer.apple.com/documentation/foundation/date/formatstyle/timestyle/standard)

# standard

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A time style with all components except the time zone represented.

## Declaration

```swift
static let standard: Date.FormatStyle.TimeStyle
```

<a id="Discussion"></a>

## Discussion

A `standard` time style represents the hour, minute, second, and day period components in the format. For example, `9:54:29 PM.`

## See Also

### Modifying a Time Style

- [complete](complete.md): A time style with all components represented.
- [omitted](omitted.md): A time style with no time-related components represented.
- [shortened](shortened.md): A shortened time style with only the hour, minute, and day period components represented.
