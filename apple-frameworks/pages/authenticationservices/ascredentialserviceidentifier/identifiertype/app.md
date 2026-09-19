> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/ascredentialserviceidentifier/identifiertype/app

# ASCredentialServiceIdentifier.IdentifierType.app (Swift)

**Framework:** Authentication Services  
**Kind:** Case  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 26.2+ · visionOS 26.2+

The service identifier represents an App ID. When a service identifier of this type is provided to your extension for saving a password, the ASCredentialServiceIdentifier object will have a non-nil `displayName` property that contains a user friendly name for the app.

## Declaration

```swift
case app
```

# ASCredentialServiceIdentifierTypeApp (Objective-C)

**Framework:** Authentication Services  
**Kind:** Enumeration Case  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 26.2+ · visionOS 26.2+

The service identifier represents an App ID. When a service identifier of this type is provided to your extension for saving a password, the ASCredentialServiceIdentifier object will have a non-nil `displayName` property that contains a user friendly name for the app.

## Declaration

```objectivec
ASCredentialServiceIdentifierTypeApp
```
