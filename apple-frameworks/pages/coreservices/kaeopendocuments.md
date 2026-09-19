> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/kaeopendocuments

# kAEOpenDocuments

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```swift
var kAEOpenDocuments: AEEventID { get }
```

<a id="discussion"></a>

## Discussion

Event that provides an application with a list of documents to open. Sent, for example, when a selects one or more documents for your application in the Finder and double-clicks them.

See also the constant `keyAESearchText` in the enum [keyAEPropData](https://developer.apple.com/documentation/applicationservices/apple_event_manager/keyaepropdata).
