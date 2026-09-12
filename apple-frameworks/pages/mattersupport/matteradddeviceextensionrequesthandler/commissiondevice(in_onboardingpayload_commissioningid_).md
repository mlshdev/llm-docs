> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mattersupport/matteradddeviceextensionrequesthandler/commissiondevice(in:onboardingpayload:commissioningid:)](https://developer.apple.com/documentation/mattersupport/matteradddeviceextensionrequesthandler/commissiondevice(in:onboardingpayload:commissioningid:))

# commissionDevice(in:onboardingPayload:commissioningID:)

**Framework:** MatterSupport  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 14.0+ · visionOS

Commissions the device with the onboarding payload.

## Declaration

```swift
func commissionDevice(in home: MatterAddDeviceRequest.Home?, onboardingPayload: String, commissioningID: UUID) async throws
```

## Parameters

- `home`: The selected home for the device.
- `onboardingPayload`: The onboarding payload, as defined by Matter specification, that you need to use to commission the device.
- `commissioningID`: A generated identifier you use with other MatterSupport methods.
