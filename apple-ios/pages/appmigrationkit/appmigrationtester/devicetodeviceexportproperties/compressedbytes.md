> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/appmigrationkit/appmigrationtester/devicetodeviceexportproperties/compressedbytes](https://developer.apple.com/documentation/appmigrationkit/appmigrationtester/devicetodeviceexportproperties/compressedbytes)

# compressedBytes

**Framework:** AppMigrationKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

The number of compressed bytes written to the migration infrastructure, if the extension uses compression.

## Declaration

```swift
let compressedBytes: Int?
```

<a id="discussion"></a>

## Discussion

Use this information in testing to determine if your extension might benefit from data compression during migration.

If the extension doesn’t use compression, this property is `nil`.

## See Also

### Inspecting data size properties

- [uncompressedBytes](uncompressedbytes.md): The number of uncompressed bytes written to the exporter.
- [sizeEstimate](sizeestimate.md): The size estimate provided by the app extension.
