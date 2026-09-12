> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phprojectsectioncontent](https://developer.apple.com/documentation/photosui/phprojectsectioncontent)

# PHProjectSectionContent (Swift)

**Framework:** PhotosUI  
**Kind:** Class  
**Availability:** macOS 10.13+

An object containing section elements and layout information for a single level of curation.

## Declaration

```swift
class PHProjectSectionContent
```

<a id="overview"></a>

## Overview

A section content object contains suggested layout information for every element at a specific level of curation within a [PHProjectSection](phprojectsection.md). A single section can provide multiple content objects, but only one is used at a time, depending on the level of curation and the amount of content detail.

## Topics

### Determining Content Properties

- [elements](phprojectsectioncontent/elements.md): An array of asset, text, or journal entry elements contained in the content.
- [numberOfColumns](phprojectsectioncontent/numberofcolumns.md): The number of columns if section content is displayed in a grid layout.
- [aspectRatio](phprojectsectioncontent/aspectratio.md): The aspect ratio of the full content layout, defined as width over height.
- [cloudAssetIdentifiers](phprojectsectioncontent/cloudassetidentifiers.md): An array containing all cloud asset identifiers referenced in the content.
- [backgroundColor](phprojectsectioncontent/backgroundcolor.md): The background color of the section content when created from an Apple Print Product.

### Initializers

- [init(coder:)](phprojectsectioncontent/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Determining Section Contents

- [title](phprojectsection/title.md): The optional section title.
- [sectionContents](phprojectsection/sectioncontents.md): An array containing PHProjectionSessionContent objects.

# PHProjectSectionContent (Objective-C)

**Framework:** PhotosUI  
**Kind:** Class  
**Availability:** macOS 10.13+

An object containing section elements and layout information for a single level of curation.

## Declaration

```objectivec
@interface PHProjectSectionContent : NSObject
```

<a id="overview"></a>

## Overview

A section content object contains suggested layout information for every element at a specific level of curation within a [PHProjectSection](phprojectsection.md). A single section can provide multiple content objects, but only one is used at a time, depending on the level of curation and the amount of content detail.

## Topics

### Determining Content Properties

- [elements](phprojectsectioncontent/elements.md): An array of asset, text, or journal entry elements contained in the content.
- [numberOfColumns](phprojectsectioncontent/numberofcolumns.md): The number of columns if section content is displayed in a grid layout.
- [aspectRatio](phprojectsectioncontent/aspectratio.md): The aspect ratio of the full content layout, defined as width over height.
- [cloudAssetIdentifiers](phprojectsectioncontent/cloudassetidentifiers.md): An array containing all cloud asset identifiers referenced in the content.
- [backgroundColor](phprojectsectioncontent/backgroundcolor.md): The background color of the section content when created from an Apple Print Product.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Determining Section Contents

- [title](phprojectsection/title.md): The optional section title.
- [sectionContents](phprojectsection/sectioncontents.md): An array containing PHProjectionSessionContent objects.
