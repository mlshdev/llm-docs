> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/capturedroom/modelprovider/setmodelfileurl(_:for:)-8xio](https://developer.apple.com/documentation/roomplan/capturedroom/modelprovider/setmodelfileurl(_:for:)-8xio)

# setModelFileURL(\_:for:)

**Framework:** RoomPlan  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

Associates a URL to the given attributes.

## Declaration

```swift
mutating func setModelFileURL(_ url: URL?, for attributes: [any CapturedRoomAttribute]) throws
```

## Parameters

- `url`: A URL to a 3D model.
- `attributes`: An array of attributes that represents a unique combination to which to associate the URL.

<a id="discussion"></a>

## Discussion

In error conditions, this function throws:

- [CapturedRoom.ModelProvider.Error.nonExistingFile(url:)](error/nonexistingfile%28url_%29.md) if a 3D model doesn’t exist at the given URL.
- [CapturedRoom.ModelProvider.Error.attributeCombinationNotSupported](error/attributecombinationnotsupported.md) if no object category supports all of the argument attributes.

Query [supportedCombinations](../object/category-swift.enum/supportedcombinations.md) to check the attributes that a category supports.

## See Also

### Managing models

- [modelFileURLs](modelfileurls.md): An array of URLs to 3D models for all categories and attributes.
- [modelFileURL(for:)](modelfileurl%28for_%29-9irqx.md): Provides a URL to the 3D model for the given category.
- [modelFileURL(for:)](modelfileurl%28for_%29-96rvb.md): Provides a URL to a 3D model based on the given object’s attributes or category.
- [modelFileURL(for:)](modelfileurl%28for_%29-58ykp.md): Provides a URL to the 3D model for the given attributes.
- [setModelFileURL(\_:for:)](setmodelfileurl%28__for_%29-4law9.md): Associates a URL to the given object category.
