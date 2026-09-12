> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phprojectextensioncontroller/resumeproject(with:completion:)](https://developer.apple.com/documentation/photosui/phprojectextensioncontroller/resumeproject(with:completion:))

# resumeProject(with:completion:) (Swift)

**Framework:** PhotosUI  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

Provides an opportunity to restore or refresh the user interface when the user returns to a previously created project.

## Declaration

```swift
func resumeProject(with extensionContext: PHProjectExtensionContext, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func resumeProject(with extensionContext: PHProjectExtensionContext) async throws
```

## Parameters

- `extensionContext`: The extension context with access to the project assets.
- `completion`: A completion handler to execute upon returning to the extension.

## See Also

### Tracking the Project Extension Life Cycle

- [beginProject(with:projectInfo:completion:)](beginproject%28with_projectinfo_completion_%29.md): Provides an opportunity to customize the initial state when the user creates a project using the extension.
- [finishProject(completionHandler:)](finishproject%28completionhandler_%29.md): Provides an opportunity to perform cleanup when a user switches away from the project or terminates the extension.
- [typeDescriptionDataSource(for:invalidator:)](typedescriptiondatasource%28for_invalidator_%29.md): Fetches the type description data source to provide the user with more information about the project extension category.

# resumeProjectWithExtensionContext:completion: (Objective-C)

**Framework:** PhotosUI  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

Provides an opportunity to restore or refresh the user interface when the user returns to a previously created project.

## Declaration

```objectivec
- (void) resumeProjectWithExtensionContext:(PHProjectExtensionContext *) extensionContext completion:(void (^)(NSError *)) completion;
```

## Parameters

- `extensionContext`: The extension context with access to the project assets.
- `completion`: A completion handler to execute upon returning to the extension.

## See Also

### Tracking the Project Extension Life Cycle

- [beginProjectWithExtensionContext:projectInfo:completion:](beginproject%28with_projectinfo_completion_%29.md): Provides an opportunity to customize the initial state when the user creates a project using the extension.
- [finishProjectWithCompletionHandler:](finishproject%28completionhandler_%29.md): Provides an opportunity to perform cleanup when a user switches away from the project or terminates the extension.
- [typeDescriptionDataSourceForCategory:invalidator:](typedescriptiondatasource%28for_invalidator_%29.md): Fetches the type description data source to provide the user with more information about the project extension category.
