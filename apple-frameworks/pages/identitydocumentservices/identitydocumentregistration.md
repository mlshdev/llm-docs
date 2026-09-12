> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitydocumentservices/identitydocumentregistration](https://developer.apple.com/documentation/identitydocumentservices/identitydocumentregistration)

# IdentityDocumentRegistration

**Framework:** IdentityDocumentServices  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

A protocol that defines an identity document registration.

## Declaration

```swift
protocol IdentityDocumentRegistration : Sendable
```

<a id="Discussion"></a>

## Discussion

Each kind of document format needs its own concrete type that conforms to this protocol.

## Topics

### Instance Properties

- [documentIdentifier](identitydocumentregistration/documentidentifier.md): An identifier that uniquely refers to the required document.

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [MobileDocumentRegistration](mobiledocumentregistration.md)

## See Also

### Registering as an identity document provider

- [IdentityDocumentProviderRegistrationStore](identitydocumentproviderregistrationstore.md): A store that notifies the system which documents an app has available for presentment.
- [MobileDocumentRegistration](mobiledocumentregistration.md): A type you use to register mobile documents.
