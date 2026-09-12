> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applicensedeliverysdk/aldsession/finalizelicenseresponse(licenseresponse:signature:)](https://developer.apple.com/documentation/applicensedeliverysdk/aldsession/finalizelicenseresponse(licenseresponse:signature:))

# finalizeLicenseResponse(licenseResponse:signature:)

**Framework:** App License Delivery SDK  
**Kind:** Instance Method

Returns a signed license in a byte array to send in response to a license request from iOS.

## Declaration

```swift
func finalizeLicenseResponse(licenseResponse: [UInt8], signature: [UInt8]? = nil) throws -> [UInt8]
```

## Parameters

- `licenseResponse`: The license created by [generateLicenseResponse()](generatelicenseresponse%28%29.md).
- `signature`: A signature for the license, signed by the signing certificate private key.

<a id="return-value"></a>

## Return Value

The signed license in a byte array.

## Mentioned In

- [Licensing alternative distribution apps](../licensing-alternative-distribution-apps.md)

<a id="discussion"></a>

## Discussion

Encode the return result to `base64` and send it as the `"license"` key in response to an iOS license request.

You can omit the `signature` argument if you include the `signingKey` argument in the [ALDProvider](../aldprovider.md) initializer. Otherwise, pass in a signature of the license in the `signature` argument, signed by the signing certificate private key.

For more information, see [Licensing alternative distribution apps](../licensing-alternative-distribution-apps.md).
