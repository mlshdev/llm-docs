> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/servicesaccountlinking/reselleraccount/registertoken(_:)

# registerToken(\_:)

**Framework:** ServicesAccountLinking  
**Kind:** Type Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+

Registers a signed token with the user’s Media & Purchases account.

## Declaration

```swift
@backDeployed(before: iOS 26.2)
static func registerToken(_ token: String) async throws
```

## Parameters

- `token`: The signed token representing user entitlement

<a id="discussion"></a>

## Discussion

> **Throws**

> [notEligible](../registrationerror/noteligible.md) if app is not a registered partner, or [failed](../registrationerror/failed.md) for other failures

## See Also

### Registration methods

- [registerIdentifier(\_:)](registeridentifier%28__%29.md): Registers an account identifier with the user’s Media & Purchases account.
