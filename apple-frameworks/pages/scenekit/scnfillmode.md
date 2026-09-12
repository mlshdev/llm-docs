> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnfillmode](https://developer.apple.com/documentation/scenekit/scnfillmode)

# SCNFillMode (Swift)

**Framework:** SceneKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

## Declaration

```swift
enum SCNFillMode
```

## Topics

### Enumeration Cases

- [SCNFillMode.fill](scnfillmode/fill.md)
- [SCNFillMode.lines](scnfillmode/lines.md)

### Initializers

- [init(rawValue:)](scnfillmode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Customizing Rendered Appearance

- [isLitPerPixel](scnmaterial/islitperpixel.md): A Boolean value that determines whether SceneKit performs lighting calculations per vertex or per pixel. Animatable.
- [isDoubleSided](scnmaterial/isdoublesided.md): A Boolean value that determines whether SceneKit renders both front and back faces of a surface.
- [cullMode](scnmaterial/cullmode.md): The mode determining which faces of a surface SceneKit renders. Animatable.
- [SCNCullMode](scncullmode.md): The modes SceneKit uses to determine which polygons to render in a surface, used by the [cullMode](scnmaterial/cullmode.md) property.
- [fillMode](scnmaterial/fillmode.md)

# SCNFillMode (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

## Declaration

```objectivec
enum SCNFillMode : NSUInteger;
```

## Topics

### Enumeration Cases

- [SCNFillModeFill](scnfillmode/fill.md)
- [SCNFillModeLines](scnfillmode/lines.md)

## See Also

### Customizing Rendered Appearance

- [litPerPixel](scnmaterial/islitperpixel.md): A Boolean value that determines whether SceneKit performs lighting calculations per vertex or per pixel. Animatable.
- [doubleSided](scnmaterial/isdoublesided.md): A Boolean value that determines whether SceneKit renders both front and back faces of a surface.
- [cullMode](scnmaterial/cullmode.md): The mode determining which faces of a surface SceneKit renders. Animatable.
- [SCNCullMode](scncullmode.md): The modes SceneKit uses to determine which polygons to render in a surface, used by the [cullMode](scnmaterial/cullmode.md) property.
- [fillMode](scnmaterial/fillmode.md)
