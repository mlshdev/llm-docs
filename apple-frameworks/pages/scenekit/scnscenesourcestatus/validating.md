> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnscenesourcestatus/validating](https://developer.apple.com/documentation/scenekit/scnscenesourcestatus/validating)

# SCNSceneSourceStatus.validating (Swift)

**Framework:** SceneKit  
**Kind:** Case  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

SceneKit has begun validating the scene file’s format.

## Declaration

```swift
case validating
```

<a id="Discussion"></a>

## Discussion

If you specify [true](https://developer.apple.com/documentation/swift/true) for the [checkConsistency](../scnscenesource/loadingoption/checkconsistency.md) when creating or loading from a scene source, SceneKit verifies the scene file against the specification for its file format and reports any format consistency errors.

## See Also

### Constants

- [SCNSceneSourceStatus.error](error.md): An error occurred when SceneKit attempted to load the scene.
- [SCNSceneSourceStatus.parsing](parsing.md): SceneKit has begun deserializing the source file.
- [SCNSceneSourceStatus.processing](processing.md): SceneKit has begun generating scene graph objects from the scene file’s contents.
- [SCNSceneSourceStatus.complete](complete.md): SceneKit has successfully finished loading the scene file’s contents.

# SCNSceneSourceStatusValidating (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

SceneKit has begun validating the scene file’s format.

## Declaration

```objectivec
SCNSceneSourceStatusValidating
```

<a id="Discussion"></a>

## Discussion

If you specify [true](https://developer.apple.com/documentation/swift/true) for the [SCNSceneSourceCheckConsistencyKey](../scnscenesource/loadingoption/checkconsistency.md) when creating or loading from a scene source, SceneKit verifies the scene file against the specification for its file format and reports any format consistency errors.

## See Also

### Constants

- [SCNSceneSourceStatusError](error.md): An error occurred when SceneKit attempted to load the scene.
- [SCNSceneSourceStatusParsing](parsing.md): SceneKit has begun deserializing the source file.
- [SCNSceneSourceStatusProcessing](processing.md): SceneKit has begun generating scene graph objects from the scene file’s contents.
- [SCNSceneSourceStatusComplete](complete.md): SceneKit has successfully finished loading the scene file’s contents.
