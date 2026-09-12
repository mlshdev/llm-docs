> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnscene/attribute(forkey:)](https://developer.apple.com/documentation/scenekit/scnscene/attribute(forkey:))

# attribute(forKey:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Returns the scene attribute for the specified key.

## Declaration

```swift
func attribute(forKey key: String) -> Any?
```

## Parameters

- `key`: One of the constants described in [Scene Attributes](../scene-attributes.md) that identifies the attribute to be read.

<a id="return-value"></a>

## Return Value

The scene attribute for the specified key, or `nil` if no such attribute exists.

## See Also

### Managing Scene Attributes

- [setAttribute(\_:forKey:)](setattribute%28__forkey_%29.md): Sets a scene attribute for the specified key.
- [SCNScene.Attribute](attribute.md)

# attributeForKey: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the scene attribute for the specified key.

## Declaration

```objectivec
- (id) attributeForKey:(NSString *) key;
```

## Parameters

- `key`: One of the constants described in [Scene Attributes](../scene-attributes.md) that identifies the attribute to be read.

<a id="return-value"></a>

## Return Value

The scene attribute for the specified key, or `nil` if no such attribute exists.

## See Also

### Managing Scene Attributes

- [setAttribute:forKey:](setattribute%28__forkey_%29.md): Sets a scene attribute for the specified key.
- [SCNSceneAttribute](attribute.md)
