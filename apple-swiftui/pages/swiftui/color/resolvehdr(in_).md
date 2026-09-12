> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/color/resolvehdr(in:)](https://developer.apple.com/documentation/swiftui/color/resolvehdr(in:))

# resolveHDR(in:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Evaluates this color to a resolved color with content headroom, given a set of environment values.

## Declaration

```swift
func resolveHDR(in environment: EnvironmentValues) -> Color.ResolvedHDR
```

## Parameters

- `environment`: The environment of the view displaying the color.

<a id="return-value"></a>

## Return Value

The color’s value in the sRGB color space.

## See Also

### Working with high dynamic range (HDR) colors

- [Color.ResolvedHDR](resolvedhdr.md): A concrete color value, including HDR headroom information.
