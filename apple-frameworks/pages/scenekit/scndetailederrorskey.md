> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scndetailederrorskey](https://developer.apple.com/documentation/scenekit/scndetailederrorskey)

# SCNDetailedErrorsKey (Swift)

**Framework:** SceneKit  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Detailed error information from SceneKit’s scene file loading process.

## Declaration

```swift
let SCNDetailedErrorsKey: String
```

<a id="Discussion"></a>

## Discussion

If SceneKit reports an error when creating or loading from a scene source, the [userInfo](../foundation/nserror/userinfo.md) dictionary of the returned [NSError](../foundation/nserror.md) object may contain this key, whose value is an array of dictionaries (each containing one or more of the keys listed in [Scene File Consistency Error Keys](scene-file-consistency-error-keys.md)) providing details about the location of the error in the scene file.

If you specify [true](https://developer.apple.com/documentation/swift/true) for the [checkConsistency](scnscenesource/loadingoption/checkconsistency.md) option when creating or loading from a scene source, SceneKit verifies the scene file against the specification for its file format. Verifying a scene file can result in additional error reports for violations of the file format specification that do not prevent SceneKit from loading the file.

# SCNDetailedErrorsKey (Objective-C)

**Framework:** SceneKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Detailed error information from SceneKit’s scene file loading process.

## Declaration

```objectivec
extern NSString * const SCNDetailedErrorsKey;
```

<a id="Discussion"></a>

## Discussion

If SceneKit reports an error when creating or loading from a scene source, the [userInfo](../foundation/nserror/userinfo.md) dictionary of the returned [NSError](../foundation/nserror.md) object may contain this key, whose value is an array of dictionaries (each containing one or more of the keys listed in [Scene File Consistency Error Keys](scene-file-consistency-error-keys.md)) providing details about the location of the error in the scene file.

If you specify [true](https://developer.apple.com/documentation/swift/true) for the [SCNSceneSourceCheckConsistencyKey](scnscenesource/loadingoption/checkconsistency.md) option when creating or loading from a scene source, SceneKit verifies the scene file against the specification for its file format. Verifying a scene file can result in additional error reports for violations of the file format specification that do not prevent SceneKit from loading the file.
