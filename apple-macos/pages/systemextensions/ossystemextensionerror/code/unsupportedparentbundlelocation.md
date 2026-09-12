> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/systemextensions/ossystemextensionerror/code/unsupportedparentbundlelocation](https://developer.apple.com/documentation/systemextensions/ossystemextensionerror/code/unsupportedparentbundlelocation)

# OSSystemExtensionError.Code.unsupportedParentBundleLocation (Swift)

**Framework:** System Extensions  
**Kind:** Case  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 10.15+

An error code that indicates the extension’s parent app isn’t in a valid location for activation.

## Declaration

```swift
case unsupportedParentBundleLocation
```

<a id="Discussion"></a>

## Discussion

The expected location of a driver extension is in the `Contents/Library/SystemExtensions` directory of a macOS app. The app itself must be in one of the system’s `Applications` directories.

## See Also

### Error Codes

- [OSSystemExtensionError.Code.unknown](unknown.md): An error code that indicates an unknown error occurred.
- [OSSystemExtensionError.Code.missingEntitlement](missingentitlement.md): An error code that indicates the system extension lacks a required entitlement.
- [OSSystemExtensionError.Code.extensionNotFound](extensionnotfound.md): An error code that indicates the manager can’t find the system extension.
- [OSSystemExtensionError.Code.extensionMissingIdentifier](extensionmissingidentifier.md): An error code that indicates the extension identifier is missing.
- [OSSystemExtensionError.Code.duplicateExtensionIdentifer](duplicateextensionidentifer.md): An error code that indicates the extension identifier duplicates an existing identifier.
- [OSSystemExtensionError.Code.unknownExtensionCategory](unknownextensioncategory.md): An error code that indicates the extension manager can’t recognize the extension’s category identifier.
- [OSSystemExtensionError.Code.codeSignatureInvalid](codesignatureinvalid.md): An error code that indicates the extension’s signature is invalid.
- [OSSystemExtensionError.Code.validationFailed](validationfailed.md): An error code that indicates the manager can’t validate the extension.
- [OSSystemExtensionError.Code.forbiddenBySystemPolicy](forbiddenbysystempolicy.md): An error code that indicates the system policy prohibits activating the system extension.
- [OSSystemExtensionError.Code.requestCanceled](requestcanceled.md): An error code that indicates the system extension manager request was canceled.
- [OSSystemExtensionError.Code.requestSuperseded](requestsuperseded.md): An error code that indicates the system extension request failed because the system already has a pending request for the same identifier.
- [OSSystemExtensionError.Code.authorizationRequired](authorizationrequired.md): An error code that indicates the system was unable to obtain the proper authorization.

# OSSystemExtensionErrorUnsupportedParentBundleLocation (Objective-C)

**Framework:** System Extensions  
**Kind:** Enumeration Case  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 10.15+

An error code that indicates the extension’s parent app isn’t in a valid location for activation.

## Declaration

```objectivec
OSSystemExtensionErrorUnsupportedParentBundleLocation
```

<a id="Discussion"></a>

## Discussion

The expected location of a driver extension is in the `Contents/Library/SystemExtensions` directory of a macOS app. The app itself must be in one of the system’s `Applications` directories.

## See Also

### Error Codes

- [OSSystemExtensionErrorUnknown](unknown.md): An error code that indicates an unknown error occurred.
- [OSSystemExtensionErrorMissingEntitlement](missingentitlement.md): An error code that indicates the system extension lacks a required entitlement.
- [OSSystemExtensionErrorExtensionNotFound](extensionnotfound.md): An error code that indicates the manager can’t find the system extension.
- [OSSystemExtensionErrorExtensionMissingIdentifier](extensionmissingidentifier.md): An error code that indicates the extension identifier is missing.
- [OSSystemExtensionErrorDuplicateExtensionIdentifer](duplicateextensionidentifer.md): An error code that indicates the extension identifier duplicates an existing identifier.
- [OSSystemExtensionErrorUnknownExtensionCategory](unknownextensioncategory.md): An error code that indicates the extension manager can’t recognize the extension’s category identifier.
- [OSSystemExtensionErrorCodeSignatureInvalid](codesignatureinvalid.md): An error code that indicates the extension’s signature is invalid.
- [OSSystemExtensionErrorValidationFailed](validationfailed.md): An error code that indicates the manager can’t validate the extension.
- [OSSystemExtensionErrorForbiddenBySystemPolicy](forbiddenbysystempolicy.md): An error code that indicates the system policy prohibits activating the system extension.
- [OSSystemExtensionErrorRequestCanceled](requestcanceled.md): An error code that indicates the system extension manager request was canceled.
- [OSSystemExtensionErrorRequestSuperseded](requestsuperseded.md): An error code that indicates the system extension request failed because the system already has a pending request for the same identifier.
- [OSSystemExtensionErrorAuthorizationRequired](authorizationrequired.md): An error code that indicates the system was unable to obtain the proper authorization.
