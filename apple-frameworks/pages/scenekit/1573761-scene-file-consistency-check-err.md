> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/1573761-scene-file-consistency-check-err](https://developer.apple.com/documentation/scenekit/1573761-scene-file-consistency-check-err)

# Scene File Consistency Check Error Codes (Swift)

**Framework:** SceneKit  
**Kind:** API Collection

Error codes that identify errors found during a scene-file-format consistency check.

<a id="overview"></a>

## Overview

If you specify [true](https://developer.apple.com/documentation/swift/true) for the [checkConsistency](scnscenesource/loadingoption/checkconsistency.md) when creating or loading from a scene source, SceneKit verifies the scene file against the specification for its file format. SceneKit reports any format verification issues in an [NSError](../foundation/nserror.md) object whose [code](../foundation/nserror/code.md) property is one of these values.

For more details about the location and nature of any format validation errors, see the [SCNDetailedErrorsKey](scndetailederrorskey.md) key in the error’s [userInfo](../foundation/nserror/userinfo.md) dictionary, and the keys listed in [Scene File Consistency Error Keys](scene-file-consistency-error-keys.md).

## Topics

### Constants

- [SCNConsistencyInvalidURIError](scnconsistencyinvalidurierror.md): The scene file contains an invalid URI (or URL).
- [SCNConsistencyInvalidCountError](scnconsistencyinvalidcounterror.md): The scene file contains an invalid number of scenes.
- [SCNConsistencyInvalidArgumentError](scnconsistencyinvalidargumenterror.md): An element in the scene file contains an invalid option for one of its attributes.
- [SCNConsistencyMissingElementError](scnconsistencymissingelementerror.md): A required element in the scene file is missing.
- [SCNConsistencyMissingAttributeError](scnconsistencymissingattributeerror.md): An element in the scene file is missing a required attribute.
- [SCNConsistencyXMLSchemaValidationError](scnconsistencyxmlschemavalidationerror.md): The format of the scene file does not match its XML schema definition.

## See Also

### Constants

- [SCNSceneSource.LoadingOption](scnscenesource/loadingoption.md): Options for creating scene sources and loading the scenes they contain.
- [Scene Source Properties](scene-source-properties.md): The metadata properties associated with a scene file, used by the [property(forKey:)](scnscenesource/property%28forkey_%29.md) method.
- [Contributor Keys](contributor-keys.md): Metadata identifying the user and authoring tool that created a scene file, used with the [SCNSceneSourceAssetContributorsKey](scnscenesourceassetcontributorskey.md) key.
- [Unit Dictionary Keys](unit-dictionary-keys.md): Metadata describing the unit of measurement used in a scene file, used with the [SCNSceneSourceAssetUnitKey](scnscenesourceassetunitkey.md) key.
- [Scene Loading Error Keys](scene-loading-error-keys.md)
- [Scene File Consistency Error Keys](scene-file-consistency-error-keys.md): Keys identifying errors found during a scene-file-format consistency check.
- [SCNSceneSourceStatusHandler](scnscenesourcestatushandler.md): The signature for the block that SceneKit calls periodically to report progress while loading a scene.
- [SCNSceneSourceStatus](scnscenesourcestatus.md): Constants identifying phases of SceneKit’s scene loading process, used in a [SCNSceneSourceStatusHandler](scnscenesourcestatushandler.md) block.

# Scene File Consistency Check Error Codes (Objective-C)

**Framework:** SceneKit  
**Kind:** API Collection

Error codes that identify errors found during a scene-file-format consistency check.

<a id="overview"></a>

## Overview

If you specify [true](https://developer.apple.com/documentation/swift/true) for the [SCNSceneSourceCheckConsistencyKey](scnscenesource/loadingoption/checkconsistency.md) when creating or loading from a scene source, SceneKit verifies the scene file against the specification for its file format. SceneKit reports any format verification issues in an [NSError](../foundation/nserror.md) object whose [code](../foundation/nserror/code.md) property is one of these values.

For more details about the location and nature of any format validation errors, see the [SCNDetailedErrorsKey](scndetailederrorskey.md) key in the error’s [userInfo](../foundation/nserror/userinfo.md) dictionary, and the keys listed in [Scene File Consistency Error Keys](scene-file-consistency-error-keys.md).

## Topics

### Constants

- [SCNConsistencyInvalidURIError](scnconsistencyinvalidurierror.md): The scene file contains an invalid URI (or URL).
- [SCNConsistencyInvalidCountError](scnconsistencyinvalidcounterror.md): The scene file contains an invalid number of scenes.
- [SCNConsistencyInvalidArgumentError](scnconsistencyinvalidargumenterror.md): An element in the scene file contains an invalid option for one of its attributes.
- [SCNConsistencyMissingElementError](scnconsistencymissingelementerror.md): A required element in the scene file is missing.
- [SCNConsistencyMissingAttributeError](scnconsistencymissingattributeerror.md): An element in the scene file is missing a required attribute.
- [SCNConsistencyXMLSchemaValidationError](scnconsistencyxmlschemavalidationerror.md): The format of the scene file does not match its XML schema definition.

## See Also

### Constants

- [SCNSceneSourceLoadingOption](scnscenesource/loadingoption.md): Options for creating scene sources and loading the scenes they contain.
- [Scene Source Properties](scene-source-properties.md): The metadata properties associated with a scene file, used by the [propertyForKey:](scnscenesource/property%28forkey_%29.md) method.
- [Contributor Keys](contributor-keys.md): Metadata identifying the user and authoring tool that created a scene file, used with the [SCNSceneSourceAssetContributorsKey](scnscenesourceassetcontributorskey.md) key.
- [Unit Dictionary Keys](unit-dictionary-keys.md): Metadata describing the unit of measurement used in a scene file, used with the [SCNSceneSourceAssetUnitKey](scnscenesourceassetunitkey.md) key.
- [Scene Loading Error Keys](scene-loading-error-keys.md)
- [Scene File Consistency Error Keys](scene-file-consistency-error-keys.md): Keys identifying errors found during a scene-file-format consistency check.
- [SCNSceneSourceStatusHandler](scnscenesourcestatushandler.md): The signature for the block that SceneKit calls periodically to report progress while loading a scene.
- [SCNSceneSourceStatus](scnscenesourcestatus.md): Constants identifying phases of SceneKit’s scene loading process, used in a [SCNSceneSourceStatusHandler](scnscenesourcestatushandler.md) block.
