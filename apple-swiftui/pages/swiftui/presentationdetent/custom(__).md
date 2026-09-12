> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/presentationdetent/custom(_:)](https://developer.apple.com/documentation/swiftui/presentationdetent/custom(_:))

# custom(\_:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A custom detent with a calculated height.

## Declaration

```swift
static func custom<D>(_ type: D.Type) -> PresentationDetent where D : CustomPresentationDetent
```

## See Also

### Creating custom detents

- [fraction(\_:)](fraction%28__%29.md): A custom detent with the specified fractional height.
- [height(\_:)](height%28__%29.md): A custom detent with the specified height.
- [PresentationDetent.Context](context.md): Information that you use to calculate the presentation’s height.
