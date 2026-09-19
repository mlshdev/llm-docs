> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/homekit/hmnetworkconfigurationprofiledelegate/profiledidupdatenetworkaccessmode(_:)

# profileDidUpdateNetworkAccessMode(\_:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Tells the delegate that the network access mode has changed.

## Declaration

```swift
optional func profileDidUpdateNetworkAccessMode(_ profile: HMNetworkConfigurationProfile)
```

## Parameters

- `profile`: The network configuration profile for which the network access changed.

# profileDidUpdateNetworkAccessMode: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Tells the delegate that the network access mode has changed.

## Declaration

```objectivec
- (void) profileDidUpdateNetworkAccessMode:(HMNetworkConfigurationProfile *) profile;
```

## Parameters

- `profile`: The network configuration profile for which the network access changed.
