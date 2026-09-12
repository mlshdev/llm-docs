> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/environmentvalues/isluminancereduced](https://developer.apple.com/documentation/swiftui/environmentvalues/isluminancereduced)

# isLuminanceReduced

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 8.0+

A Boolean value that indicates whether the display or environment currently requires reduced luminance.

## Declaration

```swift
var isLuminanceReduced: Bool { get set }
```

<a id="discussion"></a>

## Discussion

When you detect this condition, lower the overall brightness of your view. For example, you can change large, filled shapes to be stroked, and choose less bright colors:

```swift
@Environment(\.isLuminanceReduced) var isLuminanceReduced

var body: some View {
    if isLuminanceReduced {
        Circle()
            .stroke(Color.gray, lineWidth: 10)
    } else {
        Circle()
            .fill(Color.white)
    }
}
```

In addition to the changes that you make, the system could also dim the display to achieve a suitable brightness. By reacting to `isLuminanceReduced`, you can preserve contrast and readability while helping to satisfy the reduced brightness requirement.

> **Note**

> On watchOS, the system typically sets this value to `true` when the user lowers their wrist, but the display remains on. Starting in watchOS 8, the system keeps your view visible on wrist down by default. If you want the system to blur the screen instead, as it did in earlier versions of watchOS, set the value for the [WKSupportsAlwaysOnDisplay](https://developer.apple.com/documentation/bundleresources/information-property-list/wksupportsalwaysondisplay) key in your app’s [Information Property List](https://developer.apple.com/documentation/bundleresources/information-property-list) file to `false`.

## See Also

### Reacting to interface characteristics

- [displayScale](displayscale.md): The display scale of this environment.
- [pixelLength](pixellength.md): The size of a pixel on the screen.
- [horizontalSizeClass](horizontalsizeclass.md): The horizontal size class of this environment.
- [verticalSizeClass](verticalsizeclass.md): The vertical size class of this environment.
- [UserInterfaceSizeClass](../userinterfacesizeclass.md): A set of values that indicate the visual size available to the view.
