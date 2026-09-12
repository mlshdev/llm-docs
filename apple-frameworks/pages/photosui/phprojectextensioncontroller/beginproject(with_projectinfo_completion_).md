> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phprojectextensioncontroller/beginproject(with:projectinfo:completion:)](https://developer.apple.com/documentation/photosui/phprojectextensioncontroller/beginproject(with:projectinfo:completion:))

# beginProject(with:projectInfo:completion:) (Swift)

**Framework:** PhotosUI  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

Provides an opportunity to customize the initial state when the user creates a project using the extension.

## Declaration

```swift
func beginProject(with extensionContext: PHProjectExtensionContext, projectInfo: PHProjectInfo, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func beginProject(with extensionContext: PHProjectExtensionContext, projectInfo: PHProjectInfo) async throws
```

## Parameters

- `extensionContext`: The extension context with access to the project assets.
- `projectInfo`: Information about the project the extension is called on.
- `completion`: A closure with code you provide that runs on completion.

## See Also

### Tracking the Project Extension Life Cycle

- [finishProject(completionHandler:)](finishproject%28completionhandler_%29.md): Provides an opportunity to perform cleanup when a user switches away from the project or terminates the extension.
- [resumeProject(with:completion:)](resumeproject%28with_completion_%29.md): Provides an opportunity to restore or refresh the user interface when the user returns to a previously created project.
- [typeDescriptionDataSource(for:invalidator:)](typedescriptiondatasource%28for_invalidator_%29.md): Fetches the type description data source to provide the user with more information about the project extension category.

# beginProjectWithExtensionContext:projectInfo:completion: (Objective-C)

**Framework:** PhotosUI  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

Provides an opportunity to customize the initial state when the user creates a project using the extension.

## Declaration

```objectivec
- (void) beginProjectWithExtensionContext:(PHProjectExtensionContext *) extensionContext projectInfo:(PHProjectInfo *) projectInfo completion:(void (^)(NSError *)) completion;
```

## Parameters

- `extensionContext`: The extension context with access to the project assets.
- `projectInfo`: Information about the project the extension is called on.
- `completion`: A closure with code you provide that runs on completion.

## See Also

### Tracking the Project Extension Life Cycle

- [finishProjectWithCompletionHandler:](finishproject%28completionhandler_%29.md): Provides an opportunity to perform cleanup when a user switches away from the project or terminates the extension.
- [resumeProjectWithExtensionContext:completion:](resumeproject%28with_completion_%29.md): Provides an opportunity to restore or refresh the user interface when the user returns to a previously created project.
- [typeDescriptionDataSourceForCategory:invalidator:](typedescriptiondatasource%28for_invalidator_%29.md): Fetches the type description data source to provide the user with more information about the project extension category.
