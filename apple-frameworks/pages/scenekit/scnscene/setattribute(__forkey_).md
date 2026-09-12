> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnscene/setattribute(_:forkey:)](https://developer.apple.com/documentation/scenekit/scnscene/setattribute(_:forkey:))

# setAttribute(\_:forKey:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Sets a scene attribute for the specified key.

## Declaration

```swift
func setAttribute(_ attribute: Any?, forKey key: String)
```

## Parameters

- `attribute`: An object that specifies the value of the attribute to be written.
- `key`: One of the constants described in [Scene Attributes](../scene-attributes.md) that identifies the attribute to be written.

## See Also

### Managing Scene Attributes

- [attribute(forKey:)](attribute%28forkey_%29.md): Returns the scene attribute for the specified key.
- [SCNScene.Attribute](attribute.md)

# setAttribute:forKey: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sets a scene attribute for the specified key.

## Declaration

```objectivec
- (void) setAttribute:(id) attribute forKey:(NSString *) key;
```

## Parameters

- `attribute`: An object that specifies the value of the attribute to be written.
- `key`: One of the constants described in [Scene Attributes](../scene-attributes.md) that identifies the attribute to be written.

## See Also

### Managing Scene Attributes

- [attributeForKey:](attribute%28forkey_%29.md): Returns the scene attribute for the specified key.
- [SCNSceneAttribute](attribute.md)
