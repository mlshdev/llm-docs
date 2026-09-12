> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/matchedtransitionsourceconfiguration](https://developer.apple.com/documentation/swiftui/matchedtransitionsourceconfiguration)

# MatchedTransitionSourceConfiguration

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A configuration that defines the appearance of a matched transition source.

## Declaration

```swift
protocol MatchedTransitionSourceConfiguration : Sendable
```

## Topics

### Instance Methods

- [background(\_:)](matchedtransitionsourceconfiguration/background%28__%29.md): Specifies a color that will be drawn behind the content within the matched transition source.
- [clipShape(\_:)](matchedtransitionsourceconfiguration/clipshape%28__%29.md): Applies the specified shape as to the matched transition source, clipping its content.
- [shadow(color:radius:x:y:)](matchedtransitionsourceconfiguration/shadow%28color_radius_x_y_%29.md): Applies the specified shadow effect to the matched transition source.

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [EmptyMatchedTransitionSourceConfiguration](emptymatchedtransitionsourceconfiguration.md)

## See Also

### Defining matched transitions

- [matchedTransitionSource(id:in:)](view/matchedtransitionsource%28id_in_%29.md): Identifies this view as the source of a navigation transition, such as a zoom transition.
- [matchedTransitionSource(id:in:configuration:)](view/matchedtransitionsource%28id_in_configuration_%29.md): Identifies this view as the source of a navigation transition, such as a zoom transition.
- [EmptyMatchedTransitionSourceConfiguration](emptymatchedtransitionsourceconfiguration.md): An unstyled matched transition source configuration.
