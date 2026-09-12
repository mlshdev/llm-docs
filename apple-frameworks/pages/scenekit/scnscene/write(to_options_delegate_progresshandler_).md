> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnscene/write(to:options:delegate:progresshandler:)](https://developer.apple.com/documentation/scenekit/scnscene/write(to:options:delegate:progresshandler:))

# write(to:options:delegate:progressHandler:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Exports the scene and its contents to a file at the specified URL.

## Declaration

```swift
func write(to url: URL, options: [String : Any]? = nil, delegate: (any SCNSceneExportDelegate)?, progressHandler: SCNSceneExportProgressHandler? = nil) -> Bool
```

## Parameters

- `url`: The URL to write the scene file to. This URL must use the `file` scheme.
- `options`: A dictionary of options affecting scene loading, or `nil` for default options. For available keys, see Scene Loading Options.
- `delegate`: A delegate object to customize export of external resources used by the scene. Pass `nil` for default export of external resources.
- `progressHandler`: A block that SceneKit calls repeatedly to report progress of the export operation.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if exporting the scene was successful; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The format of the output file depends on OS and argument file extension:

- In iOS 10.0, tvOS 10.0, watchOS 3.0, OS X v10.11, and later versions, specify the `.scn` extension to save a file in SceneKit’s native format. This format supports all features of SceneKit (including physics, constraints, and particle systems), and reading files in this format is faster than importing from other scene file formats.
- In macOS only, specify the `.dae` extension to export in Digital Asset Exchange (DAE) format for use by other apps. Exported DAE files do not contain scene elements specific to SceneKit, such as physics bodies and fields, constraints, and particle systems.

Older versions of iOS and tvOS don’t include the [write(to:options:delegate:progressHandler:)](write%28to_options_delegate_progresshandler_%29.md) method, but you can still produce a file in `.scn` format through SceneKit’s support for the [NSSecureCoding](../../foundation/nssecurecoding.md) protocol. Use the [NSKeyedArchiver](../../foundation/nskeyedarchiver.md) class to serialize a scene and all its contents, and the [NSKeyedUnarchiver](../../foundation/nskeyedunarchiver.md) class to load an archived scene.

If the scene references external resources, such as image files used in material properties, SceneKit exports these files to a nearby location and references their URLs in the exported scene file. To override SceneKit’s exporting of external resources, provide an object implementing the [SCNSceneExportDelegate](../scnsceneexportdelegate.md) protocol in the `delegate` parameter.

## See Also

### Exporting a Scene File

- [SCNSceneExportDelegate](../scnsceneexportdelegate.md): Methods you can implement to participate in the process of exporting a scene to a file.

# writeToURL:options:delegate:progressHandler: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 10.0+ · visionOS 1.0+

Exports the scene and its contents to a file at the specified URL.

## Declaration

```objectivec
- (BOOL) writeToURL:(NSURL *) url options:(NSDictionary<NSString *,id> *) options delegate:(id<SCNSceneExportDelegate>) delegate progressHandler:(SCNSceneExportProgressHandler) progressHandler;
```

## Parameters

- `url`: The URL to write the scene file to. This URL must use the `file` scheme.
- `options`: A dictionary of options affecting scene loading, or `nil` for default options. For available keys, see Scene Loading Options.
- `delegate`: A delegate object to customize export of external resources used by the scene. Pass `nil` for default export of external resources.
- `progressHandler`: A block that SceneKit calls repeatedly to report progress of the export operation.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if exporting the scene was successful; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The format of the output file depends on OS and argument file extension:

- In iOS 10.0, tvOS 10.0, watchOS 3.0, OS X v10.11, and later versions, specify the `.scn` extension to save a file in SceneKit’s native format. This format supports all features of SceneKit (including physics, constraints, and particle systems), and reading files in this format is faster than importing from other scene file formats.
- In macOS only, specify the `.dae` extension to export in Digital Asset Exchange (DAE) format for use by other apps. Exported DAE files do not contain scene elements specific to SceneKit, such as physics bodies and fields, constraints, and particle systems.

Older versions of iOS and tvOS don’t include the [writeToURL:options:delegate:progressHandler:](write%28to_options_delegate_progresshandler_%29.md) method, but you can still produce a file in `.scn` format through SceneKit’s support for the [NSSecureCoding](../../foundation/nssecurecoding.md) protocol. Use the [NSKeyedArchiver](../../foundation/nskeyedarchiver.md) class to serialize a scene and all its contents, and the [NSKeyedUnarchiver](../../foundation/nskeyedunarchiver.md) class to load an archived scene.

If the scene references external resources, such as image files used in material properties, SceneKit exports these files to a nearby location and references their URLs in the exported scene file. To override SceneKit’s exporting of external resources, provide an object implementing the [SCNSceneExportDelegate](../scnsceneexportdelegate.md) protocol in the `delegate` parameter.

## See Also

### Exporting a Scene File

- [SCNSceneExportDelegate](../scnsceneexportdelegate.md): Methods you can implement to participate in the process of exporting a scene to a file.
