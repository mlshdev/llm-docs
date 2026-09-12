> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnscenesource/url](https://developer.apple.com/documentation/scenekit/scnscenesource/url)

# url (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The URL identifying the file from which the scene source was created.

## Declaration

```swift
var url: URL? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` if the scene source was not created using the [sceneSourceWithURL:options:](scenesourcewithurl_options_.md) or [init(url:options:)](init%28url_options_%29-rw0y.md) method.

## See Also

### Getting Information about the Scene

- [data](data.md): The data object from which the scene source loads scene content.
- [property(forKey:)](property%28forkey_%29.md): Returns metadata about the scene.

# url (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The URL identifying the file from which the scene source was created.

## Declaration

```objectivec
@property (readonly, nullable) NSURL * url;
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` if the scene source was not created using the [sceneSourceWithURL:options:](scenesourcewithurl_options_.md) or [initWithURL:options:](init%28url_options_%29-rw0y.md) method.

## See Also

### Getting Information about the Scene

- [data](data.md): The data object from which the scene source loads scene content.
- [propertyForKey:](property%28forkey_%29.md): Returns metadata about the scene.
