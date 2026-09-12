> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicecheck/dcerror-swift.struct/unknownsystemfailure](https://developer.apple.com/documentation/devicecheck/dcerror-swift.struct/unknownsystemfailure)

# unknownSystemFailure

**Framework:** DeviceCheck  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 9.0+

A failure has occurred, such as the failure to generate a token.

## Declaration

```swift
static var unknownSystemFailure: DCError.Code { get }
```

## See Also

### Errors

- [featureUnsupported](featureunsupported.md): DeviceCheck is not available on this device.
- [invalidInput](invalidinput.md): An error code that indicates when your app provides data that isn’t formatted correctly.
- [invalidKey](invalidkey.md): An error caused by a failed attempt to use the App Attest key.
- [serverUnavailable](serverunavailable.md): An error that indicates a failed attempt to contact the App Attest service during an attestation.
- [DCError.Code](code.md): DeviceCheck error codes.
