> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phprojectchangerequest](https://developer.apple.com/documentation/photos/phprojectchangerequest)

# PHProjectChangeRequest (Swift)

**Framework:** Photos  
**Kind:** Class  
**Availability:** macOS 10.13+

A request to change asset data in a Photos project extension.

## Declaration

```swift
class PHProjectChangeRequest
```

<a id="overview"></a>

## Overview

Make a project change request to alter a project’s title or metadata. Respond to project change requests by updating your user interface as assets are added, modified, or removed.

## Topics

### Creating Change Requests

- [init(project:)](phprojectchangerequest/init%28project_%29.md): Creates a change request around the specified project.
- [title](phprojectchangerequest/title.md): The title of the change request.
- [projectExtensionData](phprojectchangerequest/projectextensiondata.md): Compressed project-specific data to use in the change request.

### Responding to Change Requests

- [setProjectPreviewImage(\_:)](phprojectchangerequest/setprojectpreviewimage%28__%29.md): Updates the project preview in Photos.
- [setKeyAsset(\_:)](phprojectchangerequest/setkeyasset%28__%29.md): Deprecated. Sets the key asset representing the project.

### Removing Assets

- [removeAssets(\_:)](phprojectchangerequest/removeassets%28__%29-n825.md): Removes assets of a certain type from the collection.
- [removeAssets(\_:)](phprojectchangerequest/removeassets%28__%29-3ytt3.md): Removes assets based on a fetch result.

## Relationships

### Inherits From

- [PHChangeRequest](phchangerequest.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Classes

- [PHProject](phproject.md): A representation of a Photos app project extension.

# PHProjectChangeRequest (Objective-C)

**Framework:** Photos  
**Kind:** Class  
**Availability:** macOS 10.13+

A request to change asset data in a Photos project extension.

## Declaration

```objectivec
@interface PHProjectChangeRequest : PHChangeRequest
```

<a id="overview"></a>

## Overview

Make a project change request to alter a project’s title or metadata. Respond to project change requests by updating your user interface as assets are added, modified, or removed.

## Topics

### Creating Change Requests

- [initWithProject:](phprojectchangerequest/init%28project_%29.md): Creates a change request around the specified project.
- [title](phprojectchangerequest/title.md): The title of the change request.
- [projectExtensionData](phprojectchangerequest/projectextensiondata.md): Compressed project-specific data to use in the change request.

### Responding to Change Requests

- [setProjectPreviewImage:](phprojectchangerequest/setprojectpreviewimage%28__%29.md): Updates the project preview in Photos.
- [setKeyAsset:](phprojectchangerequest/setkeyasset%28__%29.md): Deprecated. Sets the key asset representing the project.

### Removing Assets

- [removeAssets:](https://developer.apple.com/documentation/photos/phprojectchangerequest/removeassets:): Removes the specified assets from the project.

## Relationships

### Inherits From

- [PHChangeRequest](phchangerequest.md)

## See Also

### Classes

- [PHProject](phproject.md): A representation of a Photos app project extension.
