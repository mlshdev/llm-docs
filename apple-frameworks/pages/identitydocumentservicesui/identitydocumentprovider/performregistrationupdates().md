> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitydocumentservicesui/identitydocumentprovider/performregistrationupdates()](https://developer.apple.com/documentation/identitydocumentservicesui/identitydocumentprovider/performregistrationupdates())

# performRegistrationUpdates()

**Framework:** IdentityDocumentServicesUI  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

A function that allows the current app to perform updates to document registrations to ensure consistency with documents stored in the app.

## Declaration

```swift
@MainActor func performRegistrationUpdates() async
```

<a id="Discussion"></a>

## Discussion

The system calls this function periodically, including when the person enables the current app to provide documents.
