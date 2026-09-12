> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnscene/init(named:)](https://developer.apple.com/documentation/scenekit/scnscene/init(named:))

# init(named:) (Swift)

**Framework:** SceneKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Loads a scene from a file with the specified name in the app’s main bundle.

## Declaration

```swift
convenience init?(named name: String)
```

## Parameters

- `name`: The name of a scene file in the app bundle’s resources directory.

<a id="return-value"></a>

## Return Value

A new scene object, or `nil` if no scene could be loaded.

<a id="Discussion"></a>

## Discussion

This method provides a convenient way to load a complete scene from a file in the app’s main bundle. Calling this method is equivalent to using the [Bundle](../../foundation/bundle.md) class to locate the scene file and passing the resulting URL to the [init(url:options:)](init%28url_options_%29-7ugvv.md) method, specifying no options and no error handling.

For more detailed options or to load only part of a file’s scene graph, use the [SCNSceneSource](../scnscenesource.md) class.

When creating a scene using Xcode’s Scene Editor or an external tool, you should copy your scene file into a directory with the .scnassets extension inside your app bundle. You should also place any image files referenced as textures from that scene in an Asset Catalog. Xcode will optimize the scene and texture resources for best performance on each target device, and prepare your texture resources for delivery features such as App Thinning and On-Demand Resources.

## See Also

### Creating a Scene from a File

- [init(named:inDirectory:options:)](init%28named_indirectory_options_%29.md): Loads a scene from a file with the specified name in a specific subdirectory of the app’s main bundle.
- [init(url:options:)](init%28url_options_%29-7ugvv.md): Loads a scene from the specified URL.

# sceneNamed: (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS · watchOS

Loads a scene from a file with the specified name in the app’s main bundle.

## Declaration

```objectivec
+ (instancetype) sceneNamed:(NSString *) name;
```

## Parameters

- `name`: The name of a scene file in the app bundle’s resources directory.

<a id="return-value"></a>

## Return Value

A new scene object, or `nil` if no scene could be loaded.

<a id="Discussion"></a>

## Discussion

This method provides a convenient way to load a complete scene from a file in the app’s main bundle. Calling this method is equivalent to using the [NSBundle](../../foundation/bundle.md) class to locate the scene file and passing the resulting URL to the [sceneWithURL:options:error:](init%28url_options_%29-7ugvv.md) method, specifying no options and no error handling.

For more detailed options or to load only part of a file’s scene graph, use the [SCNSceneSource](../scnscenesource.md) class.

When creating a scene using Xcode’s Scene Editor or an external tool, you should copy your scene file into a directory with the .scnassets extension inside your app bundle. You should also place any image files referenced as textures from that scene in an Asset Catalog. Xcode will optimize the scene and texture resources for best performance on each target device, and prepare your texture resources for delivery features such as App Thinning and On-Demand Resources.

## See Also

### Creating a Scene from a File

- [scene](scene.md): Deprecated. Creates and returns an empty scene.
- [sceneNamed:inDirectory:options:](init%28named_indirectory_options_%29.md): Loads a scene from a file with the specified name in a specific subdirectory of the app’s main bundle.
- [sceneWithURL:options:error:](init%28url_options_%29-7ugvv.md): Loads a scene from the specified URL.
