> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdstage/exportpackage(to:options:)-6s2wk](https://developer.apple.com/documentation/usdkit/usdstage/exportpackage(to:options:)-6s2wk)

# exportPackage(to:options:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Packages the stage into a USDZ archive.

## Declaration

```swift
func exportPackage(to url: URL, options: USDStage.ExportOptions = []) throws
```

<a id="discussion"></a>

## Discussion

The stage and its referenced assets are bundled into a USDZ file. Layer structure is preserved — this operation does not flatten.

Throws an error if the extension is not `.usdz`.

## See Also

### Exporting the stage

- [exportPackage(to:options:)](exportpackage%28to_options_%29-2x7yr.md): Packages the stage into a USDZ archive.
- [exportFlattened(to:)](exportflattened%28to_%29-98kpc.md): Exports the stage as a flattened USD file.
- [exportFlattened(to:)](exportflattened%28to_%29-6717d.md): Exports the stage as a flattened USD file.
- [USDStage.ExportOptions](exportoptions.md): Options for packaging a stage into a USDZ file.
