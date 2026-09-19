> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicensedeliverysdk/aldsession/generatelicenseresponse()

# generateLicenseResponse()

**Framework:** App License Delivery SDK  
**Kind:** Instance Method

Generates a license response. This method produces a license response, in a bytes array. The response is not yet signed.

## Declaration

```swift
func generateLicenseResponse() throws -> [UInt8]
```

<a id="return-value"></a>

## Return Value

License in byte array

## Mentioned In

- [Licensing alternative distribution apps](../licensing-alternative-distribution-apps.md)
