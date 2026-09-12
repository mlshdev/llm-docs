> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/text/linestyle/init(nsunderlinestyle:)](https://developer.apple.com/documentation/swiftui/text/linestyle/init(nsunderlinestyle:))

# init(nsUnderlineStyle:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a `Text.LineStyle` from `NSUnderlineStyle`.

## Declaration

```swift
init?(nsUnderlineStyle: NSUnderlineStyle)
```

## Parameters

- `nsUnderlineStyle`: A value of `NSUnderlineStyle` to wrap with `Text.LineStyle`.

<a id="return-value"></a>

## Return Value

A new `Text.LineStyle` or `nil` when `nsUnderlineStyle` contains styles not supported by `Text.LineStyle`.

<a id="discussion"></a>

## Discussion

> **Note**

> Use this initializer only if you need to convert an existing `NSUnderlineStyle` to a SwiftUI `Text.LineStyle`. Otherwise, create a `Text.LineStyle` using an initializer like [init(pattern:color:)](init%28pattern_color_%29.md).

## See Also

### Creating a text line style

- [init(pattern:color:)](init%28pattern_color_%29.md): Creates a line style.
- [Text.LineStyle.Pattern](pattern.md): The pattern, that the line has.
