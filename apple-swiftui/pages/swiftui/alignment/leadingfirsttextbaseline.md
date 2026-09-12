> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/alignment/leadingfirsttextbaseline](https://developer.apple.com/documentation/swiftui/alignment/leadingfirsttextbaseline)

# leadingFirstTextBaseline

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A guide that marks the leading edge and top-most text baseline in a view.

## Declaration

```swift
@export(implementation) static var leadingFirstTextBaseline: Alignment { get }
```

<a id="discussion"></a>

## Discussion

This alignment combines the [leading](../horizontalalignment/leading.md) horizontal guide and the [firstTextBaseline](../verticalalignment/firsttextbaseline.md) vertical guide:

![A square that’s divided into four equal quadrants. The upper-](https://developer.apple.com/images/com.apple.SwiftUI/Alignment-leadingFirstTextBaseline-1-iOS@2x.png)

## See Also

### Getting text baseline guides

- [centerFirstTextBaseline](centerfirsttextbaseline.md): A guide that marks the top-most text baseline in a view.
- [trailingFirstTextBaseline](trailingfirsttextbaseline.md): A guide that marks the trailing edge and top-most text baseline in a view.
- [leadingLastTextBaseline](leadinglasttextbaseline.md): A guide that marks the leading edge and bottom-most text baseline in a view.
- [centerLastTextBaseline](centerlasttextbaseline.md): A guide that marks the bottom-most text baseline in a view.
- [trailingLastTextBaseline](trailinglasttextbaseline.md): A guide that marks the trailing edge and bottom-most text baseline in a view.
