> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnsceneexportdelegate](https://developer.apple.com/documentation/scenekit/scnsceneexportdelegate)

# SCNSceneExportDelegate (Swift)

**Framework:** SceneKit  
**Kind:** Protocol  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Methods you can implement to participate in the process of exporting a scene to a file.

## Declaration

```swift
protocol SCNSceneExportDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

When you call a [SCNScene](scnscene.md) object’s [write(to:options:delegate:progressHandler:)](scnscene/write%28to_options_delegate_progresshandler_%29.md) method to export the scene’s content to a file, you can optionally specify a delegate object to receive these messages.

## Topics

### Writing Image Attachments

- [write(\_:withSceneDocumentURL:originalImageURL:)](scnsceneexportdelegate/write%28__withscenedocumenturl_originalimageurl_%29.md): Tells the delegate to export an image attached to a scene.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Exporting a Scene File

- [write(to:options:delegate:progressHandler:)](scnscene/write%28to_options_delegate_progresshandler_%29.md): Exports the scene and its contents to a file at the specified URL.

# SCNSceneExportDelegate (Objective-C)

**Framework:** SceneKit  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 10.0+ · visionOS 1.0+

Methods you can implement to participate in the process of exporting a scene to a file.

## Declaration

```objectivec
@protocol SCNSceneExportDelegate <NSObject>
```

<a id="overview"></a>

## Overview

When you call a [SCNScene](scnscene.md) object’s [writeToURL:options:delegate:progressHandler:](scnscene/write%28to_options_delegate_progresshandler_%29.md) method to export the scene’s content to a file, you can optionally specify a delegate object to receive these messages.

## Topics

### Writing Image Attachments

- [writeImage:withSceneDocumentURL:originalImageURL:](scnsceneexportdelegate/write%28__withscenedocumenturl_originalimageurl_%29.md): Tells the delegate to export an image attached to a scene.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Exporting a Scene File

- [writeToURL:options:delegate:progressHandler:](scnscene/write%28to_options_delegate_progresshandler_%29.md): Exports the scene and its contents to a file at the specified URL.
