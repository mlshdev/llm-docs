> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/identitylookup/livecalleridlookupextensioncontext/tokenissuerurl

# tokenIssuerURL

**Framework:** SMS and Call Reporting  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ (deprecated in 27.2) · iPadOS 18.0+ (deprecated in 27.2) · Mac Catalyst 18.0+ (deprecated in 27.2) · macOS 15.0+ (deprecated in 27.2) · visionOS 2.0+ (deprecated in 27.2)

The URL of the Privacy Pass token issuer.

> Refer to Info.plist NSPIRConfiguration dictionary

## Declaration

```swift
let tokenIssuerURL: URL
```

## Mentioned In

- [Getting up-to-date calling and blocking information for your app](../getting-up-to-date-calling-and-blocking-information-for-your-app.md)

## See Also

### Configuring the system

- [serviceURL](serviceurl.md): Deprecated. The endpoint of the service to fetch identity and blocking information.
- [userTierToken](usertiertoken.md): An HTTP bearer token that authenticates the person using your app.
