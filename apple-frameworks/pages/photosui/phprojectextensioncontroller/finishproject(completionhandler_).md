> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phprojectextensioncontroller/finishproject(completionhandler:)](https://developer.apple.com/documentation/photosui/phprojectextensioncontroller/finishproject(completionhandler:))

# finishProject(completionHandler:) (Swift)

**Framework:** PhotosUI  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

Provides an opportunity to perform cleanup when a user switches away from the project or terminates the extension.

## Declaration

```swift
func finishProject(completionHandler completion: @escaping @Sendable () -> Void)
```

```swift
func finishProject() async
```

## Parameters

- `completion`: A completion handler to execute before exiting the extension.

## See Also

### Tracking the Project Extension Life Cycle

- [beginProject(with:projectInfo:completion:)](beginproject%28with_projectinfo_completion_%29.md): Provides an opportunity to customize the initial state when the user creates a project using the extension.
- [resumeProject(with:completion:)](resumeproject%28with_completion_%29.md): Provides an opportunity to restore or refresh the user interface when the user returns to a previously created project.
- [typeDescriptionDataSource(for:invalidator:)](typedescriptiondatasource%28for_invalidator_%29.md): Fetches the type description data source to provide the user with more information about the project extension category.

# finishProjectWithCompletionHandler: (Objective-C)

**Framework:** PhotosUI  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

Provides an opportunity to perform cleanup when a user switches away from the project or terminates the extension.

## Declaration

```objectivec
- (void) finishProjectWithCompletionHandler:(void (^)()) completion;
```

## Parameters

- `completion`: A completion handler to execute before exiting the extension.

## See Also

### Tracking the Project Extension Life Cycle

- [beginProjectWithExtensionContext:projectInfo:completion:](beginproject%28with_projectinfo_completion_%29.md): Provides an opportunity to customize the initial state when the user creates a project using the extension.
- [resumeProjectWithExtensionContext:completion:](resumeproject%28with_completion_%29.md): Provides an opportunity to restore or refresh the user interface when the user returns to a previously created project.
- [typeDescriptionDataSourceForCategory:invalidator:](typedescriptiondatasource%28for_invalidator_%29.md): Fetches the type description data source to provide the user with more information about the project extension category.
