> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/roomplan/capturedstructure/modelprovider

# CapturedStructure.ModelProvider

**Framework:** RoomPlan  
**Kind:** Type Alias  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

The type a captured structure uses to output sophisticated 3D models.

## Declaration

```swift
typealias ModelProvider = CapturedRoom.ModelProvider
```

## See Also

### Generating a USDZ file

- [export(to:metadataURL:modelProvider:exportOptions:)](export%28to_metadataurl_modelprovider_exportoptions_%29.md): Produces a 3D asset from the captured structure.
- [CapturedStructure.USDExportOptions](usdexportoptions.md): The type a captured structure uses to configure exports.
