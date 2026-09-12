> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdstage/object/metadatacollection](https://developer.apple.com/documentation/usdkit/usdstage/object/metadatacollection)

# USDStage.Object.MetadataCollection

**Framework:** USDKit  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A scene graph object that possesses metadata.

## Declaration

```swift
protocol MetadataCollection
```

<a id="overview"></a>

## Overview

Prims, attributes, and relationships may have associated metadata. Metadata on an object is accessed by its name, which is a [USDToken](../../usdtoken.md).

> **Important**

> Don’t declare new conformances to MetadataCollection. Only the types provided by the USDStageKit framework are valid conforming types.

## Topics

### Instance Properties

- [allAuthoredMetadata](metadatacollection/allauthoredmetadata.md): Every authored metadata value on this object.
- [allMetadata](metadatacollection/allmetadata.md): Every metadata value on this object, including fallbacks.
- [assetInfo](metadatacollection/assetinfo.md): A dictionary of asset information authored on this object.
- [customData](metadatacollection/customdata.md): A dictionary of custom data authored on this object.
- [displayName](metadatacollection/displayname.md): A non-unique display name authored on this object.
- [documentation](metadatacollection/documentation.md): A human-readable description authored on this object.
- [hasAssetInfo](metadatacollection/hasassetinfo.md): A Boolean value that indicates whether this object has asset information.
- [hasAuthoredAssetInfo](metadatacollection/hasauthoredassetinfo.md): A Boolean value that indicates whether this object has authored asset information.
- [hasAuthoredCustomData](metadatacollection/hasauthoredcustomdata.md): A Boolean value that indicates whether this object has authored custom data.
- [hasAuthoredDisplayName](metadatacollection/hasauthoreddisplayname.md): A Boolean value that indicates whether this object has an authored display name.
- [hasAuthoredDocumentation](metadatacollection/hasauthoreddocumentation.md): A Boolean value that indicates whether this object has authored documentation.
- [hasAuthoredHidden](metadatacollection/hasauthoredhidden.md): A Boolean value that indicates whether this object has an authored `isHidden` opinion.
- [hasCustomData](metadatacollection/hascustomdata.md): A Boolean value that indicates whether this object has custom data.
- [isHidden](metadatacollection/ishidden.md): A Boolean value that indicates whether this object is hidden from browsing UI.

### Instance Methods

- [assetInfoByKey(\_:)](metadatacollection/assetinfobykey%28__%29.md): Returns the asset information value at the given key path.
- [clearAssetInfo()](metadatacollection/clearassetinfo%28%29.md): Removes all authored asset information on this object.
- [clearAssetInfoByKey(\_:)](metadatacollection/clearassetinfobykey%28__%29.md): Removes the authored asset information value at the given key path.
- [clearCustomData()](metadatacollection/clearcustomdata%28%29.md): Removes all authored custom data on this object.
- [clearCustomDataByKey(\_:)](metadatacollection/clearcustomdatabykey%28__%29.md): Removes the authored custom data value at the given key path.
- [clearDisplayName()](metadatacollection/cleardisplayname%28%29.md): Removes the authored display name on this object.
- [clearDocumentation()](metadatacollection/cleardocumentation%28%29.md): Removes the authored documentation on this object.
- [clearHidden()](metadatacollection/clearhidden%28%29.md): Removes the authored `isHidden` opinion on this object.
- [clearMetadata(\_:)](metadatacollection/clearmetadata%28__%29.md): Removes the authored metadata value for the given key.
- [clearMetadata(\_:keyPath:)](metadatacollection/clearmetadata%28__keypath_%29.md): Removes the authored value at `keyPath` within the dictionary-valued metadata for the given key.
- [customDataByKey(\_:)](metadatacollection/customdatabykey%28__%29.md): Returns the custom data value at the given key path.
- [hasAssetInfoByKey(\_:)](metadatacollection/hasassetinfobykey%28__%29.md): Returns a Boolean value that indicates whether asset information exists at the given key path.
- [hasAuthoredAssetInfoByKey(\_:)](metadatacollection/hasauthoredassetinfobykey%28__%29.md): Returns a Boolean value that indicates whether authored asset information exists at the given key path.
- [hasAuthoredCustomDataByKey(\_:)](metadatacollection/hasauthoredcustomdatabykey%28__%29.md): Returns a Boolean value that indicates whether authored custom data exists at the given key path.
- [hasAuthoredMetadata(\_:)](metadatacollection/hasauthoredmetadata%28__%29.md): Returns a Boolean value that indicates whether metadata for the given key has an authored value.
- [hasAuthoredMetadata(\_:keyPath:)](metadatacollection/hasauthoredmetadata%28__keypath_%29.md): Returns a Boolean value that indicates whether the dictionary-valued metadata for the given key has an authored value at `keyPath`.
- [hasCustomDataByKey(\_:)](metadatacollection/hascustomdatabykey%28__%29.md): Returns a Boolean value that indicates whether custom data exists at the given key path.
- [hasMetadata(\_:)](metadatacollection/hasmetadata%28__%29.md): Returns a Boolean value that indicates whether metadata for the given key has a value, including its fallback.
- [hasMetadata(\_:keyPath:)](metadatacollection/hasmetadata%28__keypath_%29.md): Returns a Boolean value that indicates whether the dictionary-valued metadata for the given key has a value at `keyPath`.
- [metadata(\_:)](metadatacollection/metadata%28__%29-136hk.md): Deprecated.
- [metadata(\_:)](metadatacollection/metadata%28__%29-574ho.md): Returns the metadata value for the given key.
- [metadata(\_:)](metadatacollection/metadata%28__%29-8jz5b.md): Deprecated.
- [metadata(\_:keyPath:)](metadatacollection/metadata%28__keypath_%29-5pid3.md): Deprecated.
- [metadata(\_:keyPath:)](metadatacollection/metadata%28__keypath_%29-62uj1.md): Returns the value at `keyPath` within the dictionary-valued metadata for the given key.
- [metadata(\_:keyPath:)](metadatacollection/metadata%28__keypath_%29-8isq8.md): Deprecated.
- [setAssetInfoByKey(\_:value:)](metadatacollection/setassetinfobykey%28__value_%29.md): Sets the asset information value at the given key path.
- [setCustomDataByKey(\_:value:)](metadatacollection/setcustomdatabykey%28__value_%29.md): Modifies the custom data value at the given key path.
- [setMetadata(\_:keyPath:value:)](metadatacollection/setmetadata%28__keypath_value_%29-1ri3i.md): Deprecated.
- [setMetadata(\_:keyPath:value:)](metadatacollection/setmetadata%28__keypath_value_%29-62b48.md): Sets the value at `keyPath` within the dictionary-valued metadata for the given key.
- [setMetadata(\_:keyPath:value:)](metadatacollection/setmetadata%28__keypath_value_%29-8isk6.md): Deprecated.
- [setMetadata(\_:value:)](metadatacollection/setmetadata%28__value_%29-22f8j.md): Deprecated.
- [setMetadata(\_:value:)](metadatacollection/setmetadata%28__value_%29-8hsn7.md): Deprecated.
- [setMetadata(\_:value:)](metadatacollection/setmetadata%28__value_%29-r1j8.md): Sets the metadata value for the given key.

## Relationships

### Conforming Types

- [USDPrim](../../usdprim.md)
- [USDPrim.Attribute](../../usdprim/attribute.md)
- [USDPrim.Property](../../usdprim/property.md)
- [USDPrim.Relationship](../../usdprim/relationship.md)
- [USDStage.Object](../object.md)
