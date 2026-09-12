> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/capturedstructure/export(to:metadataurl:modelprovider:exportoptions:)](https://developer.apple.com/documentation/roomplan/capturedstructure/export(to:metadataurl:modelprovider:exportoptions:))

# export(to:metadataURL:modelProvider:exportOptions:)

**Framework:** RoomPlan  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

Produces a 3D asset from the captured structure.

## Declaration

```swift
func export(to url: URL, metadataURL: URL? = nil, modelProvider: CapturedStructure.ModelProvider? = nil, exportOptions: CapturedStructure.USDExportOptions = .mesh) throws
```

## Parameters

- `url`: A location that the captured structure exports to.
- `metadataURL`: A location that the captured room metadata exports to.
- `modelProvider`: A collection of mappings of object categories and attributes to 3D model URLs.
- `exportOptions`: Options that determine the export’s data format.

<a id="discussion"></a>

## Discussion

The file format of the output is Universal Scene Description (USD).

> **Tip**

> Before iOS 17.4, the first letter of the USD file name needs to be a character other than a number.

## See Also

### Generating a USDZ file

- [CapturedStructure.USDExportOptions](usdexportoptions.md): The type a captured structure uses to configure exports.
- [CapturedStructure.ModelProvider](modelprovider.md): The type a captured structure uses to output sophisticated 3D models.
