> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/systemextensions/ossystemextensionerror/code](https://developer.apple.com/documentation/systemextensions/ossystemextensionerror/code)

# OSSystemExtensionError.Code (Swift)

**Framework:** System Extensions  
**Kind:** Enumeration  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 10.15+

Error codes for system extensions.

## Declaration

```swift
enum Code
```

## Topics

### Error Codes

- [OSSystemExtensionError.Code.unknown](code/unknown.md): An error code that indicates an unknown error occurred.
- [OSSystemExtensionError.Code.missingEntitlement](code/missingentitlement.md): An error code that indicates the system extension lacks a required entitlement.
- [OSSystemExtensionError.Code.unsupportedParentBundleLocation](code/unsupportedparentbundlelocation.md): An error code that indicates the extension’s parent app isn’t in a valid location for activation.
- [OSSystemExtensionError.Code.extensionNotFound](code/extensionnotfound.md): An error code that indicates the manager can’t find the system extension.
- [OSSystemExtensionError.Code.extensionMissingIdentifier](code/extensionmissingidentifier.md): An error code that indicates the extension identifier is missing.
- [OSSystemExtensionError.Code.duplicateExtensionIdentifer](code/duplicateextensionidentifer.md): An error code that indicates the extension identifier duplicates an existing identifier.
- [OSSystemExtensionError.Code.unknownExtensionCategory](code/unknownextensioncategory.md): An error code that indicates the extension manager can’t recognize the extension’s category identifier.
- [OSSystemExtensionError.Code.codeSignatureInvalid](code/codesignatureinvalid.md): An error code that indicates the extension’s signature is invalid.
- [OSSystemExtensionError.Code.validationFailed](code/validationfailed.md): An error code that indicates the manager can’t validate the extension.
- [OSSystemExtensionError.Code.forbiddenBySystemPolicy](code/forbiddenbysystempolicy.md): An error code that indicates the system policy prohibits activating the system extension.
- [OSSystemExtensionError.Code.requestCanceled](code/requestcanceled.md): An error code that indicates the system extension manager request was canceled.
- [OSSystemExtensionError.Code.requestSuperseded](code/requestsuperseded.md): An error code that indicates the system extension request failed because the system already has a pending request for the same identifier.
- [OSSystemExtensionError.Code.authorizationRequired](code/authorizationrequired.md): An error code that indicates the system was unable to obtain the proper authorization.

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [OSSystemExtensionError](../ossystemextensionerror.md): An error that describes a failed extension manager request.
- [OSSystemExtensionErrorDomain](../ossystemextensionerrordomain.md): The error domain identifying system extension errors.

# OSSystemExtensionErrorCode (Objective-C)

**Framework:** System Extensions  
**Kind:** Enumeration  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 10.15+

Error codes for system extensions.

## Declaration

```objectivec
enum OSSystemExtensionErrorCode : NSInteger;
```

## Topics

### Error Codes

- [OSSystemExtensionErrorUnknown](code/unknown.md): An error code that indicates an unknown error occurred.
- [OSSystemExtensionErrorMissingEntitlement](code/missingentitlement.md): An error code that indicates the system extension lacks a required entitlement.
- [OSSystemExtensionErrorUnsupportedParentBundleLocation](code/unsupportedparentbundlelocation.md): An error code that indicates the extension’s parent app isn’t in a valid location for activation.
- [OSSystemExtensionErrorExtensionNotFound](code/extensionnotfound.md): An error code that indicates the manager can’t find the system extension.
- [OSSystemExtensionErrorExtensionMissingIdentifier](code/extensionmissingidentifier.md): An error code that indicates the extension identifier is missing.
- [OSSystemExtensionErrorDuplicateExtensionIdentifer](code/duplicateextensionidentifer.md): An error code that indicates the extension identifier duplicates an existing identifier.
- [OSSystemExtensionErrorUnknownExtensionCategory](code/unknownextensioncategory.md): An error code that indicates the extension manager can’t recognize the extension’s category identifier.
- [OSSystemExtensionErrorCodeSignatureInvalid](code/codesignatureinvalid.md): An error code that indicates the extension’s signature is invalid.
- [OSSystemExtensionErrorValidationFailed](code/validationfailed.md): An error code that indicates the manager can’t validate the extension.
- [OSSystemExtensionErrorForbiddenBySystemPolicy](code/forbiddenbysystempolicy.md): An error code that indicates the system policy prohibits activating the system extension.
- [OSSystemExtensionErrorRequestCanceled](code/requestcanceled.md): An error code that indicates the system extension manager request was canceled.
- [OSSystemExtensionErrorRequestSuperseded](code/requestsuperseded.md): An error code that indicates the system extension request failed because the system already has a pending request for the same identifier.
- [OSSystemExtensionErrorAuthorizationRequired](code/authorizationrequired.md): An error code that indicates the system was unable to obtain the proper authorization.

## See Also

### Errors

- [OSSystemExtensionErrorDomain](../ossystemextensionerrordomain.md): The error domain identifying system extension errors.
