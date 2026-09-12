> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnsceneexportprogresshandler](https://developer.apple.com/documentation/scenekit/scnsceneexportprogresshandler)

# SCNSceneExportProgressHandler (Swift)

**Framework:** SceneKit  
**Kind:** Type Alias  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The signature for the block that SceneKit calls during scene export.

## Declaration

```swift
typealias SCNSceneExportProgressHandler = (Float, (any Error)?, UnsafeMutablePointer<ObjCBool>) -> Void
```

<a id="Discussion"></a>

## Discussion

You specify a block with this signature when calling the [write(to:options:delegate:progressHandler:)](scnscene/write%28to_options_delegate_progresshandler_%29.md) method in order to receive updates on the progress of the export operation. The block takes the following parameters:

- **totalProgress**: A number between `0.0` and `1.0` that indicates the progress of the export operation, with `0.0` indicating that the operation has just begun and `1.0` indicating the operation has completed.
- **error**: An error encountered during the export process, or `nil` if no errors have occurred.
- **stop**: Set `*stop` to [true](https://developer.apple.com/documentation/swift/true) inside the block to cancel export.

## See Also

### Constants

- [Scene Attributes](scene-attributes.md): Attribute keys available in the options dictionary for the methods [attribute(forKey:)](scnscene/attribute%28forkey_%29.md) and [setAttribute(\_:forKey:)](scnscene/setattribute%28__forkey_%29.md)
- [Scene Export Options](scene-export-options.md): Options for the [write(to:options:delegate:progressHandler:)](scnscene/write%28to_options_delegate_progresshandler_%29.md) method.

# SCNSceneExportProgressHandler (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The signature for the block that SceneKit calls during scene export.

## Declaration

```objectivec
typedef void (^)(float, NSError *, _Bool *) SCNSceneExportProgressHandler;
```

<a id="Discussion"></a>

## Discussion

You specify a block with this signature when calling the [writeToURL:options:delegate:progressHandler:](scnscene/write%28to_options_delegate_progresshandler_%29.md) method in order to receive updates on the progress of the export operation. The block takes the following parameters:

- **totalProgress**: A number between `0.0` and `1.0` that indicates the progress of the export operation, with `0.0` indicating that the operation has just begun and `1.0` indicating the operation has completed.
- **error**: An error encountered during the export process, or `nil` if no errors have occurred.
- **stop**: Set `*stop` to [true](https://developer.apple.com/documentation/swift/true) inside the block to cancel export.

## See Also

### Constants

- [Scene Attributes](scene-attributes.md): Attribute keys available in the options dictionary for the methods [attributeForKey:](scnscene/attribute%28forkey_%29.md) and [setAttribute:forKey:](scnscene/setattribute%28__forkey_%29.md)
- [Scene Export Options](scene-export-options.md): Options for the [writeToURL:options:delegate:progressHandler:](scnscene/write%28to_options_delegate_progresshandler_%29.md) method.
