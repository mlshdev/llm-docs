> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/colorscheme](https://developer.apple.com/documentation/swiftui/colorscheme)

# ColorScheme

**Framework:** SwiftUI  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The possible color schemes, corresponding to the light and dark appearances.

## Declaration

```swift
enum ColorScheme
```

<a id="overview"></a>

## Overview

You receive a color scheme value when you read the [colorScheme](environmentvalues/colorscheme.md) environment value. The value tells you if a light or dark appearance currently applies to the view. SwiftUI updates the value whenever the appearance changes, and redraws views that depend on the value. For example, the following [Text](text.md) view automatically updates when the user enables Dark Mode:

```swift
@Environment(\.colorScheme) private var colorScheme

var body: some View {
    Text(colorScheme == .dark ? "Dark" : "Light")
}
```

Set a preferred appearance for a particular view hierarchy to override the user’s Dark Mode setting using the [preferredColorScheme(\_:)](view/preferredcolorscheme%28__%29.md) view modifier.

## Topics

### Getting color schemes

- [ColorScheme.light](colorscheme/light.md): The color scheme that corresponds to a light appearance.
- [ColorScheme.dark](colorscheme/dark.md): The color scheme that corresponds to a dark appearance.

### Creating a color scheme

- [init(\_:)](colorscheme/init%28__%29.md): Creates a color scheme from its user interface style equivalent.

### Supporting types

- [PreferredColorSchemeKey](preferredcolorschemekey.md): A key for specifying the preferred color scheme.

## Relationships

### Conforms To

- [CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Detecting and requesting the light or dark appearance

- [preferredColorScheme(\_:)](view/preferredcolorscheme%28__%29.md): Sets the preferred color scheme for this presentation.
- [colorScheme](environmentvalues/colorscheme.md): The color scheme of this environment.
