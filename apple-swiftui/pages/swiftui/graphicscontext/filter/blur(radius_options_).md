> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/graphicscontext/filter/blur(radius:options:)

# blur(radius:options:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns a filter that applies a Gaussian blur.

## Declaration

```swift
static func blur(radius: CGFloat, options: GraphicsContext.BlurOptions = BlurOptions()) -> GraphicsContext.Filter
```

## Parameters

- `radius`: The standard deviation of the Gaussian blur.
- `options`: A set of options controlling the application of the effect.

<a id="return-value"></a>

## Return Value

A filter that applies Gaussian blur.
