> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicecheck/dcerror-swift.struct/code/invalidkey](https://developer.apple.com/documentation/devicecheck/dcerror-swift.struct/code/invalidkey)

# DCError.Code.invalidKey (Swift)

**Framework:** DeviceCheck  
**Kind:** Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 9.0+

An error caused by a failed attempt to use the App Attest key.

## Declaration

```swift
case invalidKey
```

<a id="discussion"></a>

## Discussion

You receive this error if something goes wrong with generating, retrieving, or using an App Attest cryptographic key, when:

- You call [attestKey(\_:clientDataHash:completionHandler:)](../../dcappattestservice/attestkey%28__clientdatahash_completionhandler_%29.md) for a key that’s already been attested.
- You call [generateAssertion(\_:clientDataHash:completionHandler:)](../../dcappattestservice/generateassertion%28__clientdatahash_completionhandler_%29.md) with an unattested key.
- The App Attest service cannot enforce the key access control policy on macOS.
- The App Attest service rejects the key.

## See Also

### Error codes

- [DCError.Code.featureUnsupported](featureunsupported.md): DeviceCheck is unavailable on this device.
- [DCError.Code.invalidInput](invalidinput.md): An error code that indicates when your app provides data that isn’t formatted correctly.
- [DCError.Code.serverUnavailable](serverunavailable.md): An error that indicates a failed attempt to contact the App Attest service during an attestation.
- [DCError.Code.unknownSystemFailure](unknownsystemfailure.md): A failure has occurred, such as the failure to generate a token.

# DCErrorInvalidKey (Objective-C)

**Framework:** DeviceCheck  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 9.0+

An error caused by a failed attempt to use the App Attest key.

## Declaration

```objectivec
DCErrorInvalidKey
```

<a id="discussion"></a>

## Discussion

You receive this error if something goes wrong with generating, retrieving, or using an App Attest cryptographic key, when:

- You call [attestKey:clientDataHash:completionHandler:](../../dcappattestservice/attestkey%28__clientdatahash_completionhandler_%29.md) for a key that’s already been attested.
- You call [generateAssertion:clientDataHash:completionHandler:](../../dcappattestservice/generateassertion%28__clientdatahash_completionhandler_%29.md) with an unattested key.
- The App Attest service cannot enforce the key access control policy on macOS.
- The App Attest service rejects the key.

## See Also

### Error codes

- [DCErrorFeatureUnsupported](featureunsupported.md): DeviceCheck is unavailable on this device.
- [DCErrorInvalidInput](invalidinput.md): An error code that indicates when your app provides data that isn’t formatted correctly.
- [DCErrorServerUnavailable](serverunavailable.md): An error that indicates a failed attempt to contact the App Attest service during an attestation.
- [DCErrorUnknownSystemFailure](unknownsystemfailure.md): A failure has occurred, such as the failure to generate a token.
