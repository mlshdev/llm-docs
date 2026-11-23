> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorytransportextension/accessorygpuworker/requestauthorization(for:)

# requestAuthorization(for:)

**Framework:** Accessory Transport Extension  
**Kind:** Type Method  
**Availability:** iOS 27.3+ beta

Enrolls the feature for an accessory.

## Declaration

```swift
static func requestAuthorization(for accessory: ASAccessory) async throws -> AccessoryFeatureAuthorizationStatus
```

## Parameters

- `accessory`: The accessory for which to enroll the feature.

<a id="discussion"></a>

## Discussion

Enrollment doesn’t prompt the person, and it lasts for the life of the accessory’s pairing. If the app already enrolled the feature, the method returns the recorded status.

This method throws [AccessoryTransportSession.Error.unavailable](../accessorytransportsession/error/unavailable.md) when the device isn’t eligible for the feature. It also throws a generic error when the system can’t record the enrollment, for example, when the accessory hasn’t finished setup or isn’t paired with your app.

## See Also

### Checking authorization

- [authorizationStatus(for:)](authorizationstatus%28for_%29.md): Beta. Returns the feature’s current authorization status for an accessory.
- [AccessoryFeatureAuthorizationStatus](../accessoryfeatureauthorizationstatus.md): Beta. A status that describes whether the system authorizes a feature for an accessory.
