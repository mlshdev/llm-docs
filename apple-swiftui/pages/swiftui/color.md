> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/color](https://developer.apple.com/documentation/swiftui/color)

# Color

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A representation of a color that adapts to a given context.

## Declaration

```swift
@frozen struct Color
```

## Mentioned In

- [Laying out a simple view](laying-out-a-simple-view.md)

<a id="overview"></a>

## Overview

You can create a color in one of several ways:

- Load a color from an Asset Catalog:

  ```swift
  let aqua = Color("aqua") // Looks in your app's main bundle by default.
  ```
- Specify component values, like red, green, and blue; hue, saturation, and brightness; or white level:

  ```swift
  let skyBlue = Color(red: 0.4627, green: 0.8392, blue: 1.0)
  let lemonYellow = Color(hue: 0.1639, saturation: 1, brightness: 1)
  let steelGray = Color(white: 0.4745)
  ```
- Create a color instance from another color, like a [UIColor](https://developer.apple.com/documentation/uikit/uicolor) or an [NSColor](https://developer.apple.com/documentation/appkit/nscolor):

  ```swift
  #if os(iOS)
  let linkColor = Color(uiColor: .link)
  #elseif os(macOS)
  let linkColor = Color(nsColor: .linkColor)
  #endif
  ```
- Use one of a palette of predefined colors, like [black](shapestyle/black.md), [green](shapestyle/green.md), and [purple](shapestyle/purple.md).

Some view modifiers can take a color as an argument. For example, [foregroundStyle(\_:)](view/foregroundstyle%28__%29.md) uses the color you provide to set the foreground color for view elements, like text or [SF Symbols](https://developer.apple.com/design/human-interface-guidelines/sf-symbols):

```swift
Image(systemName: "leaf.fill")
    .foregroundStyle(Color.green)
```

![A screenshot of a green leaf.](https://developer.apple.com/images/com.apple.SwiftUI/Color-1@2x.png)

Because SwiftUI treats colors as [View](view.md) instances, you can also directly add them to a view hierarchy. For example, you can layer a rectangle beneath a sun image using colors defined above:

```swift
ZStack {
    skyBlue
    Image(systemName: "sun.max.fill")
        .foregroundStyle(lemonYellow)
}
.frame(width: 200, height: 100)
```

A color used as a view expands to fill all the space it’s given, as defined by the frame of the enclosing [ZStack](zstack.md) in the above example:

![A screenshot of a yellow sun on a blue background.](https://developer.apple.com/images/com.apple.SwiftUI/Color-2@2x.png)

SwiftUI only resolves a color to a concrete value just before using it in a given environment. This enables a context-dependent appearance for system defined colors, or those that you load from an Asset Catalog. For example, a color can have distinct light and dark variants that the system chooses from at render time.

## Topics

### Creating a color

- [init(\_:bundle:)](color/init%28__bundle_%29.md): Creates a color from a color set that you indicate by name.
- [init(\_:)](color/init%28__%29.md): Creates a constant color with the values specified by the resolved color.
- [resolve(in:)](color/resolve%28in_%29.md): Evaluates this color to a resolved color given the current `context`.

### Creating a color from component values

- [init(hue:saturation:brightness:opacity:)](color/init%28hue_saturation_brightness_opacity_%29.md): Creates a constant color from hue, saturation, and brightness values.
- [init(\_:white:opacity:)](color/init%28__white_opacity_%29.md): Creates a constant grayscale color.
- [init(\_:red:green:blue:opacity:)](color/init%28__red_green_blue_opacity_%29.md): Creates a constant color from red, green, and blue component values.
- [Color.RGBColorSpace](color/rgbcolorspace.md): A profile that specifies how to interpret a color value for display.

### Creating a color from another color

- [init(uiColor:)](color/init%28uicolor_%29.md): Creates a color from a UIKit color.
- [init(nsColor:)](color/init%28nscolor_%29.md): Creates a color from an AppKit color.
- [init(cgColor:)](color/init%28cgcolor_%29.md): Creates a color from a Core Graphics color.

### Getting standard colors

- [black](color/black.md): A black color suitable for use in UI elements.
- [blue](color/blue.md): A context-dependent blue color suitable for use in UI elements.
- [brown](color/brown.md): A context-dependent brown color suitable for use in UI elements.
- [clear](color/clear.md): A clear color suitable for use in UI elements.
- [cyan](color/cyan.md): A context-dependent cyan color suitable for use in UI elements.
- [gray](color/gray.md): A context-dependent gray color suitable for use in UI elements.
- [green](color/green.md): A context-dependent green color suitable for use in UI elements.
- [indigo](color/indigo.md): A context-dependent indigo color suitable for use in UI elements.
- [mint](color/mint.md): A context-dependent mint color suitable for use in UI elements.
- [orange](color/orange.md): A context-dependent orange color suitable for use in UI elements.
- [pink](color/pink.md): A context-dependent pink color suitable for use in UI elements.
- [purple](color/purple.md): A context-dependent purple color suitable for use in UI elements.
- [red](color/red.md): A context-dependent red color suitable for use in UI elements.
- [teal](color/teal.md): A context-dependent teal color suitable for use in UI elements.
- [white](color/white.md): A white color suitable for use in UI elements.
- [yellow](color/yellow.md): A context-dependent yellow color suitable for use in UI elements.

### Getting semantic colors

- [accentColor](color/accentcolor.md): A color that reflects the accent color of the system or app.
- [primary](color/primary.md): The color to use for primary content.
- [secondary](color/secondary.md): The color to use for secondary content.

### Modifying a color

- [opacity(\_:)](color/opacity%28__%29.md): Multiplies the opacity of the color by the given amount.
- [gradient](color/gradient.md): Returns the standard gradient for the color `self`.
- [mix(with:by:in:)](color/mix%28with_by_in_%29.md): Returns a version of self mixed with `rhs` by the amount specified by `fraction`.
- [exposureAdjust(\_:)](color/exposureadjust%28__%29.md): Returns a new color with an exposure adjustment applied.
- [headroom(\_:)](color/headroom%28__%29.md): Creates a new color with specified HDR content headroom.

### Working with high dynamic range (HDR) colors

- [resolveHDR(in:)](color/resolvehdr%28in_%29.md): Evaluates this color to a resolved color with content headroom, given a set of environment values.
- [Color.ResolvedHDR](color/resolvedhdr.md): A concrete color value, including HDR headroom information.

### Describing a color

- [description](color/description.md): A textual representation of the color.

### Comparing colors

- [==(\_:\_:)](color/==%28____%29.md): Indicates whether two colors are equal.
- [hash(into:)](color/hash%28into_%29.md): Hashes the essential components of the color by feeding them into the given hash function.

### Deprecated symbols

- [cgColor](color/cgcolor.md): Deprecated. A Core Graphics representation of the color, if available.

### Default Implementations

- [ShapeStyle Implementations](color/shapestyle-implementations.md)
- [Transferable Implementations](color/transferable-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [ShapeStyle](shapestyle.md)
- [Transferable](https://developer.apple.com/documentation/coretransferable/transferable)
- [View](view.md)

## See Also

### Setting a color

- [tint(\_:)](view/tint%28__%29.md): Sets the tint color within this view.
