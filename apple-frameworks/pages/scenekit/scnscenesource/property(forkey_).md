> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnscenesource/property(forkey:)](https://developer.apple.com/documentation/scenekit/scnscenesource/property(forkey:))

# property(forKey:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Returns metadata about the scene.

## Declaration

```swift
func property(forKey key: String) -> Any?
```

## Parameters

- `key`: A constant identifying a metadata property of the scene source. See [Scene Source Properties](../scene-source-properties.md) for available keys and the formats of their values.

<a id="return-value"></a>

## Return Value

The value for the metadata property, or `nil` if no value exists for the specified property.

<a id="Discussion"></a>

## Discussion

This method returns information about the scene that is defined in the file but is not directly referenced by the scene.

## See Also

### Getting Information about the Scene

- [url](url.md): The URL identifying the file from which the scene source was created.
- [data](data.md): The data object from which the scene source loads scene content.

# propertyForKey: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns metadata about the scene.

## Declaration

```objectivec
- (id) propertyForKey:(NSString *) key;
```

## Parameters

- `key`: A constant identifying a metadata property of the scene source. See [Scene Source Properties](../scene-source-properties.md) for available keys and the formats of their values.

<a id="return-value"></a>

## Return Value

The value for the metadata property, or `nil` if no value exists for the specified property.

<a id="Discussion"></a>

## Discussion

This method returns information about the scene that is defined in the file but is not directly referenced by the scene.

## See Also

### Getting Information about the Scene

- [url](url.md): The URL identifying the file from which the scene source was created.
- [data](data.md): The data object from which the scene source loads scene content.
