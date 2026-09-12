> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpage/exported(as:)](https://developer.apple.com/documentation/webkit/webpage/exported(as:))

# exported(as:)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Using the type’s `Transferable` conformance implementation, exports a value as binary data, optionally with a specified configuration for that type of data.

## Declaration

```swift
nonisolated final func exported(as representation: WebPage.ExportedContentConfiguration) async throws -> Data
```

## Parameters

- `representation`: A configuration for a representation for a specific type of data with optional customizable properties.

<a id="return-value"></a>

## Return Value

The data with the specified representation type.

<a id="discussion"></a>

## Discussion

For example, you can export a 100 pt by 100 pt region of a webpage as a PDF, and allow it to have a transparent background:

```swift
let page = WebPage()
// Load web content and wait for navigation to complete.

let square = CGRect(x: 0, y: 0, width: 100, height: 100)
let pdf = try await page.exported(as: .pdf(region: .rect(square), allowTransparentBackground: true))
```

If no configuration is needed, use the `Transferable` conformance of [WebPage](../webpage.md) directly:

```swift
let page = WebPage()
// Load web content and wait for navigation to complete.

let pdf = try await page.exported(as: .pdf)
```

> **Throws**

> An error if the specified representation cannot be created from the page.

## See Also

### Exporting webpage content

- [WebPage.ExportedContentConfiguration](exportedcontentconfiguration.md): A specialized configuration of a specific exportable type that can have specific properties unique to the content type.
