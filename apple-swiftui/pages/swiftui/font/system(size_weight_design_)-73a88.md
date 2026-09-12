> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/font/system(size:weight:design:)-73a88](https://developer.apple.com/documentation/swiftui/font/system(size:weight:design:)-73a88)

# system(size:weight:design:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.0+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · tvOS 13.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Specifies a system font to use, along with the style, weight, and any design parameters you want applied to the text.

> Use [system(size:weight:design:)](system%28size_weight_design_%29-697b2.md) instead.

## Declaration

```swift
static func system(size: CGFloat, weight: Font.Weight = .regular, design: Font.Design = .default) -> Font
```

<a id="discussion"></a>

## Discussion

Use this function to create a system font by specifying the size and weight, and a type design together. The following styles the system font as 17 point, [semibold](weight/semibold.md) text:

```swift
Text("Hello").font(.system(size: 17, weight: .semibold))
```

While the following styles the text as 17 point [bold](weight/bold.md), and applies a `serif` [Font.Design](design.md) to the system font:

```swift
Text("Hello").font(.system(size: 17, weight: .bold, design: .serif))
```

If you want to use the default [Font.Weight](weight.md) ([regular](weight/regular.md)), you don’t need to specify the `weight` in the method. The following example styles the text as 17 point [regular](weight/regular.md), and uses a [Font.Design.rounded](design/rounded.md) system font:

```swift
Text("Hello").font(.system(size: 17, design: .rounded))
```

## See Also

### Deprecated symbols

- [system(\_:design:)](system%28__design_%29.md): Deprecated. Gets a system font with the given text style and design.
