> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbcentralmanager/supports(_:)](https://developer.apple.com/documentation/corebluetooth/cbcentralmanager/supports(_:))

# supports(\_:) (Swift)

**Framework:** Core Bluetooth  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a Boolean that indicates whether the device supports a specific set of features.

## Declaration

```swift
class func supports(_ features: CBCentralManager.Feature) -> Bool
```

## Parameters

- `features`: One or more features that you would like to check for support.

## See Also

### Inspecting Feature Support

- [CBCentralManager.Feature](feature.md): An option set of device-specific features.

# supportsFeatures: (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a Boolean that indicates whether the device supports a specific set of features.

## Declaration

```objectivec
+ (BOOL) supportsFeatures:(CBCentralManagerFeature) features;
```

## Parameters

- `features`: One or more features that you would like to check for support.

## See Also

### Inspecting Feature Support

- [CBCentralManagerFeature](feature.md): An option set of device-specific features.
