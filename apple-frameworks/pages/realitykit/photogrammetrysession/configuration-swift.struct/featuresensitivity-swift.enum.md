> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/photogrammetrysession/configuration-swift.struct/featuresensitivity-swift.enum](https://developer.apple.com/documentation/realitykit/photogrammetrysession/configuration-swift.struct/featuresensitivity-swift.enum)

# PhotogrammetrySession.Configuration.FeatureSensitivity

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 15.0+ · macOS 12.0+

The sensitivity to sample landmarks.

## Declaration

```swift
enum FeatureSensitivity
```

## Topics

### Specifying feature sensitivity

- [PhotogrammetrySession.Configuration.FeatureSensitivity.normal](featuresensitivity-swift.enum/normal.md): The session uses the default algorithm to detect landmarks.
- [PhotogrammetrySession.Configuration.FeatureSensitivity.high](featuresensitivity-swift.enum/high.md): The session uses a slower, more sensitive algorithm to detect landmarks.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring feature sensitivity

- [featureSensitivity](featuresensitivity-swift.property.md): The precision of landmark detection.
