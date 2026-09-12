> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/capturedroom/export(to:exportoptions:)](https://developer.apple.com/documentation/roomplan/capturedroom/export(to:exportoptions:))

# export(to:exportOptions:)

**Framework:** RoomPlan  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Produces a 3D asset from the captured room.

## Declaration

```swift
func export(to url: URL, exportOptions: CapturedRoom.USDExportOptions = .mesh) throws
```

## Parameters

- `url`: A location that the captured room exports to.
- `exportOptions`: Options that determine the export’s data format.

<a id="discussion"></a>

## Discussion

The file format of the output is Universal Scene Description (USD).

> **Tip**

> Before iOS 17.4, the first letter of the USD file name needs to be a character other than a number.

## See Also

### Generating a USDZ file

- [export(to:metadataURL:modelProvider:exportOptions:)](export%28to_metadataurl_modelprovider_exportoptions_%29.md): Produces a 3D asset from the captured room with the given metadata output URL and model provider.
- [CapturedRoom.USDExportOptions](usdexportoptions.md): Options that determine the underlying data format of a scan export.
- [CapturedRoom.ModelProvider](modelprovider.md): A structure that assigns detailed 3D models to captured objects for an export.
