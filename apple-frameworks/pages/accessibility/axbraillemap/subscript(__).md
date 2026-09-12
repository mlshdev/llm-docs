> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/axbraillemap/subscript(_:)](https://developer.apple.com/documentation/accessibility/axbraillemap/subscript(_:))

# subscript(\_:)

**Framework:** Accessibility  
**Kind:** Instance Subscript  
**Availability:** iOS 15.2+ · iPadOS 15.2+ · Mac Catalyst 15.2+ · macOS 12.2+ · tvOS 15.2+ · visionOS 1.0+ · watchOS 8.2+

Accesses the height of an individual pin on the braille display.

## Declaration

```swift
subscript(point: CGPoint) -> Float { get set }
```

<a id="overview"></a>

## Overview

Use this subscript to set or get the height of an individual pin. This subscript provides the same capabilities as using [setHeight(\_:at:)](setheight%28__at_%29.md) and [height(at:)](height%28at_%29.md).

## See Also

### Accessing dots

- [setHeight(\_:at:)](setheight%28__at_%29.md): Sets the height of an individual pin on the braille display.
- [height(at:)](height%28at_%29.md): Retrieves the height of an individual pin on the braille display.
