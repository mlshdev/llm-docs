> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/wifiaware/waerror/entitlementmissingdetails

# WAError.EntitlementMissingDetails

**Framework:** Wi-Fi Aware  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The optional details describing the missing entitlement.

## Declaration

```swift
struct EntitlementMissingDetails
```

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Checking for missing entitlement

- [WAError.entitlementMissing(\_:)](entitlementmissing%28__%29.md): An error that occurs if your app is missing the entitlement needed for the requested operation.
