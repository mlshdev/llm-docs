> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/systemextensions/ossystemextensionerror/unsupportedparentbundlelocation](https://developer.apple.com/documentation/systemextensions/ossystemextensionerror/unsupportedparentbundlelocation)

# unsupportedParentBundleLocation

**Framework:** System Extensions  
**Kind:** Type Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 10.15+

An error code that indicates the extension’s parent app isn’t in a valid location for activation.

## Declaration

```swift
static var unsupportedParentBundleLocation: OSSystemExtensionError.Code { get }
```

<a id="Discussion"></a>

## Discussion

The expected location of a driver extension is in the `Contents/Library/SystemExtensions` directory of a macOS app. The app itself must be in one of the system’s `Applications` directories.

## See Also

### Error Codes

- [OSSystemExtensionError.Code](code.md): Error codes for system extensions.
- [unknown](unknown.md): An error code that indicates an unknown error occurred.
- [missingEntitlement](missingentitlement.md): An error code that indicates the system extension lacks a required entitlement.
- [extensionNotFound](extensionnotfound.md): An error code that indicates the manager can’t find the system extension.
- [extensionMissingIdentifier](extensionmissingidentifier.md): An error code that indicates the extension identifier is missing.
- [duplicateExtensionIdentifer](duplicateextensionidentifer.md): An error code that indicates the extension identifier duplicates an existing identifier.
- [unknownExtensionCategory](unknownextensioncategory.md): An error code that indicates the extension manager can’t recognize the extension’s category identifier.
- [codeSignatureInvalid](codesignatureinvalid.md): An error code that indicates the extension’s signature is invalid.
- [validationFailed](validationfailed.md): An error code that indicates the manager can’t validate the extension.
- [forbiddenBySystemPolicy](forbiddenbysystempolicy.md): An error code that indicates the system policy prohibits activating the system extension.
- [requestCanceled](requestcanceled.md): An error code that indicates the system extension manager request was canceled.
- [requestSuperseded](requestsuperseded.md): An error code that indicates the system extension request failed because the system already has a pending request for the same identifier.
- [authorizationRequired](authorizationrequired.md): An error code that indicates the system was unable to obtain the proper authorization.
