> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phprojectextensioncontroller/typedescriptiondatasource(for:invalidator:)](https://developer.apple.com/documentation/photosui/phprojectextensioncontroller/typedescriptiondatasource(for:invalidator:))

# typeDescriptionDataSource(for:invalidator:) (Swift)

**Framework:** PhotosUI  
**Kind:** Instance Method  
**Availability:** macOS 10.14+

Fetches the type description data source to provide the user with more information about the project extension category.

## Declaration

```swift
optional func typeDescriptionDataSource(for category: PHProjectCategory, invalidator: any PHProjectTypeDescriptionInvalidator) -> any PHProjectTypeDescriptionDataSource
```

## Parameters

- `category`: The category in which the user selected the extension.
- `invalidator`: An object used to invalidate information returned from the data source.

<a id="Discussion"></a>

## Discussion

Extensions can define any number of project types to support. The types appear to users as choices in the Photos app upon initial project creation. To enable this entry point into the extension, include the key/value pair `PHProjectExtensionDefinesProjectTypes`: `YES` in the Xcode project’s `Info.plist` file. Once enabled, Photos asks your extension for its list of supported project types. The option the user selects is passed to the extension as an attribute of [PHProjectInfo](../phprojectinfo.md).

## See Also

### Tracking the Project Extension Life Cycle

- [beginProject(with:projectInfo:completion:)](beginproject%28with_projectinfo_completion_%29.md): Provides an opportunity to customize the initial state when the user creates a project using the extension.
- [finishProject(completionHandler:)](finishproject%28completionhandler_%29.md): Provides an opportunity to perform cleanup when a user switches away from the project or terminates the extension.
- [resumeProject(with:completion:)](resumeproject%28with_completion_%29.md): Provides an opportunity to restore or refresh the user interface when the user returns to a previously created project.

# typeDescriptionDataSourceForCategory:invalidator: (Objective-C)

**Framework:** PhotosUI  
**Kind:** Instance Method  
**Availability:** macOS 10.14+

Fetches the type description data source to provide the user with more information about the project extension category.

## Declaration

```objectivec
- (id<PHProjectTypeDescriptionDataSource>) typeDescriptionDataSourceForCategory:(PHProjectCategory) category invalidator:(id<PHProjectTypeDescriptionInvalidator>) invalidator;
```

## Parameters

- `category`: The category in which the user selected the extension.
- `invalidator`: An object used to invalidate information returned from the data source.

<a id="Discussion"></a>

## Discussion

Extensions can define any number of project types to support. The types appear to users as choices in the Photos app upon initial project creation. To enable this entry point into the extension, include the key/value pair `PHProjectExtensionDefinesProjectTypes`: `YES` in the Xcode project’s `Info.plist` file. Once enabled, Photos asks your extension for its list of supported project types. The option the user selects is passed to the extension as an attribute of [PHProjectInfo](../phprojectinfo.md).

## See Also

### Tracking the Project Extension Life Cycle

- [beginProjectWithExtensionContext:projectInfo:completion:](beginproject%28with_projectinfo_completion_%29.md): Provides an opportunity to customize the initial state when the user creates a project using the extension.
- [finishProjectWithCompletionHandler:](finishproject%28completionhandler_%29.md): Provides an opportunity to perform cleanup when a user switches away from the project or terminates the extension.
- [resumeProjectWithExtensionContext:completion:](resumeproject%28with_completion_%29.md): Provides an opportunity to restore or refresh the user interface when the user returns to a previously created project.
