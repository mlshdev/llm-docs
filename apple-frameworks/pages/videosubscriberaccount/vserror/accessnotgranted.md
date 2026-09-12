> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vserror/accessnotgranted](https://developer.apple.com/documentation/videosubscriberaccount/vserror/accessnotgranted)

# accessNotGranted

**Framework:** Video Subscriber Account  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · macOS · tvOS 10.0+ · visionOS 1.0+

The user hasn’t granted access to their subscription information.

## Declaration

```swift
static var accessNotGranted: VSError.Code { get }
```

## See Also

### Error codes

- [invalidVerificationToken](invalidverificationtoken.md): The user’s subscription provider rejected the verification token that the app sent with the request.
- [providerRejected](providerrejected.md): The user’s subscription provider didn’t allow the request to proceed.
- [rejected](rejected.md): The system rejected the request.
- [serviceTemporarilyUnavailable](servicetemporarilyunavailable.md): The request failed due to a timeout or unreachable host, but a subsequent attempt might succeed.
- [unsupported](unsupported.md): The provider doesn’t support the feature the user requested in the device’s current region.
- [unsupportedProvider](unsupportedprovider.md): The system doesn’t support the user’s subscription provider.
- [userCancelled](usercancelled.md): The user canceled the request.
- [VSError.Code](code.md): Error codes in the framework error domain.
