> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicecheck/dcerror-swift.struct/code/serverunavailable](https://developer.apple.com/documentation/devicecheck/dcerror-swift.struct/code/serverunavailable)

# DCError.Code.serverUnavailable (Swift)

**Framework:** DeviceCheck  
**Kind:** Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 9.0+

An error that indicates a failed attempt to contact the App Attest service during an attestation.

## Declaration

```swift
case serverUnavailable
```

<a id="discussion"></a>

## Discussion

You receive this error when you call [attestKey(\_:clientDataHash:completionHandler:)](../../dcappattestservice/attestkey%28__clientdatahash_completionhandler_%29.md) and the framework isn’t able to complete the attestation. If you receive this error, try the attestation again later using the same key and the same value for the `clientDataHash` parameter. Retrying with the same inputs helps to preserve the risk metric for a given device.

## See Also

### Error codes

- [DCError.Code.featureUnsupported](featureunsupported.md): DeviceCheck is unavailable on this device.
- [DCError.Code.invalidInput](invalidinput.md): An error code that indicates when your app provides data that isn’t formatted correctly.
- [DCError.Code.invalidKey](invalidkey.md): An error caused by a failed attempt to use the App Attest key.
- [DCError.Code.unknownSystemFailure](unknownsystemfailure.md): A failure has occurred, such as the failure to generate a token.

# DCErrorServerUnavailable (Objective-C)

**Framework:** DeviceCheck  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 9.0+

An error that indicates a failed attempt to contact the App Attest service during an attestation.

## Declaration

```objectivec
DCErrorServerUnavailable
```

<a id="discussion"></a>

## Discussion

You receive this error when you call [attestKey:clientDataHash:completionHandler:](../../dcappattestservice/attestkey%28__clientdatahash_completionhandler_%29.md) and the framework isn’t able to complete the attestation. If you receive this error, try the attestation again later using the same key and the same value for the `clientDataHash` parameter. Retrying with the same inputs helps to preserve the risk metric for a given device.

## See Also

### Error codes

- [DCErrorFeatureUnsupported](featureunsupported.md): DeviceCheck is unavailable on this device.
- [DCErrorInvalidInput](invalidinput.md): An error code that indicates when your app provides data that isn’t formatted correctly.
- [DCErrorInvalidKey](invalidkey.md): An error caused by a failed attempt to use the App Attest key.
- [DCErrorUnknownSystemFailure](unknownsystemfailure.md): A failure has occurred, such as the failure to generate a token.
