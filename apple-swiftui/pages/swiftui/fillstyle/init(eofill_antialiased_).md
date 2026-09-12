> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/fillstyle/init(eofill:antialiased:)](https://developer.apple.com/documentation/swiftui/fillstyle/init(eofill:antialiased:))

# init(eoFill:antialiased:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a new fill style with the specified settings.

## Declaration

```swift
init(eoFill: Bool = false, antialiased: Bool = true)
```

## Parameters

- `eoFill`: A Boolean value that indicates whether to use the even-odd rule for rendering a shape. Pass `false` to use the non-zero winding number rule instead.
- `antialiased`: A Boolean value that indicates whether to use antialiasing when rendering the edges of a shape.
