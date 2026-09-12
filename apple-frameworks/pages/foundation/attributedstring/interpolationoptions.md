> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributedstring/interpolationoptions](https://developer.apple.com/documentation/foundation/attributedstring/interpolationoptions)

# AttributedString.InterpolationOptions

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Options that affect the behavior of string interpolation on the attributed string.

## Declaration

```swift
struct InterpolationOptions
```

## Topics

### Type Properties

- [insertAttributesWithoutMerging](interpolationoptions/insertattributeswithoutmerging.md): By default, interpolating an AttributedString will result in the final string having all attributes present at its interpolation point, plus all attributes from the beginning of the interpolated AttributedString. Specify this option to instead indicate that pre-existing attributes at the point of interpolation (e.g., those specified with Markdown syntax) must be ignored. The result will only have the attributes from the interpolated AttributedString. This option has no effect when formatting a plain-text String, since all attributes will be stripped anyway.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)
