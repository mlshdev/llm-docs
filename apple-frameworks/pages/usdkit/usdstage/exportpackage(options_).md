> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usdkit/usdstage/exportpackage(options:)

# exportPackage(options:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Packages the stage into a USDZ archive and returns it as in-memory data.

## Declaration

```swift
func exportPackage(options: USDStage.ExportOptions = []) throws -> Data
```

<a id="discussion"></a>

## Discussion

The stage and its referenced assets are bundled into a USDZ archive in memory. Layer structure is preserved - this operation does not flatten.
