> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corenfc/nfcvasresponse/status

# status (Swift)

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

A response APDU status code.

## Declaration

```swift
var status: NFCVASResponse.ErrorCode { get }
```

## See Also

### Getting the Response Status

- [VASErrorCode](../vaserrorcode.md): Deprecated. Constants representing APDU status codes for a VAS response.

# status (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

A response APDU status code.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) NFCVASErrorCode status;
```

## See Also

### Getting the Response Status

- [VASErrorCode](../vaserrorcode.md): Deprecated. Constants representing APDU status codes for a VAS response.
