> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/localizedstringkey/stringinterpolation/appendinterpolation(accessibilityname:)

# appendInterpolation(accessibilityName:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Appends a localized description of a color for accessibility to a string interpolation.

## Declaration

```swift
mutating func appendInterpolation(accessibilityName color: Color)
```

## Parameters

- `color`: The color being described.

<a id="discussion"></a>

## Discussion

Don’t call this method directly; it’s used by the compiler when interpreting string interpolations.
