> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/preferredcolorschemekey](https://developer.apple.com/documentation/swiftui/preferredcolorschemekey)

# PreferredColorSchemeKey

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 11.0+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A key for specifying the preferred color scheme.

## Declaration

```swift
struct PreferredColorSchemeKey
```

<a id="overview"></a>

## Overview

Don’t use this key directly. Instead, set a preferred color scheme for a view using the [preferredColorScheme(\_:)](view/preferredcolorscheme%28__%29.md) view modifier. Get the current color scheme for a view by accessing the [colorScheme](environmentvalues/colorscheme.md) value.

## Relationships

### Conforms To

- [PreferenceKey](preferencekey.md)
