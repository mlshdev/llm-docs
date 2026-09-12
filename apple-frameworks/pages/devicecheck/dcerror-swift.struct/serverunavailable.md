> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicecheck/dcerror-swift.struct/serverunavailable](https://developer.apple.com/documentation/devicecheck/dcerror-swift.struct/serverunavailable)

# serverUnavailable

**Framework:** DeviceCheck  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 9.0+

An error that indicates a failed attempt to contact the App Attest service during an attestation.

## Declaration

```swift
static var serverUnavailable: DCError.Code { get }
```

## Mentioned In

- [Establishing your app’s integrity](../establishing-your-app-s-integrity.md)

<a id="discussion"></a>

## Discussion

You receive this error when you call [attestKey(\_:clientDataHash:completionHandler:)](../dcappattestservice/attestkey%28__clientdatahash_completionhandler_%29.md) and the framework isn’t able to complete the attestation. If you receive this error, try the attestation again later using the same key and the same value for the `clientDataHash` parameter. Retrying with the same inputs helps to preserve the risk metric for a given device.

## See Also

### Errors

- [featureUnsupported](featureunsupported.md): DeviceCheck is not available on this device.
- [invalidInput](invalidinput.md): An error code that indicates when your app provides data that isn’t formatted correctly.
- [invalidKey](invalidkey.md): An error caused by a failed attempt to use the App Attest key.
- [unknownSystemFailure](unknownsystemfailure.md): A failure has occurred, such as the failure to generate a token.
- [DCError.Code](code.md): DeviceCheck error codes.
