> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/capturedroom/export(to:metadataurl:modelprovider:exportoptions:)](https://developer.apple.com/documentation/roomplan/capturedroom/export(to:metadataurl:modelprovider:exportoptions:))

# export(to:metadataURL:modelProvider:exportOptions:)

**Framework:** RoomPlan  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

Produces a 3D asset from the captured room with the given metadata output URL and model provider.

## Declaration

```swift
func export(to url: URL, metadataURL: URL? = nil, modelProvider: CapturedRoom.ModelProvider? = nil, exportOptions: CapturedRoom.USDExportOptions = .mesh) throws
```

## Parameters

- `url`: A location that the captured room exports to.
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

- [export(to:exportOptions:)](export%28to_exportoptions_%29.md): Produces a 3D asset from the captured room.
- [CapturedRoom.USDExportOptions](usdexportoptions.md): Options that determine the underlying data format of a scan export.
- [CapturedRoom.ModelProvider](modelprovider.md): A structure that assigns detailed 3D models to captured objects for an export.
