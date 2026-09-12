> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/font/default](https://developer.apple.com/documentation/swiftui/font/default)

# default

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The effective SwiftUI font used in any given environment.

## Declaration

```swift
static var `default`: Font { get }
```

<a id="discussion"></a>

## Discussion

The font specified by environment, preferring first any developer specified font, via [font](../environmentvalues/font.md), then any framework specified font, and finally the default SwiftUI font.
