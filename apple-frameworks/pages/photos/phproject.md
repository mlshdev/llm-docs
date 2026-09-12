> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phproject](https://developer.apple.com/documentation/photos/phproject)

# PHProject (Swift)

**Framework:** Photos  
**Kind:** Class  
**Availability:** macOS 10.13+

A representation of a Photos app project extension.

## Declaration

```swift
class PHProject
```

<a id="overview"></a>

## Overview

This class represents the project when extended from macOS Photos. Projects can have the following types:

- Book
- Calendar
- Card
- Prints
- Slideshow
- Wall decor

Users create projects by selecting one or more assets, right-clicking the selection, and grouping the assets, much like an album collection. Your app treats the project as a separate entity, represented as a [PHProject](phproject.md).

## Topics

### Project Extension Properties

- [hasProjectPreview](phproject/hasprojectpreview.md): A property that indicates whether a project preview was previously set.
- [projectExtensionData](phproject/projectextensiondata.md): Data associated with the project extension.

## Relationships

### Inherits From

- [PHAssetCollection](phassetcollection.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Classes

- [PHProjectChangeRequest](phprojectchangerequest.md): A request to change asset data in a Photos project extension.

# PHProject (Objective-C)

**Framework:** Photos  
**Kind:** Class  
**Availability:** macOS 10.13+

A representation of a Photos app project extension.

## Declaration

```objectivec
@interface PHProject : PHAssetCollection
```

<a id="overview"></a>

## Overview

This class represents the project when extended from macOS Photos. Projects can have the following types:

- Book
- Calendar
- Card
- Prints
- Slideshow
- Wall decor

Users create projects by selecting one or more assets, right-clicking the selection, and grouping the assets, much like an album collection. Your app treats the project as a separate entity, represented as a [PHProject](phproject.md).

## Topics

### Project Extension Properties

- [hasProjectPreview](phproject/hasprojectpreview.md): A property that indicates whether a project preview was previously set.
- [projectExtensionData](phproject/projectextensiondata.md): Data associated with the project extension.

## Relationships

### Inherits From

- [PHAssetCollection](phassetcollection.md)

## See Also

### Classes

- [PHProjectChangeRequest](phprojectchangerequest.md): A request to change asset data in a Photos project extension.
