> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appmigrationkit/appmigrationtester/devicetodeviceexportproperties/sizeestimate

# sizeEstimate

**Framework:** AppMigrationKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

The size estimate provided by the app extension.

## Declaration

```swift
let sizeEstimate: Int
```

## See Also

### Inspecting data size properties

- [uncompressedBytes](uncompressedbytes.md): The number of uncompressed bytes written to the exporter.
- [compressedBytes](compressedbytes.md): The number of compressed bytes written to the migration infrastructure, if the extension uses compression.
