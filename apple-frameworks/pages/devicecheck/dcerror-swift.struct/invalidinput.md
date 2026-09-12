> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicecheck/dcerror-swift.struct/invalidinput](https://developer.apple.com/documentation/devicecheck/dcerror-swift.struct/invalidinput)

# invalidInput

**Framework:** DeviceCheck  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 9.0+

An error code that indicates when your app provides data that isn’t formatted correctly.

## Declaration

```swift
static var invalidInput: DCError.Code { get }
```

## See Also

### Errors

- [featureUnsupported](featureunsupported.md): DeviceCheck is not available on this device.
- [invalidKey](invalidkey.md): An error caused by a failed attempt to use the App Attest key.
- [serverUnavailable](serverunavailable.md): An error that indicates a failed attempt to contact the App Attest service during an attestation.
- [unknownSystemFailure](unknownsystemfailure.md): A failure has occurred, such as the failure to generate a token.
- [DCError.Code](code.md): DeviceCheck error codes.
