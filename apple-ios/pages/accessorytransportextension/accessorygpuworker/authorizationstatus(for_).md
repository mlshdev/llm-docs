> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorytransportextension/accessorygpuworker/authorizationstatus(for:)

# authorizationStatus(for:)

**Framework:** Accessory Transport Extension  
**Kind:** Type Method  
**Availability:** iOS 27.3+ beta

Returns the feature’s current authorization status for an accessory.

## Declaration

```swift
static func authorizationStatus(for accessory: ASAccessory) async throws -> AccessoryFeatureAuthorizationStatus
```

## Parameters

- `accessory`: The accessory to check.

<a id="discussion"></a>

## Discussion

This method is asynchronous and can throw a generic error. It returns [AccessoryFeatureAuthorizationStatus.unknown](../accessoryfeatureauthorizationstatus/unknown.md) until your app enrolls the feature with [requestAuthorization(for:)](requestauthorization%28for_%29.md), then returns the recorded status on every call after that. Call it before you open a session to confirm the feature is enrolled.

## See Also

### Checking authorization

- [requestAuthorization(for:)](requestauthorization%28for_%29.md): Beta. Enrolls the feature for an accessory.
- [AccessoryFeatureAuthorizationStatus](../accessoryfeatureauthorizationstatus.md): Beta. A status that describes whether the system authorizes a feature for an accessory.
