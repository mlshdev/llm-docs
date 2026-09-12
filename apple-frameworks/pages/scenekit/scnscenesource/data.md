> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnscenesource/data](https://developer.apple.com/documentation/scenekit/scnscenesource/data)

# data (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The data object from which the scene source loads scene content.

## Declaration

```swift
var data: Data? { get }
```

<a id="Discussion"></a>

## Discussion

If the scene source was created using the [sceneSourceWithData:options:](scenesourcewithdata_options_.md) or [init(data:options:)](init%28data_options_%29.md) method, this property’s value is the data from which the scene source was created. If the scene source was created from a scene file using the the [sceneSourceWithURL:options:](scenesourcewithurl_options_.md) or [init(url:options:)](init%28url_options_%29-rw0y.md) method, this property’s value is the data loaded from that URL at the time the scene source was created.

## See Also

### Getting Information about the Scene

- [url](url.md): The URL identifying the file from which the scene source was created.
- [property(forKey:)](property%28forkey_%29.md): Returns metadata about the scene.

# data (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The data object from which the scene source loads scene content.

## Declaration

```objectivec
@property (readonly, nullable) NSData * data;
```

<a id="Discussion"></a>

## Discussion

If the scene source was created using the [sceneSourceWithData:options:](scenesourcewithdata_options_.md) or [initWithData:options:](init%28data_options_%29.md) method, this property’s value is the data from which the scene source was created. If the scene source was created from a scene file using the the [sceneSourceWithURL:options:](scenesourcewithurl_options_.md) or [initWithURL:options:](init%28url_options_%29-rw0y.md) method, this property’s value is the data loaded from that URL at the time the scene source was created.

## See Also

### Getting Information about the Scene

- [url](url.md): The URL identifying the file from which the scene source was created.
- [propertyForKey:](property%28forkey_%29.md): Returns metadata about the scene.
