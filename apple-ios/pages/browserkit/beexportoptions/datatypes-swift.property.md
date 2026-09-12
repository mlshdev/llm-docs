> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/browserkit/beexportoptions/datatypes-swift.property](https://developer.apple.com/documentation/browserkit/beexportoptions/datatypes-swift.property)

# dataTypes (Swift)

**Framework:** BrowserKit  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+

The set of data types to include in the export.

## Declaration

```swift
var dataTypes: BEExportOptions.DataTypes { get }
```

## Mentioned In

- [Transferring browsing data to another browser](../transferring-browsing-data-to-another-browser.md)

<a id="discussion"></a>

## Discussion

This property identifies the person’s choice of data to include in the export, as specified in the framework-provided sheet.

## See Also

### Configuring export preferences

- [BEExportOptions.DataTypes](datatypes-swift.struct.md): Types of exported browser data.
- [exportToFiles](exporttofiles.md): A Boolean value that indicates whether to export to files.

# dataTypes (Objective-C)

**Framework:** BrowserKit  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+

The set of data types to include in the export.

## Declaration

```objectivec
@property (nonatomic, readonly) BEExportDataTypes dataTypes;
```

## Mentioned In

- [Transferring browsing data to another browser](../transferring-browsing-data-to-another-browser.md)

<a id="discussion"></a>

## Discussion

This property identifies the person’s choice of data to include in the export, as specified in the framework-provided sheet.

## See Also

### Configuring export preferences

- [BEExportDataTypes](datatypes-swift.struct.md): Types of exported browser data.
- [exportToFiles](exporttofiles.md): A Boolean value that indicates whether to export to files.
