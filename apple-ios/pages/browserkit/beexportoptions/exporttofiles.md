> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/browserkit/beexportoptions/exporttofiles](https://developer.apple.com/documentation/browserkit/beexportoptions/exporttofiles)

# exportToFiles (Swift)

**Framework:** BrowserKit  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+

A Boolean value that indicates whether to export to files.

## Declaration

```swift
var exportToFiles: Bool { get }
```

## Mentioned In

- [Transferring browsing data to another browser](../transferring-browsing-data-to-another-browser.md)

<a id="discussion"></a>

## Discussion

If the value of this property is `false`, call [exportBrowserData(\_:)](../bebrowserdataexportmanager/exportbrowserdata%28__%29.md) to send the browser data directly to the browser that the person chooses in the browsing-data transfer sheet.

If the value of this property is `true`, the system cancels the browser-to-browser data exchange. Instead of streaming export data through [exportBrowserData(\_:)](../bebrowserdataexportmanager/exportbrowserdata%28__%29.md), export the browsing data to disk using a file format of your choosing.

## See Also

### Configuring export preferences

- [dataTypes](datatypes-swift.property.md): The set of data types to include in the export.
- [BEExportOptions.DataTypes](datatypes-swift.struct.md): Types of exported browser data.

# exportToFiles (Objective-C)

**Framework:** BrowserKit  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+

A Boolean value that indicates whether to export to files.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL exportToFiles;
```

## Mentioned In

- [Transferring browsing data to another browser](../transferring-browsing-data-to-another-browser.md)

<a id="discussion"></a>

## Discussion

If the value of this property is `false`, call [exportBrowserData(\_:)](../bebrowserdataexportmanager/exportbrowserdata%28__%29.md) to send the browser data directly to the browser that the person chooses in the browsing-data transfer sheet.

If the value of this property is `true`, the system cancels the browser-to-browser data exchange. Instead of streaming export data through [exportBrowserData(\_:)](../bebrowserdataexportmanager/exportbrowserdata%28__%29.md), export the browsing data to disk using a file format of your choosing.

## See Also

### Configuring export preferences

- [dataTypes](datatypes-swift.property.md): The set of data types to include in the export.
- [BEExportDataTypes](datatypes-swift.struct.md): Types of exported browser data.
