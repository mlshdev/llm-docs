> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/preferencekey](https://developer.apple.com/documentation/swiftui/preferencekey)

# PreferenceKey

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A named value produced by a view.

## Declaration

```swift
protocol PreferenceKey
```

<a id="overview"></a>

## Overview

A view with multiple children automatically combines its values for a given preference into a single value visible to its ancestors.

## Topics

### Getting the default value

- [defaultValue](preferencekey/defaultvalue.md): The default value of the preference.
- [Value](preferencekey/value.md): The type of value produced by this preference.

### Combining preferences

- [reduce(value:nextValue:)](preferencekey/reduce%28value_nextvalue_%29.md): Combines a sequence of values by modifying the previously-accumulated value with the result of a closure that provides the next value.

## Relationships

### Conforming Types

- [PreferredColorSchemeKey](preferredcolorschemekey.md)
- [Text.LayoutKey](text/layoutkey.md)
