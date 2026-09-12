> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnscenesourcestatus](https://developer.apple.com/documentation/scenekit/scnscenesourcestatus)

# SCNSceneSourceStatus (Swift)

**Framework:** SceneKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Constants identifying phases of SceneKit’s scene loading process, used in a [SCNSceneSourceStatusHandler](scnscenesourcestatushandler.md) block.

## Declaration

```swift
enum SCNSceneSourceStatus
```

<a id="overview"></a>

## Overview

Use the information provided by these constants to describe the scene loading process in your app’s user interface. Because this enumeration leaves room for more detailed progress reports, you should compare the `status` parameter of a [SCNSceneSourceStatusHandler](scnscenesourcestatushandler.md) block against these values for ordering, not for equality, as in the following example handler:

```objc
SCNSceneSourceStatusHandler myHandler =
^(float totalProgress, SCNSceneSourceStatus status, NSError *error, BOOL *stop) {
    if (status >= SCNSceneSourceStatusProcessing && status < SCNSceneSourceStatusComplete)
        myProgressLabel.stringValue = @"Processing";
};
```

## Topics

### Constants

- [SCNSceneSourceStatus.error](scnscenesourcestatus/error.md): An error occurred when SceneKit attempted to load the scene.
- [SCNSceneSourceStatus.parsing](scnscenesourcestatus/parsing.md): SceneKit has begun deserializing the source file.
- [SCNSceneSourceStatus.validating](scnscenesourcestatus/validating.md): SceneKit has begun validating the scene file’s format.
- [SCNSceneSourceStatus.processing](scnscenesourcestatus/processing.md): SceneKit has begun generating scene graph objects from the scene file’s contents.
- [SCNSceneSourceStatus.complete](scnscenesourcestatus/complete.md): SceneKit has successfully finished loading the scene file’s contents.

### Initializers

- [init(rawValue:)](scnscenesourcestatus/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [SCNSceneSource.LoadingOption](scnscenesource/loadingoption.md): Options for creating scene sources and loading the scenes they contain.
- [Scene Source Properties](scene-source-properties.md): The metadata properties associated with a scene file, used by the [property(forKey:)](scnscenesource/property%28forkey_%29.md) method.
- [Contributor Keys](contributor-keys.md): Metadata identifying the user and authoring tool that created a scene file, used with the [SCNSceneSourceAssetContributorsKey](scnscenesourceassetcontributorskey.md) key.
- [Unit Dictionary Keys](unit-dictionary-keys.md): Metadata describing the unit of measurement used in a scene file, used with the [SCNSceneSourceAssetUnitKey](scnscenesourceassetunitkey.md) key.
- [Scene Loading Error Keys](scene-loading-error-keys.md)
- [Scene File Consistency Error Keys](scene-file-consistency-error-keys.md): Keys identifying errors found during a scene-file-format consistency check.
- [Scene File Consistency Check Error Codes](1573761-scene-file-consistency-check-err.md): Error codes that identify errors found during a scene-file-format consistency check.
- [SCNSceneSourceStatusHandler](scnscenesourcestatushandler.md): The signature for the block that SceneKit calls periodically to report progress while loading a scene.

# SCNSceneSourceStatus (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants identifying phases of SceneKit’s scene loading process, used in a [SCNSceneSourceStatusHandler](scnscenesourcestatushandler.md) block.

## Declaration

```objectivec
enum SCNSceneSourceStatus : NSInteger;
```

<a id="overview"></a>

## Overview

Use the information provided by these constants to describe the scene loading process in your app’s user interface. Because this enumeration leaves room for more detailed progress reports, you should compare the `status` parameter of a [SCNSceneSourceStatusHandler](scnscenesourcestatushandler.md) block against these values for ordering, not for equality, as in the following example handler:

```objc
SCNSceneSourceStatusHandler myHandler =
^(float totalProgress, SCNSceneSourceStatus status, NSError *error, BOOL *stop) {
    if (status >= SCNSceneSourceStatusProcessing && status < SCNSceneSourceStatusComplete)
        myProgressLabel.stringValue = @"Processing";
};
```

## Topics

### Constants

- [SCNSceneSourceStatusError](scnscenesourcestatus/error.md): An error occurred when SceneKit attempted to load the scene.
- [SCNSceneSourceStatusParsing](scnscenesourcestatus/parsing.md): SceneKit has begun deserializing the source file.
- [SCNSceneSourceStatusValidating](scnscenesourcestatus/validating.md): SceneKit has begun validating the scene file’s format.
- [SCNSceneSourceStatusProcessing](scnscenesourcestatus/processing.md): SceneKit has begun generating scene graph objects from the scene file’s contents.
- [SCNSceneSourceStatusComplete](scnscenesourcestatus/complete.md): SceneKit has successfully finished loading the scene file’s contents.

## See Also

### Constants

- [SCNSceneSourceLoadingOption](scnscenesource/loadingoption.md): Options for creating scene sources and loading the scenes they contain.
- [Scene Source Properties](scene-source-properties.md): The metadata properties associated with a scene file, used by the [propertyForKey:](scnscenesource/property%28forkey_%29.md) method.
- [Contributor Keys](contributor-keys.md): Metadata identifying the user and authoring tool that created a scene file, used with the [SCNSceneSourceAssetContributorsKey](scnscenesourceassetcontributorskey.md) key.
- [Unit Dictionary Keys](unit-dictionary-keys.md): Metadata describing the unit of measurement used in a scene file, used with the [SCNSceneSourceAssetUnitKey](scnscenesourceassetunitkey.md) key.
- [Scene Loading Error Keys](scene-loading-error-keys.md)
- [Scene File Consistency Error Keys](scene-file-consistency-error-keys.md): Keys identifying errors found during a scene-file-format consistency check.
- [Scene File Consistency Check Error Codes](1573761-scene-file-consistency-check-err.md): Error codes that identify errors found during a scene-file-format consistency check.
- [SCNSceneSourceStatusHandler](scnscenesourcestatushandler.md): The signature for the block that SceneKit calls periodically to report progress while loading a scene.
