> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/environmentvalues/menuindicatorvisibility](https://developer.apple.com/documentation/swiftui/environmentvalues/menuindicatorvisibility)

# menuIndicatorVisibility

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

The menu indicator visibility to apply to controls within a view.

## Declaration

```swift
var menuIndicatorVisibility: Visibility { get set }
```

<a id="discussion"></a>

## Discussion

> **Note**

> On tvOS, the standard button styles do not include a menu indicator, so this modifier will have no effect when using a built-in button style. You can implement an indicator in your own [ButtonStyle](../buttonstyle.md) implementation by checking the value of this environment value.

## See Also

### Showing a menu indicator

- [menuIndicator(\_:)](../view/menuindicator%28__%29.md): Sets the menu indicator visibility for controls within this view.
