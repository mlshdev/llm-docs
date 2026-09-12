> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdstage/exportflattened(to:)-98kpc](https://developer.apple.com/documentation/usdkit/usdstage/exportflattened(to:)-98kpc)

# exportFlattened(to:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Exports the stage as a flattened USD file.

## Declaration

```swift
func exportFlattened(to url: URL) throws
```

<a id="discussion"></a>

## Discussion

Composes all layers into a single layer and writes it to the specified location. The output format is determined by the file extension.

> **Important**

> Flattening is destructive. Layer structure, composition arcs, and variant selections are resolved into the output. To preserve layer structure, use `exportPackage(to:options:)` instead.

Throws an error if the extension is not `.usda`, `.usdc`, or `.usd`.

## See Also

### Exporting the stage

- [exportPackage(to:options:)](exportpackage%28to_options_%29-6s2wk.md): Packages the stage into a USDZ archive.
- [exportPackage(to:options:)](exportpackage%28to_options_%29-2x7yr.md): Packages the stage into a USDZ archive.
- [exportFlattened(to:)](exportflattened%28to_%29-6717d.md): Exports the stage as a flattened USD file.
- [USDStage.ExportOptions](exportoptions.md): Options for packaging a stage into a USDZ file.
