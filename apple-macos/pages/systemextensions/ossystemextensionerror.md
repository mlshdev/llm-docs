> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/systemextensions/ossystemextensionerror](https://developer.apple.com/documentation/systemextensions/ossystemextensionerror)

# OSSystemExtensionError

**Framework:** System Extensions  
**Kind:** Structure  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 10.15+

An error that describes a failed extension manager request.

## Declaration

```swift
struct OSSystemExtensionError
```

## Topics

### Inspecting Error Properties

- [errorDomain](ossystemextensionerror/errordomain.md): The domain of SystemExtension errors.

### Error Codes

- [OSSystemExtensionError.Code](ossystemextensionerror/code.md): Error codes for system extensions.
- [unknown](ossystemextensionerror/unknown.md): An error code that indicates an unknown error occurred.
- [missingEntitlement](ossystemextensionerror/missingentitlement.md): An error code that indicates the system extension lacks a required entitlement.
- [unsupportedParentBundleLocation](ossystemextensionerror/unsupportedparentbundlelocation.md): An error code that indicates the extension’s parent app isn’t in a valid location for activation.
- [extensionNotFound](ossystemextensionerror/extensionnotfound.md): An error code that indicates the manager can’t find the system extension.
- [extensionMissingIdentifier](ossystemextensionerror/extensionmissingidentifier.md): An error code that indicates the extension identifier is missing.
- [duplicateExtensionIdentifer](ossystemextensionerror/duplicateextensionidentifer.md): An error code that indicates the extension identifier duplicates an existing identifier.
- [unknownExtensionCategory](ossystemextensionerror/unknownextensioncategory.md): An error code that indicates the extension manager can’t recognize the extension’s category identifier.
- [codeSignatureInvalid](ossystemextensionerror/codesignatureinvalid.md): An error code that indicates the extension’s signature is invalid.
- [validationFailed](ossystemextensionerror/validationfailed.md): An error code that indicates the manager can’t validate the extension.
- [forbiddenBySystemPolicy](ossystemextensionerror/forbiddenbysystempolicy.md): An error code that indicates the system policy prohibits activating the system extension.
- [requestCanceled](ossystemextensionerror/requestcanceled.md): An error code that indicates the system extension manager request was canceled.
- [requestSuperseded](ossystemextensionerror/requestsuperseded.md): An error code that indicates the system extension request failed because the system already has a pending request for the same identifier.
- [authorizationRequired](ossystemextensionerror/authorizationrequired.md): An error code that indicates the system was unable to obtain the proper authorization.

## Relationships

### Conforms To

- [CustomNSError](https://developer.apple.com/documentation/foundation/customnserror)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [OSSystemExtensionError.Code](ossystemextensionerror/code.md): Error codes for system extensions.
- [OSSystemExtensionErrorDomain](ossystemextensionerrordomain.md): The error domain identifying system extension errors.
