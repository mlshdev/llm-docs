> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticleinputmode](https://developer.apple.com/documentation/scenekit/scnparticleinputmode)

# SCNParticleInputMode (Swift)

**Framework:** SceneKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Options for the input value of the property controller’s animation, used by the [inputMode](scnparticlepropertycontroller/inputmode.md) property.

## Declaration

```swift
enum SCNParticleInputMode
```

## Topics

### Constants

- [SCNParticleInputMode.overLife](scnparticleinputmode/overlife.md): The controller’s effect on a particle property is a function of the time since the particle’s birth.
- [SCNParticleInputMode.overDistance](scnparticleinputmode/overdistance.md): The controller’s effect on a particle property is a function of the particle’s distance from the position of a specified node.
- [SCNParticleInputMode.overOtherProperty](scnparticleinputmode/overotherproperty.md): The controller’s effect on a particle property is a function of another of the particle’s properties.

### Initializers

- [init(rawValue:)](scnparticleinputmode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# SCNParticleInputMode (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Options for the input value of the property controller’s animation, used by the [inputMode](scnparticlepropertycontroller/inputmode.md) property.

## Declaration

```objectivec
enum SCNParticleInputMode : NSInteger;
```

## Topics

### Constants

- [SCNParticleInputModeOverLife](scnparticleinputmode/overlife.md): The controller’s effect on a particle property is a function of the time since the particle’s birth.
- [SCNParticleInputModeOverDistance](scnparticleinputmode/overdistance.md): The controller’s effect on a particle property is a function of the particle’s distance from the position of a specified node.
- [SCNParticleInputModeOverOtherProperty](scnparticleinputmode/overotherproperty.md): The controller’s effect on a particle property is a function of another of the particle’s properties.
