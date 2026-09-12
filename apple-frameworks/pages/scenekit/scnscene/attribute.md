> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnscene/attribute](https://developer.apple.com/documentation/scenekit/scnscene/attribute)

# SCNScene.Attribute (Swift)

**Framework:** SceneKit  
**Kind:** Structure  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

## Declaration

```swift
struct Attribute
```

## Topics

### Type Properties

- [endTime](attribute/endtime.md)
- [frameRate](attribute/framerate.md): A floating-point value for the frame rate of the scene.
- [startTime](attribute/starttime.md)
- [upAxis](attribute/upaxis.md): An `SCNVector3` structure specifying the orientation of the scene.

### Initializers

- [init(rawValue:)](attribute/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing Scene Attributes

- [attribute(forKey:)](attribute%28forkey_%29.md): Returns the scene attribute for the specified key.
- [setAttribute(\_:forKey:)](setattribute%28__forkey_%29.md): Sets a scene attribute for the specified key.

# SCNSceneAttribute (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
typedef NSString * SCNSceneAttribute;
```

## Topics

### Type Properties

- [SCNSceneEndTimeAttributeKey](attribute/endtime.md)
- [SCNSceneFrameRateAttributeKey](attribute/framerate.md): A floating-point value for the frame rate of the scene.
- [SCNSceneStartTimeAttributeKey](attribute/starttime.md)
- [SCNSceneUpAxisAttributeKey](attribute/upaxis.md): An `SCNVector3` structure specifying the orientation of the scene.

## See Also

### Managing Scene Attributes

- [attributeForKey:](attribute%28forkey_%29.md): Returns the scene attribute for the specified key.
- [setAttribute:forKey:](setattribute%28__forkey_%29.md): Sets a scene attribute for the specified key.
