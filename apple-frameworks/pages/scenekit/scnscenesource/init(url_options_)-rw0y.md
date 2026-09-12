> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnscenesource/init(url:options:)-rw0y](https://developer.apple.com/documentation/scenekit/scnscenesource/init(url:options:)-rw0y)

# init(url:options:) (Swift)

**Framework:** SceneKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Initializes a scene source for reading the scene graph from a specified file.

## Declaration

```swift
init?(url: URL, options: [SCNSceneSource.LoadingOption : Any]? = nil)
```

## Parameters

- `url`: The URL identifying the scene.
- `options`: A dictionary containing options that affect scene loading. See `Scene Loading Options` for available keys and values. Pass `nil` to use default options.

<a id="return-value"></a>

## Return Value

An initialized scene source object, or `nil` if initialization was not successful.

<a id="Discussion"></a>

## Discussion

If you have the contents of a scene file but not the file itself (for example, if your app downloads scene files from the network), use the [init(data:options:)](init%28data_options_%29.md) method instead.

## See Also

### Creating a Scene Source

- [init(data:options:)](init%28data_options_%29.md): Initializes a scene source for reading the scene graph contained in an `NSData` object.

# initWithURL:options: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Initializes a scene source for reading the scene graph from a specified file.

## Declaration

```objectivec
- (instancetype) initWithURL:(NSURL *) url options:(NSDictionary<NSString *,id> *) options;
```

## Parameters

- `url`: The URL identifying the scene.
- `options`: A dictionary containing options that affect scene loading. See `Scene Loading Options` for available keys and values. Pass `nil` to use default options.

<a id="return-value"></a>

## Return Value

An initialized scene source object, or `nil` if initialization was not successful.

<a id="Discussion"></a>

## Discussion

If you have the contents of a scene file but not the file itself (for example, if your app downloads scene files from the network), use the [initWithData:options:](init%28data_options_%29.md) method instead.

## See Also

### Related Documentation

- [sceneSourceWithURL:options:](scenesourcewithurl_options_.md): Deprecated. Creates a scene source that reads the scene graph from a specified file.
- [sceneSourceWithData:options:](scenesourcewithdata_options_.md): Deprecated. Creates a scene source that reads the scene graph contained in an `NSData` object.

### Creating a Scene Source

- [sceneSourceWithURL:options:](scenesourcewithurl_options_.md): Deprecated. Creates a scene source that reads the scene graph from a specified file.
- [sceneSourceWithData:options:](scenesourcewithdata_options_.md): Deprecated. Creates a scene source that reads the scene graph contained in an `NSData` object.
- [initWithData:options:](init%28data_options_%29.md): Initializes a scene source for reading the scene graph contained in an `NSData` object.
