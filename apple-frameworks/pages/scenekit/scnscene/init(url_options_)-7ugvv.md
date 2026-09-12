> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnscene/init(url:options:)-7ugvv](https://developer.apple.com/documentation/scenekit/scnscene/init(url:options:)-7ugvv)

# init(url:options:) (Swift)

**Framework:** SceneKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Loads a scene from the specified URL.

## Declaration

```swift
convenience init(url: URL, options: [SCNSceneSource.LoadingOption : Any]? = nil) throws
```

## Parameters

- `url`: The URL to the scene file to load.
- `options`: A dictionary of options affecting scene loading, or `nil` for default options. For available keys, see Scene Loading Options.

<a id="return-value"></a>

## Return Value

A new scene object, or `nil` if no scene could be loaded.

<a id="Discussion"></a>

## Discussion

This method provides a convenient way to load a complete scene from a file at an arbitrary URL. For more detailed options or to load only part of a file’s scene graph, use the [SCNSceneSource](../scnscenesource.md) class.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

When creating a scene using Xcode’s Scene Editor or an external tool, you should copy your scene file into a directory with the .scnassets extension inside your app bundle. You should also place any image files referenced as textures from that scene in an Asset Catalog. Xcode will optimize the scene and texture resources for best performance on each target device, and prepare your texture resources for delivery features such as App Thinning and On-Demand Resources.

## See Also

### Creating a Scene from a File

- [init(named:)](init%28named_%29.md): Loads a scene from a file with the specified name in the app’s main bundle.
- [init(named:inDirectory:options:)](init%28named_indirectory_options_%29.md): Loads a scene from a file with the specified name in a specific subdirectory of the app’s main bundle.

# sceneWithURL:options:error: (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Loads a scene from the specified URL.

## Declaration

```objectivec
+ (instancetype) sceneWithURL:(NSURL *) url options:(NSDictionary<NSString *,id> *) options error:(NSError **) error;
```

## Parameters

- `url`: The URL to the scene file to load.
- `options`: A dictionary of options affecting scene loading, or `nil` for default options. For available keys, see Scene Loading Options.
- `error`: If an error occurs, this pointer is set to an [NSError](../../foundation/nserror.md) object describing the error. If you do not want error information, pass in `nil`.

<a id="return-value"></a>

## Return Value

A new scene object, or `nil` if no scene could be loaded.

<a id="Discussion"></a>

## Discussion

This method provides a convenient way to load a complete scene from a file at an arbitrary URL. For more detailed options or to load only part of a file’s scene graph, use the [SCNSceneSource](../scnscenesource.md) class.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

When creating a scene using Xcode’s Scene Editor or an external tool, you should copy your scene file into a directory with the .scnassets extension inside your app bundle. You should also place any image files referenced as textures from that scene in an Asset Catalog. Xcode will optimize the scene and texture resources for best performance on each target device, and prepare your texture resources for delivery features such as App Thinning and On-Demand Resources.

## See Also

### Creating a Scene from a File

- [scene](scene.md): Deprecated. Creates and returns an empty scene.
- [sceneNamed:](init%28named_%29.md): Loads a scene from a file with the specified name in the app’s main bundle.
- [sceneNamed:inDirectory:options:](init%28named_indirectory_options_%29.md): Loads a scene from a file with the specified name in a specific subdirectory of the app’s main bundle.
