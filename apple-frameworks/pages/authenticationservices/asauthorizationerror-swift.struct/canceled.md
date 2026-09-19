> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/asauthorizationerror-swift.struct/canceled

# canceled

**Framework:** Authentication Services  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The user canceled the authorization attempt.

## Declaration

```swift
static var canceled: ASAuthorizationError.Code { get }
```

## See Also

### Error Codes

- [failed](failed.md): The authorization attempt failed.
- [invalidResponse](invalidresponse.md): The authorization request received an invalid response.
- [notHandled](nothandled.md): The authorization request wasn’t handled.
- [unknown](unknown.md): The authorization attempt failed for an unknown reason.
- [credentialExport](credentialexport.md): The credential export request failed.
- [credentialImport](credentialimport.md): The credential import request failed.
- [ASAuthorizationError.Code](code.md): Codes that authorization errors can have.
