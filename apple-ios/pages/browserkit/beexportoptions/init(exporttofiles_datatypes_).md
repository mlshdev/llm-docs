> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/browserkit/beexportoptions/init(exporttofiles:datatypes:)](https://developer.apple.com/documentation/browserkit/beexportoptions/init(exporttofiles:datatypes:))

# init(exportToFiles:dataTypes:) (Swift)

**Framework:** BrowserKit  
**Kind:** Initializer  
**Availability:** iOS 26.4+ · iPadOS 26.4+

Initializes exports with file information and data types.

## Declaration

```swift
init(exportToFiles: Bool, dataTypes: BEExportOptions.DataTypes)
```

## Parameters

- `exportToFiles`: A Boolean value that indicates whether to export to files.
- `dataTypes`: The set of data types to include in the export.

## See Also

### Creating export options

- [init(coder:)](init%28coder_%29.md): Initializes exports from a decoder.

# initWithExportToFiles:dataTypes: (Objective-C)

**Framework:** BrowserKit  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+

Initializes exports with file information and data types.

## Declaration

```objectivec
- (instancetype) initWithExportToFiles:(BOOL) exportToFiles dataTypes:(BEExportDataTypes) dataTypes;
```

## Parameters

- `exportToFiles`: A Boolean value that indicates whether to export to files.
- `dataTypes`: The set of data types to include in the export.
