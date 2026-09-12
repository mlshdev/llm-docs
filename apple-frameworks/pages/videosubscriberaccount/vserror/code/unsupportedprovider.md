> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vserror/code/unsupportedprovider](https://developer.apple.com/documentation/videosubscriberaccount/vserror/code/unsupportedprovider)

# VSError.Code.unsupportedProvider (Swift)

**Framework:** Video Subscriber Account  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS · tvOS 10.0+ · visionOS 1.0+

The system doesn’t support the user’s subscription provider.

## Declaration

```swift
case unsupportedProvider
```

## See Also

### Error Codes

- [VSError.Code.accessNotGranted](accessnotgranted.md): The user hasn’t granted access to their subscription information.
- [VSError.Code.invalidVerificationToken](invalidverificationtoken.md): The user’s subscription provider rejected the verification token that the app sent with the request.
- [VSError.Code.providerRejected](providerrejected.md): The user’s subscription provider didn’t allow the request to proceed.
- [VSError.Code.rejected](rejected.md): The system rejected the request.
- [VSError.Code.serviceTemporarilyUnavailable](servicetemporarilyunavailable.md): The request failed due to a timeout or unreachable host, but a subsequent attempt might succeed.
- [VSError.Code.unsupported](unsupported.md): The provider doesn’t support the feature the user requested in the device’s current region.
- [VSError.Code.userCancelled](usercancelled.md): The user canceled the request.

# VSErrorCodeUnsupportedProvider (Objective-C)

**Framework:** Video Subscriber Account  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · macOS · tvOS 10.0+ · visionOS 1.0+

The system doesn’t support the user’s subscription provider.

## Declaration

```objectivec
VSErrorCodeUnsupportedProvider
```

## See Also

### Error Codes

- [VSErrorCodeAccessNotGranted](accessnotgranted.md): The user hasn’t granted access to their subscription information.
- [VSErrorCodeInvalidVerificationToken](invalidverificationtoken.md): The user’s subscription provider rejected the verification token that the app sent with the request.
- [VSErrorCodeProviderRejected](providerrejected.md): The user’s subscription provider didn’t allow the request to proceed.
- [VSErrorCodeRejected](rejected.md): The system rejected the request.
- [VSErrorCodeServiceTemporarilyUnavailable](servicetemporarilyunavailable.md): The request failed due to a timeout or unreachable host, but a subsequent attempt might succeed.
- [VSErrorCodeUnsupported](unsupported.md): The provider doesn’t support the feature the user requested in the device’s current region.
- [VSErrorCodeUserCancelled](usercancelled.md): The user canceled the request.
