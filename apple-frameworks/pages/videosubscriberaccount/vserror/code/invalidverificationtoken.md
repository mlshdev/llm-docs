> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vserror/code/invalidverificationtoken](https://developer.apple.com/documentation/videosubscriberaccount/vserror/code/invalidverificationtoken)

# VSError.Code.invalidVerificationToken (Swift)

**Framework:** Video Subscriber Account  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS · tvOS 10.0+ · visionOS 1.0+

The user’s subscription provider rejected the verification token that the app sent with the request.

## Declaration

```swift
case invalidVerificationToken
```

## See Also

### Error Codes

- [VSError.Code.accessNotGranted](accessnotgranted.md): The user hasn’t granted access to their subscription information.
- [VSError.Code.providerRejected](providerrejected.md): The user’s subscription provider didn’t allow the request to proceed.
- [VSError.Code.rejected](rejected.md): The system rejected the request.
- [VSError.Code.serviceTemporarilyUnavailable](servicetemporarilyunavailable.md): The request failed due to a timeout or unreachable host, but a subsequent attempt might succeed.
- [VSError.Code.unsupported](unsupported.md): The provider doesn’t support the feature the user requested in the device’s current region.
- [VSError.Code.unsupportedProvider](unsupportedprovider.md): The system doesn’t support the user’s subscription provider.
- [VSError.Code.userCancelled](usercancelled.md): The user canceled the request.

# VSErrorCodeInvalidVerificationToken (Objective-C)

**Framework:** Video Subscriber Account  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · macOS · tvOS 10.0+ · visionOS 1.0+

The user’s subscription provider rejected the verification token that the app sent with the request.

## Declaration

```objectivec
VSErrorCodeInvalidVerificationToken
```

## See Also

### Error Codes

- [VSErrorCodeAccessNotGranted](accessnotgranted.md): The user hasn’t granted access to their subscription information.
- [VSErrorCodeProviderRejected](providerrejected.md): The user’s subscription provider didn’t allow the request to proceed.
- [VSErrorCodeRejected](rejected.md): The system rejected the request.
- [VSErrorCodeServiceTemporarilyUnavailable](servicetemporarilyunavailable.md): The request failed due to a timeout or unreachable host, but a subsequent attempt might succeed.
- [VSErrorCodeUnsupported](unsupported.md): The provider doesn’t support the feature the user requested in the device’s current region.
- [VSErrorCodeUnsupportedProvider](unsupportedprovider.md): The system doesn’t support the user’s subscription provider.
- [VSErrorCodeUserCancelled](usercancelled.md): The user canceled the request.
