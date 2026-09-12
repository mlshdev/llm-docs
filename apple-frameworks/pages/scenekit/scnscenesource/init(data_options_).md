> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnscenesource/init(data:options:)](https://developer.apple.com/documentation/scenekit/scnscenesource/init(data:options:))

# init(data:options:) (Swift)

**Framework:** SceneKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Initializes a scene source for reading the scene graph contained in an `NSData` object.

## Declaration

```swift
init?(data: Data, options: [SCNSceneSource.LoadingOption : Any]? = nil)
```

## Parameters

- `data`: A data object containing a scene file in a format recognized by SceneKit.
- `options`: A dictionary containing options that affect scene loading. See `Scene Loading Options` for available keys and values. Pass `nil` to use default options.

<a id="return-value"></a>

## Return Value

An initialized scene source object, or `nil` if initialization was not successful.

<a id="Discussion"></a>

## Discussion

The `data` parameter of this method (an [NSData](../../foundation/nsdata.md)) should contain the same data as directly read from a scene file (such as by using the [NSData](../../foundation/nsdata.md) method [init(contentsOfURL:)](../../foundation/nsdata/init%28contentsofurl_%29-5gfaw.md)). Use this method when you have the contents of a scene file but not the file itself—for example, if your app downloads scene files from the network.

## See Also

### Creating a Scene Source

- [init(url:options:)](init%28url_options_%29-rw0y.md): Initializes a scene source for reading the scene graph from a specified file.

# initWithData:options: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Initializes a scene source for reading the scene graph contained in an `NSData` object.

## Declaration

```objectivec
- (instancetype) initWithData:(NSData *) data options:(NSDictionary<NSString *,id> *) options;
```

## Parameters

- `data`: A data object containing a scene file in a format recognized by SceneKit.
- `options`: A dictionary containing options that affect scene loading. See `Scene Loading Options` for available keys and values. Pass `nil` to use default options.

<a id="return-value"></a>

## Return Value

An initialized scene source object, or `nil` if initialization was not successful.

<a id="Discussion"></a>

## Discussion

The `data` parameter of this method (an [NSData](../../foundation/nsdata.md)) should contain the same data as directly read from a scene file (such as by using the [NSData](../../foundation/nsdata.md) method [init(contentsOfURL:)](../../foundation/nsdata/init%28contentsofurl_%29-5gfaw.md)). Use this method when you have the contents of a scene file but not the file itself—for example, if your app downloads scene files from the network.

## See Also

### Related Documentation

- [sceneSourceWithURL:options:](scenesourcewithurl_options_.md): Deprecated. Creates a scene source that reads the scene graph from a specified file.
- [sceneSourceWithData:options:](scenesourcewithdata_options_.md): Deprecated. Creates a scene source that reads the scene graph contained in an `NSData` object.

### Creating a Scene Source

- [sceneSourceWithURL:options:](scenesourcewithurl_options_.md): Deprecated. Creates a scene source that reads the scene graph from a specified file.
- [sceneSourceWithData:options:](scenesourcewithdata_options_.md): Deprecated. Creates a scene source that reads the scene graph contained in an `NSData` object.
- [initWithURL:options:](init%28url_options_%29-rw0y.md): Initializes a scene source for reading the scene graph from a specified file.
