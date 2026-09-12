> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phprojectassetelement](https://developer.apple.com/documentation/photosui/phprojectassetelement)

# PHProjectAssetElement (Swift)

**Framework:** PhotosUI  
**Kind:** Class  
**Availability:** macOS 10.13+

An element that represents a media asset within project section content.

## Declaration

```swift
class PHProjectAssetElement
```

<a id="overview"></a>

## Overview

Access the underlying [PHAsset](../photos/phasset.md) by converting the provided [cloudAssetIdentifiers](phprojectsectioncontent/cloudassetidentifiers.md) to a [assetLocalIdentifier](../photos/phassetresource/assetlocalidentifier.md), then calling [fetchAssets(withLocalIdentifiers:options:)](../photos/phasset/fetchassets%28withlocalidentifiers_options_%29.md).

## Topics

### Characterizing an Asset Element

- [annotation](phprojectassetelement/annotation.md): A string annotation attached to the asset.
- [cloudAssetIdentifier](phprojectassetelement/cloudassetidentifier.md): The asset’s identifier in the cloud.
- [cropRect](phprojectassetelement/croprect.md): A rectangle defining the cropped portion of the asset.
- [regionsOfInterest](phprojectassetelement/regionsofinterest.md): An array of regions of interest in the photo asset.
- [horizontallyFlipped](phprojectassetelement/horizontallyflipped.md): A Boolean indicating whether the asset is vertically flipped.
- [verticallyFlipped](phprojectassetelement/verticallyflipped.md): A Boolean indicating whether the asset is vertically flipped.

## Relationships

### Inherits From

- [PHProjectElement](phprojectelement.md)

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

### Subclassing Project Elements

- [PHProjectTextElement](phprojecttextelement.md): An element that represents text within project section content.
- [PHProjectJournalEntryElement](phprojectjournalentryelement.md): An element that represents a journal entry within project section content.
- [PHProjectMapElement](phprojectmapelement.md): An element that represents a map within project section content.

# PHProjectAssetElement (Objective-C)

**Framework:** PhotosUI  
**Kind:** Class  
**Availability:** macOS 10.13+

An element that represents a media asset within project section content.

## Declaration

```objectivec
@interface PHProjectAssetElement : PHProjectElement
```

<a id="overview"></a>

## Overview

Access the underlying [PHAsset](../photos/phasset.md) by converting the provided [cloudAssetIdentifiers](phprojectsectioncontent/cloudassetidentifiers.md) to a [assetLocalIdentifier](../photos/phassetresource/assetlocalidentifier.md), then calling [fetchAssetsWithLocalIdentifiers:options:](../photos/phasset/fetchassets%28withlocalidentifiers_options_%29.md).

## Topics

### Characterizing an Asset Element

- [annotation](phprojectassetelement/annotation.md): A string annotation attached to the asset.
- [cloudAssetIdentifier](phprojectassetelement/cloudassetidentifier.md): The asset’s identifier in the cloud.
- [cropRect](phprojectassetelement/croprect.md): A rectangle defining the cropped portion of the asset.
- [regionsOfInterest](phprojectassetelement/regionsofinterest.md): An array of regions of interest in the photo asset.
- [horizontallyFlipped](phprojectassetelement/horizontallyflipped.md): A Boolean indicating whether the asset is vertically flipped.
- [verticallyFlipped](phprojectassetelement/verticallyflipped.md): A Boolean indicating whether the asset is vertically flipped.

## Relationships

### Inherits From

- [PHProjectElement](phprojectelement.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Subclassing Project Elements

- [PHProjectTextElement](phprojecttextelement.md): An element that represents text within project section content.
- [PHProjectJournalEntryElement](phprojectjournalentryelement.md): An element that represents a journal entry within project section content.
- [PHProjectMapElement](phprojectmapelement.md): An element that represents a map within project section content.
