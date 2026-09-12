> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/errorcodeplatformssorequired/details-data.dictionary](https://developer.apple.com/documentation/devicemanagement/errorcodeplatformssorequired/details-data.dictionary)

# ErrorCodePlatformSSORequired.Details

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** macOS 26.0+

A dictionary that contains additional data about the error code.

## Declaration

```
object ErrorCodePlatformSSORequired.Details
```

## Properties

- `AuthURL` — `string` (required): The URL the device uses to create an `ASWebAuthenticationSession` to trigger Platform SSO authentication, once the profile and app are installed.
- `Package` — `ErrorCodePlatformSSORequired.Details.Package` (required): A dictionary that specifies the package that the device uses to install an app with the SSO app extension used for Platform SSO.
- `ProfileURL` — `string` (required): The URL of the profile containing an [ExtensibleSingleSignOn](../extensiblesinglesignon.md) profile payload that the device uses to configure the SSO extension for Platform SSO.

## Topics

### Objects

- [ErrorCodePlatformSSORequired.Details.Package](details-data.dictionary/package-data.dictionary.md): A dictionary that specifies the package that the device uses to install an app with the SSO app extension used for Platform SSO.
