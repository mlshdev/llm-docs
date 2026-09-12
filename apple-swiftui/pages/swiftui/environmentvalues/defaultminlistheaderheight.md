> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/environmentvalues/defaultminlistheaderheight](https://developer.apple.com/documentation/swiftui/environmentvalues/defaultminlistheaderheight)

# defaultMinListHeaderHeight

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The default minimum height of a header in a list.

## Declaration

```swift
var defaultMinListHeaderHeight: CGFloat? { get set }
```

<a id="discussion"></a>

## Discussion

When this value is `nil`, the system chooses the appropriate height. The default is `nil`.

## See Also

### Configuring a list’s layout

- [listRowInsets(\_:)](../view/listrowinsets%28__%29.md): Applies an inset to the rows in a list.
- [listRowInsets(\_:\_:)](../view/listrowinsets%28____%29.md): Sets the insets of rows in a list on the specified edges.
- [defaultMinListRowHeight](defaultminlistrowheight.md): The default minimum height of rows in a list.
- [listRowSpacing(\_:)](../view/listrowspacing%28__%29.md): Sets the vertical spacing between two adjacent rows in a List.
- [listSectionSpacing(\_:)](../view/listsectionspacing%28__%29.md): Sets the spacing between adjacent sections in a [List](../list.md) to a custom value.
- [ListSectionSpacing](../listsectionspacing.md): The spacing options between two adjacent sections in a list.
- [listSectionMargins(\_:\_:)](../view/listsectionmargins%28____%29.md): Set the section margins for the specific edges.
