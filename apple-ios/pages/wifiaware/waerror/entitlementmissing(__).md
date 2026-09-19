> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/wifiaware/waerror/entitlementmissing(_:)

# WAError.entitlementMissing(\_:)

**Framework:** Wi-Fi Aware  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

An error that occurs if your app is missing the entitlement needed for the requested operation.

## Declaration

```swift
case entitlementMissing(WAError.EntitlementMissingDetails)
```

## See Also

### Checking for missing entitlement

- [WAError.EntitlementMissingDetails](entitlementmissingdetails.md): The optional details describing the missing entitlement.
