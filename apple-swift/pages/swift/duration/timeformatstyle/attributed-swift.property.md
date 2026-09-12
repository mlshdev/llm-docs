> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/duration/timeformatstyle/attributed-swift.property](https://developer.apple.com/documentation/swift/duration/timeformatstyle/attributed-swift.property)

# attributed

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A property that formats the duration as an attributed string.

## Declaration

```swift
var attributed: Duration.TimeFormatStyle.Attributed { get }
```

<a id="discussion"></a>

## Discussion

Apply the `attributed` property to a configured [Duration.TimeFormatStyle](../timeformatstyle.md) to produce an [Duration.TimeFormatStyle.Attributed](attributed-swift.struct.md) style. You can then format a duration with this style to create a formatted [AttributedString](https://developer.apple.com/documentation/foundation/attributedstring). The formatted attributed string contains instances of [AttributeScopes.FoundationAttributes.DateFieldAttribute](https://developer.apple.com/documentation/foundation/attributescopes/foundationattributes/datefieldattribute) for runs with formatted durations.

The following example formats a duration as an attributed string:

```swift
let duration = Duration.seconds(70 * 60 + 32) +
    Duration.milliseconds(400)
let style = Duration.TimeFormatStyle(pattern: .hourMinuteSecond).attributed
let attributedDuration = duration.formatted(style)
```

The resulting `attributedDuration`, representing the string `1:10:32` contains the following runs:

| Run | Attributes |
| --- | --- |
| `1` | `Foundation.DurationFormatAttribute = hours` |
| `:` | None |
| `10` | `Foundation.DurationFormatAttribute = minutes` |
| `:` | None |
| `32` | `Foundation.DurationFormatAttribute = seconds` |

## See Also

### Formatting a duration as an attributed string

- [Duration.TimeFormatStyle.Attributed](attributed-swift.struct.md): A format style that formats durations as attributed strings.
