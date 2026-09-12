> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnscenesource](https://developer.apple.com/documentation/scenekit/scnscenesource)

# SCNSceneSource (Swift)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

An object that manages the data-reading tasks associated with loading scene contents from a file or data.

## Declaration

```swift
class SCNSceneSource
```

## Mentioned In

- [Animating SceneKit Content](animating-scenekit-content.md)

<a id="overview"></a>

## Overview

You can also use a scene source to examine the contents of a scene file or to selectively extract certain elements of a scene without keeping the entire scene and all the assets it contains.

SceneKit can read scene contents from a file in a supported format, or from an [NSData](../foundation/nsdata.md) object holding the contents of such a file. Supported formats include the following:

| Format | Filename Extension | Supported in |
| --- | --- | --- |
| Digital Asset Exchange | `.dae` | macOS 10.8 and later |
| Alembic | `.abc` | macOS 10.10 and later |
| SceneKit compressed scene | `.dae` or `.abc` | macOS 10.10 and later ![](https://developer.apple.com/images/com.apple.scenekit/spacer.png) iOS 8.0 and later |
| SceneKit archive | `.scn` | macOS 10.10 and later ![](https://developer.apple.com/images/com.apple.scenekit/spacer.png) iOS 8.0 and later |

When you include a scene file in DAE or Alembic format in your Xcode project, Xcode automatically converts the file to SceneKit’s compressed scene format for use in the built app. The compressed file retains its original `.dae` or `.abc` extension.

The [SCNSceneSource](scnscenesource.md) class can also load SceneKit archive files, which you create in the Xcode scene editor or programmatically by using the [NSKeyedArchiver](../foundation/nskeyedarchiver.md) class to serialize an [SCNScene](scnscene.md) object and the scene graph it contains.

> **Note**

>  For best results, place scene files that ship in your app bundle in a folder with the `.scnassets` extension, and place image files referenced as textures from those scenes in an Asset Catalog. Xcode then optimizes the scene and texture resources for best performance on each target device, and prepares your texture resources for delivery features such as App Thinning and On-Demand Resources.

## Topics

### Creating a Scene Source

- [init(url:options:)](scnscenesource/init%28url_options_%29-rw0y.md): Initializes a scene source for reading the scene graph from a specified file.
- [init(data:options:)](scnscenesource/init%28data_options_%29.md): Initializes a scene source for reading the scene graph contained in an `NSData` object.

### Loading a Complete Scene

- [scene(options:statusHandler:)](scnscenesource/scene%28options_statushandler_%29.md): Loads the entire scene graph from the scene source and calls the specified block to provide progress information.
- [scene(options:)](scnscenesource/scene%28options_%29.md): Instantiates a scene from the scene source with the specified options.

### Loading and Inspecting Scene Elements

- [identifiersOfEntries(withClass:)](scnscenesource/identifiersofentries%28withclass_%29.md): Returns the identifiers for all objects in the scene source of the specified class.
- [entryWithIdentifier(\_:withClass:)](scnscenesource/entrywithidentifier%28__withclass_%29.md): Deprecated. Loads and returns a specific object in the scene source.
- [entries(passingTest:)](scnscenesource/entries%28passingtest_%29.md): Loads and returns all objects in the scene source that pass the test in a given block.

### Getting Information about the Scene

- [url](scnscenesource/url.md): The URL identifying the file from which the scene source was created.
- [data](scnscenesource/data.md): The data object from which the scene source loads scene content.
- [property(forKey:)](scnscenesource/property%28forkey_%29.md): Returns metadata about the scene.

### Constants

- [SCNSceneSource.LoadingOption](scnscenesource/loadingoption.md): Options for creating scene sources and loading the scenes they contain.
- [Scene Source Properties](scene-source-properties.md): The metadata properties associated with a scene file, used by the [property(forKey:)](scnscenesource/property%28forkey_%29.md) method.
- [Contributor Keys](contributor-keys.md): Metadata identifying the user and authoring tool that created a scene file, used with the [SCNSceneSourceAssetContributorsKey](scnscenesourceassetcontributorskey.md) key.
- [Unit Dictionary Keys](unit-dictionary-keys.md): Metadata describing the unit of measurement used in a scene file, used with the [SCNSceneSourceAssetUnitKey](scnscenesourceassetunitkey.md) key.
- [Scene Loading Error Keys](scene-loading-error-keys.md)
- [Scene File Consistency Error Keys](scene-file-consistency-error-keys.md): Keys identifying errors found during a scene-file-format consistency check.
- [Scene File Consistency Check Error Codes](1573761-scene-file-consistency-check-err.md): Error codes that identify errors found during a scene-file-format consistency check.
- [SCNSceneSourceStatusHandler](scnscenesourcestatushandler.md): The signature for the block that SceneKit calls periodically to report progress while loading a scene.
- [SCNSceneSourceStatus](scnscenesourcestatus.md): Constants identifying phases of SceneKit’s scene loading process, used in a [SCNSceneSourceStatusHandler](scnscenesourcestatushandler.md) block.

### Initializers

- [init(URL:options:)](scnscenesource/init%28url_options_%29-46vsm.md)
- [init(URL:options:)](scnscenesource/init%28url_options_%29-5xjuk.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# SCNSceneSource (Objective-C)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An object that manages the data-reading tasks associated with loading scene contents from a file or data.

## Declaration

```objectivec
@interface SCNSceneSource : NSObject
```

## Mentioned In

- [Animating SceneKit Content](animating-scenekit-content.md)

<a id="overview"></a>

## Overview

You can also use a scene source to examine the contents of a scene file or to selectively extract certain elements of a scene without keeping the entire scene and all the assets it contains.

SceneKit can read scene contents from a file in a supported format, or from an [NSData](../foundation/nsdata.md) object holding the contents of such a file. Supported formats include the following:

| Format | Filename Extension | Supported in |
| --- | --- | --- |
| Digital Asset Exchange | `.dae` | macOS 10.8 and later |
| Alembic | `.abc` | macOS 10.10 and later |
| SceneKit compressed scene | `.dae` or `.abc` | macOS 10.10 and later ![](https://developer.apple.com/images/com.apple.scenekit/spacer.png) iOS 8.0 and later |
| SceneKit archive | `.scn` | macOS 10.10 and later ![](https://developer.apple.com/images/com.apple.scenekit/spacer.png) iOS 8.0 and later |

When you include a scene file in DAE or Alembic format in your Xcode project, Xcode automatically converts the file to SceneKit’s compressed scene format for use in the built app. The compressed file retains its original `.dae` or `.abc` extension.

The [SCNSceneSource](scnscenesource.md) class can also load SceneKit archive files, which you create in the Xcode scene editor or programmatically by using the [NSKeyedArchiver](../foundation/nskeyedarchiver.md) class to serialize an [SCNScene](scnscene.md) object and the scene graph it contains.

> **Note**

>  For best results, place scene files that ship in your app bundle in a folder with the `.scnassets` extension, and place image files referenced as textures from those scenes in an Asset Catalog. Xcode then optimizes the scene and texture resources for best performance on each target device, and prepares your texture resources for delivery features such as App Thinning and On-Demand Resources.

## Topics

### Creating a Scene Source

- [sceneSourceWithURL:options:](scnscenesource/scenesourcewithurl_options_.md): Deprecated. Creates a scene source that reads the scene graph from a specified file.
- [sceneSourceWithData:options:](scnscenesource/scenesourcewithdata_options_.md): Deprecated. Creates a scene source that reads the scene graph contained in an `NSData` object.
- [initWithURL:options:](scnscenesource/init%28url_options_%29-rw0y.md): Initializes a scene source for reading the scene graph from a specified file.
- [initWithData:options:](scnscenesource/init%28data_options_%29.md): Initializes a scene source for reading the scene graph contained in an `NSData` object.

### Loading a Complete Scene

- [sceneWithOptions:statusHandler:](scnscenesource/scene%28options_statushandler_%29.md): Loads the entire scene graph from the scene source and calls the specified block to provide progress information.
- [sceneWithOptions:error:](scnscenesource/scene%28options_%29.md): Instantiates a scene from the scene source with the specified options.

### Loading and Inspecting Scene Elements

- [identifiersOfEntriesWithClass:](scnscenesource/identifiersofentries%28withclass_%29.md): Returns the identifiers for all objects in the scene source of the specified class.
- [entryWithIdentifier:withClass:](scnscenesource/entrywithidentifier_withclass_.md): Deprecated. Loads and returns a specific object in the scene source.
- [entriesPassingTest:](scnscenesource/entries%28passingtest_%29.md): Loads and returns all objects in the scene source that pass the test in a given block.

### Getting Information about the Scene

- [url](scnscenesource/url.md): The URL identifying the file from which the scene source was created.
- [data](scnscenesource/data.md): The data object from which the scene source loads scene content.
- [propertyForKey:](scnscenesource/property%28forkey_%29.md): Returns metadata about the scene.

### Constants

- [SCNSceneSourceLoadingOption](scnscenesource/loadingoption.md): Options for creating scene sources and loading the scenes they contain.
- [Scene Source Properties](scene-source-properties.md): The metadata properties associated with a scene file, used by the [propertyForKey:](scnscenesource/property%28forkey_%29.md) method.
- [Contributor Keys](contributor-keys.md): Metadata identifying the user and authoring tool that created a scene file, used with the [SCNSceneSourceAssetContributorsKey](scnscenesourceassetcontributorskey.md) key.
- [Unit Dictionary Keys](unit-dictionary-keys.md): Metadata describing the unit of measurement used in a scene file, used with the [SCNSceneSourceAssetUnitKey](scnscenesourceassetunitkey.md) key.
- [Scene Loading Error Keys](scene-loading-error-keys.md)
- [Scene File Consistency Error Keys](scene-file-consistency-error-keys.md): Keys identifying errors found during a scene-file-format consistency check.
- [Scene File Consistency Check Error Codes](1573761-scene-file-consistency-check-err.md): Error codes that identify errors found during a scene-file-format consistency check.
- [SCNSceneSourceStatusHandler](scnscenesourcestatushandler.md): The signature for the block that SceneKit calls periodically to report progress while loading a scene.
- [SCNSceneSourceStatus](scnscenesourcestatus.md): Constants identifying phases of SceneKit’s scene loading process, used in a [SCNSceneSourceStatusHandler](scnscenesourcestatushandler.md) block.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
