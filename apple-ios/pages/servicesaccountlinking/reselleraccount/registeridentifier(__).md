> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/servicesaccountlinking/reselleraccount/registeridentifier(_:)](https://developer.apple.com/documentation/servicesaccountlinking/reselleraccount/registeridentifier(_:))

# registerIdentifier(\_:)

**Framework:** ServicesAccountLinking  
**Kind:** Type Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+

Registers an account identifier with the user’s Media & Purchases account.

## Declaration

```swift
@backDeployed(before: iOS 26.2)
static func registerIdentifier(_ identifier: String) async throws
```

## Parameters

- `identifier`: The UUID string representing user entitlement.

<a id="discussion"></a>

## Discussion

> **Throws**

> [notEligible](../registrationerror/noteligible.md) if app is not a registered partner, or [failed](../registrationerror/failed.md) for other failures.

## See Also

### Registration methods

- [registerToken(\_:)](registertoken%28__%29.md): Registers a signed token with the user’s Media & Purchases account.
