> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcpresentmentintentassertion/isvalid](https://developer.apple.com/documentation/corenfc/nfcpresentmentintentassertion/isvalid)

# isValid

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+

A Boolean property that indicates whether the presentment intent assertion instance is still valid.

## Declaration

```swift
final var isValid: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This value is `true` when you first acquire a presentment intent assertion. It becomes `false` when any of the following occur:

- Your app goes into the background.
- The maximum presentment intention assertion duration expires.

## See Also

### Testing presentment intention validity

- [NFCPresentmentIntentAssertion.Error](error.md): An error type that indicates problems with the presentment intent assertion.
