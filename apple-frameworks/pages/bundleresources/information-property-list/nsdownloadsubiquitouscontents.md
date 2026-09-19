> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/bundleresources/information-property-list/nsdownloadsubiquitouscontents

# NSDownloadsUbiquitousContents

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** macOS 11.0+

A Boolean value that indicates whether the system should download documents before handing them over to the app.

## Details

`NSDownloadsUbiquitousContents`

<a id="Discussion"></a>

## Discussion

By default, the system displays the download progress. Set the value to `YES` if you want your app to display a custom download progress indicator instead.

## See Also

### Documents

- [CFBundleDocumentTypes](cfbundledocumenttypes.md): The document types supported by the bundle.
- [UISupportsDocumentBrowser](uisupportsdocumentbrowser.md): A Boolean value indicating whether the app is a document-based app.
- [LSSupportsOpeningDocumentsInPlace](lssupportsopeningdocumentsinplace.md): A Boolean value indicating whether the app may open the original document from a file provider, rather than a copy of the document.
