> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnscenesource/scenesourcewithurl:options:](https://developer.apple.com/documentation/scenekit/scnscenesource/scenesourcewithurl:options:)

# sceneSourceWithURL:options:

**Interface language:** Objective-C

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates a scene source that reads the scene graph from a specified file.

## Declaration

```objectivec
+ (instancetype) sceneSourceWithURL:(NSURL *) url options:(NSDictionary<NSString *,id> *) options;
```

## Parameters

- `url`: A URL identifying the location of a scene file in a format recognized by SceneKit.
- `options`: A dictionary containing options that affect scene loading. See `Scene Loading Options` for available keys and values. Pass `nil` to use default options.

<a id="return-value"></a>

## Return Value

A new, initialized scene source object, or `nil` if initialization was not successful.

<a id="Discussion"></a>

## Discussion

If you have the contents of a scene file but not the file itself (for example, if your app downloads scene files from the network), use the [sceneSourceWithData:options:](scenesourcewithdata_options_.md) method instead.

## See Also

### Creating a Scene Source

- [sceneSourceWithData:options:](scenesourcewithdata_options_.md): Deprecated. Creates a scene source that reads the scene graph contained in an `NSData` object.
- [initWithURL:options:](init%28url_options_%29-rw0y.md): Initializes a scene source for reading the scene graph from a specified file.
- [initWithData:options:](init%28data_options_%29.md): Initializes a scene source for reading the scene graph contained in an `NSData` object.
