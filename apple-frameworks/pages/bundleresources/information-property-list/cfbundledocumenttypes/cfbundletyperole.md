> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/cfbundledocumenttypes/cfbundletyperole](https://developer.apple.com/documentation/bundleresources/information-property-list/cfbundledocumenttypes/cfbundletyperole)

# CFBundleTypeRole

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The app’s role with respect to the document type.

## Details

`CFBundleTypeRole`

## Possible Values

- `Editor`:
- `Viewer`:
- `Shell`:
- `QLGenerator`:
- `None`:

## See Also

### Property List Keys

- [CFBundleTypeIconFile](cfbundletypeiconfile.md): The icon to associate with the document type.
- [CFBundleTypeName](cfbundletypename.md): The abstract name for the document type.
- [LSHandlerRank](lshandlerrank.md): The ranking of this app among apps that declare themselves as editors or viewers of the given file type.
- [LSItemContentTypes](lsitemcontenttypes.md): The document file types the app supports.
- [LSTypeIsPackage](lstypeispackage.md): A Boolean value indicating whether the document is distributed as a bundle.
- [NSDocumentClass](nsdocumentclass.md): The subclass used to create instances of this document.
- [NSExportableTypes](nsexportabletypes.md): The file types that this document can be exported to.
