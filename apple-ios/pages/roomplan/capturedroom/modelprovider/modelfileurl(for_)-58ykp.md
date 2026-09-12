> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/capturedroom/modelprovider/modelfileurl(for:)-58ykp](https://developer.apple.com/documentation/roomplan/capturedroom/modelprovider/modelfileurl(for:)-58ykp)

# modelFileURL(for:)

**Framework:** RoomPlan  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

Provides a URL to the 3D model for the given attributes.

## Declaration

```swift
func modelFileURL(for attributes: [any CapturedRoomAttribute]) throws -> URL?
```

## Parameters

- `attributes`: An array of attributes that represent criteria for the model-URL query.

<a id="return-value"></a>

## Return Value

The 3D model that the app associates to the given object’s attributes via [setModelFileURL(\_:for:)](setmodelfileurl%28__for_%29-8xio.md). If no 3D model URL associates to the given attribute combination, this function returns `nil`.

<a id="discussion"></a>

## Discussion

In error conditions, this function throws:

- [CapturedRoom.ModelProvider.Error.nonExistingFile(url:)](error/nonexistingfile%28url_%29.md) if a 3D model doesn’t exist at the given URL.
- [CapturedRoom.ModelProvider.Error.attributeCombinationNotSupported](error/attributecombinationnotsupported.md) if no object category supports all of the argument attributes.

Query [supportedCombinations](../object/category-swift.enum/supportedcombinations.md) to check the attributes that an object category supports.

## See Also

### Managing models

- [modelFileURLs](modelfileurls.md): An array of URLs to 3D models for all categories and attributes.
- [modelFileURL(for:)](modelfileurl%28for_%29-9irqx.md): Provides a URL to the 3D model for the given category.
- [modelFileURL(for:)](modelfileurl%28for_%29-96rvb.md): Provides a URL to a 3D model based on the given object’s attributes or category.
- [setModelFileURL(\_:for:)](setmodelfileurl%28__for_%29-8xio.md): Associates a URL to the given attributes.
- [setModelFileURL(\_:for:)](setmodelfileurl%28__for_%29-4law9.md): Associates a URL to the given object category.
