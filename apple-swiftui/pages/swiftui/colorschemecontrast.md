> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/colorschemecontrast](https://developer.apple.com/documentation/swiftui/colorschemecontrast)

# ColorSchemeContrast

**Framework:** SwiftUI  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The contrast between the app’s foreground and background colors.

## Declaration

```swift
enum ColorSchemeContrast
```

<a id="overview"></a>

## Overview

You receive a contrast value when you read the [colorSchemeContrast](environmentvalues/colorschemecontrast.md) environment value. The value tells you if a standard or increased contrast currently applies to the view. SwiftUI updates the value whenever the contrast changes, and redraws views that depend on the value. For example, the following [Text](text.md) view automatically updates when the user enables increased contrast:

```swift
@Environment(\.colorSchemeContrast) private var colorSchemeContrast

var body: some View {
    Text(colorSchemeContrast == .standard ? "Standard" : "Increased")
}
```

The user sets the contrast by selecting the Increase Contrast option in Accessibility \> Display in System Preferences on macOS, or Accessibility \> Display & Text Size in the Settings app on iOS. Your app can’t override the user’s choice. For information about using color and contrast in your app, see [Accessibility](https://developer.apple.com/design/human-interface-guidelines/accessibility) in the Human Interface Guidelines.

## Topics

### Getting contrast options

- [ColorSchemeContrast.standard](colorschemecontrast/standard.md): SwiftUI displays views with standard contrast between the app’s foreground and background colors.
- [ColorSchemeContrast.increased](colorschemecontrast/increased.md): SwiftUI displays views with increased contrast between the app’s foreground and background colors.

### Creating a color scheme contrast

- [init(\_:)](colorschemecontrast/init%28__%29.md): Creates a contrast from its accessibility contrast equivalent.

## Relationships

### Conforms To

- [CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the color scheme contrast

- [colorSchemeContrast](environmentvalues/colorschemecontrast.md): The contrast associated with the color scheme of this environment.
