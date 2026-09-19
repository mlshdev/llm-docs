> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/intentauthenticationpolicy/alwaysallowed

# IntentAuthenticationPolicy.alwaysAllowed

**Framework:** App Intents  
**Kind:** Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A policy that allows the app intent to run at any time, including when the device is locked.

## Declaration

```swift
case alwaysAllowed
```

## See Also

### Authentication policies

- [IntentAuthenticationPolicy.requiresAuthentication](requiresauthentication.md): A policy that requires authentication before running the app intent.
- [IntentAuthenticationPolicy.requiresLocalDeviceAuthentication](requireslocaldeviceauthentication.md): A policy that requires the person to unlock the device running the intent.
