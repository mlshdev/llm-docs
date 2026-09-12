> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitydocumentservices/identitydocumentproviderregistrationstore](https://developer.apple.com/documentation/identitydocumentservices/identitydocumentproviderregistrationstore)

# IdentityDocumentProviderRegistrationStore

**Framework:** IdentityDocumentServices  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

A store that notifies the system which documents an app has available for presentment.

## Declaration

```swift
actor IdentityDocumentProviderRegistrationStore
```

## Mentioned In

- [Implementing as an identity document provider](implenting-as-an-identity-document-provider.md)

<a id="Discussion"></a>

## Discussion

The system uses the information you register with this store to appropriately surface your app as an option during a presentment. When a person registers a document, the authorization UI you provide through the app’s `IdentityDocumentProvider` extension needs to handle incoming requests for that specific document. The app needs to only register documents that are active and that it can successfully present. If a document becomes inactive, you need to unregister it from the store.

> **Note**

>  This API requires the [Digital Credentials API - Mobile Document Provider](../bundleresources/entitlements/com.apple.developer.identity-document-services.document-provider.mobile-document-types.md) entitlement for online web presentment.

## Topics

### Registering and removing mobile documents

- [init()](identitydocumentproviderregistrationstore/init%28%29.md): Initializes an identity document provider registration store.
- [addRegistration(\_:)](identitydocumentproviderregistrationstore/addregistration%28__%29.md): Register a document with the system.
- [registrations](identitydocumentproviderregistrationstore/registrations.md): A list of all documents registered with the system.
- [removeRegistration(forDocumentIdentifier:)](identitydocumentproviderregistrationstore/removeregistration%28fordocumentidentifier_%29.md): Unregister a specific document with the system.

### Defining and getting the status of the mobile document

- [status](identitydocumentproviderregistrationstore/status-swift.property.md): The status of the registration store.
- [IdentityDocumentProviderRegistrationStore.Status](identitydocumentproviderregistrationstore/status-swift.enum.md): Defines a status for the registration store.

### Errors

- [IdentityDocumentProviderRegistrationStore.RegistrationError](identitydocumentproviderregistrationstore/registrationerror.md): An error type that the identity document registration store and associated types throw.

## Relationships

### Conforms To

- [Actor](https://developer.apple.com/documentation/swift/actor)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Registering as an identity document provider

- [IdentityDocumentRegistration](identitydocumentregistration.md): A protocol that defines an identity document registration.
- [MobileDocumentRegistration](mobiledocumentregistration.md): A type you use to register mobile documents.
