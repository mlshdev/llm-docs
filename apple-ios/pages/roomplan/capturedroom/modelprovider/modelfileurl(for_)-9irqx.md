> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/capturedroom/modelprovider/modelfileurl(for:)-9irqx](https://developer.apple.com/documentation/roomplan/capturedroom/modelprovider/modelfileurl(for:)-9irqx)

# modelFileURL(for:)

**Framework:** RoomPlan  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

Provides a URL to the 3D model for the given category.

## Declaration

```swift
func modelFileURL(for category: CapturedRoom.Object.Category) throws -> URL?
```

## Parameters

- `category`: An object type that represents criteria for the model-URL query.

<a id="return-value"></a>

## Return Value

The 3D model that the app associates to the given object’s category via [setModelFileURL(\_:for:)](setmodelfileurl%28__for_%29-4law9.md); or, `nil` if no 3D model URL associates to the given category.

<a id="discussion"></a>

## Discussion

This function throws [CapturedRoom.ModelProvider.Error.nonExistingFile(url:)](error/nonexistingfile%28url_%29.md) if a 3D model doesn’t exist at the given URL.

## See Also

### Managing models

- [modelFileURLs](modelfileurls.md): An array of URLs to 3D models for all categories and attributes.
- [modelFileURL(for:)](modelfileurl%28for_%29-96rvb.md): Provides a URL to a 3D model based on the given object’s attributes or category.
- [modelFileURL(for:)](modelfileurl%28for_%29-58ykp.md): Provides a URL to the 3D model for the given attributes.
- [setModelFileURL(\_:for:)](setmodelfileurl%28__for_%29-8xio.md): Associates a URL to the given attributes.
- [setModelFileURL(\_:for:)](setmodelfileurl%28__for_%29-4law9.md): Associates a URL to the given object category.
