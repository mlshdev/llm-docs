> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/systemextensions/ossystemextensionerror/duplicateextensionidentifer](https://developer.apple.com/documentation/systemextensions/ossystemextensionerror/duplicateextensionidentifer)

# duplicateExtensionIdentifer

**Framework:** System Extensions  
**Kind:** Type Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 10.15+

An error code that indicates the extension identifier duplicates an existing identifier.

## Declaration

```swift
static var duplicateExtensionIdentifer: OSSystemExtensionError.Code { get }
```

## See Also

### Error Codes

- [OSSystemExtensionError.Code](code.md): Error codes for system extensions.
- [unknown](unknown.md): An error code that indicates an unknown error occurred.
- [missingEntitlement](missingentitlement.md): An error code that indicates the system extension lacks a required entitlement.
- [unsupportedParentBundleLocation](unsupportedparentbundlelocation.md): An error code that indicates the extension’s parent app isn’t in a valid location for activation.
- [extensionNotFound](extensionnotfound.md): An error code that indicates the manager can’t find the system extension.
- [extensionMissingIdentifier](extensionmissingidentifier.md): An error code that indicates the extension identifier is missing.
- [unknownExtensionCategory](unknownextensioncategory.md): An error code that indicates the extension manager can’t recognize the extension’s category identifier.
- [codeSignatureInvalid](codesignatureinvalid.md): An error code that indicates the extension’s signature is invalid.
- [validationFailed](validationfailed.md): An error code that indicates the manager can’t validate the extension.
- [forbiddenBySystemPolicy](forbiddenbysystempolicy.md): An error code that indicates the system policy prohibits activating the system extension.
- [requestCanceled](requestcanceled.md): An error code that indicates the system extension manager request was canceled.
- [requestSuperseded](requestsuperseded.md): An error code that indicates the system extension request failed because the system already has a pending request for the same identifier.
- [authorizationRequired](authorizationrequired.md): An error code that indicates the system was unable to obtain the proper authorization.
