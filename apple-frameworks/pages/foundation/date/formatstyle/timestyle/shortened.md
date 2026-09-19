> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/date/formatstyle/timestyle/shortened

# shortened

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A shortened time style with only the hour, minute, and day period components represented.

## Declaration

```swift
static let shortened: Date.FormatStyle.TimeStyle
```

<a id="Discussion"></a>

## Discussion

A `shortened` time style represents the hour, minute, and day period components in the format. For example, `9:54 PM.`

## See Also

### Modifying a Time Style

- [complete](complete.md): A time style with all components represented.
- [omitted](omitted.md): A time style with no time-related components represented.
- [standard](standard.md): A time style with all components except the time zone represented.
