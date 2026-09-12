> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phprojectextensioncontroller/supportedprojecttypes](https://developer.apple.com/documentation/photosui/phprojectextensioncontroller/supportedprojecttypes)

# supportedProjectTypes (Swift)

**Framework:** PhotosUI  
**Kind:** Instance Property  
**Availability:** macOS 10.13+ (deprecated in 10.14)

An array of project types the extension supports.

## Declaration

```swift
optional var supportedProjectTypes: [PHProjectTypeDescription] { get }
```

<a id="Discussion"></a>

## Discussion

Extensions can define any number of project types to support. The types appear to users as choices in the Photos app upon initial project creation. To enable this e ntry point into the extension, include the key/value pair `PHProjectExtensionDefinesProjectTypes`: `YES` in the Xcode project’s Info.plist. Once enabled, Photos will ask your extension for its list of supported project types. The option the user selects will be passed to the extension as an attribute of [PHProjectInfo](../phprojectinfo.md).

# supportedProjectTypes (Objective-C)

**Framework:** PhotosUI  
**Kind:** Instance Property  
**Availability:** macOS 10.13+ (deprecated in 10.14)

An array of project types the extension supports.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<PHProjectTypeDescription *> * supportedProjectTypes;
```

<a id="Discussion"></a>

## Discussion

Extensions can define any number of project types to support. The types appear to users as choices in the Photos app upon initial project creation. To enable this e ntry point into the extension, include the key/value pair `PHProjectExtensionDefinesProjectTypes`: `YES` in the Xcode project’s Info.plist. Once enabled, Photos will ask your extension for its list of supported project types. The option the user selects will be passed to the extension as an attribute of [PHProjectInfo](../phprojectinfo.md).
