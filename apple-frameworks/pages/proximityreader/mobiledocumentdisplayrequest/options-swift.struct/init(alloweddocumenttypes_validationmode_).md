> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/mobiledocumentdisplayrequest/options-swift.struct/init(alloweddocumenttypes:validationmode:)](https://developer.apple.com/documentation/proximityreader/mobiledocumentdisplayrequest/options-swift.struct/init(alloweddocumenttypes:validationmode:))

# init(allowedDocumentTypes:validationMode:)

**Framework:** ProximityReader  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Creates a mobile document reader display request options type.

## Declaration

```swift
init(allowedDocumentTypes: [MobileDocumentDisplayRequest.Options.DocumentType] = [], validationMode: MobileDocumentDisplayRequest.Options.ValidationMode = .check)
```

## Parameters

- `allowedDocumentTypes`: The allowed document types of the mobile document request.
- `validationMode`: The validation mode of the mobile document request.
