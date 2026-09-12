> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/relativeformatstyle/presentation-swift.struct/named](https://developer.apple.com/documentation/foundation/date/relativeformatstyle/presentation-swift.struct/named)

# named

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A style that uses named styles to describe relative dates, such as “yesterday”, “last week”, or “next week”.

## Declaration

```swift
static var named: Date.RelativeFormatStyle.Presentation { get }
```

<a id="Discussion"></a>

## Discussion

The format uses the [numeric](numeric.md) style if a name isn’t available.

## See Also

### Modifying Relative Date Style Presentations

- [numeric](numeric.md): A style that uses a numeric style to describe relative dates, such as “1 day ago” or “in 3 weeks”.
