> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrdevicecontrollerstoragedelegate/controller(_:valueforkey:securitylevel:sharingtype:)](https://developer.apple.com/documentation/matter/mtrdevicecontrollerstoragedelegate/controller(_:valueforkey:securitylevel:sharingtype:))

# controller(\_:valueForKey:securityLevel:sharingType:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

## Declaration

```swift
func controller(_ controller: MTRDeviceController, valueForKey key: String, securityLevel: MTRStorageSecurityLevel, sharingType: MTRStorageSharingType) -> (any NSSecureCoding)?
```

# controller:valueForKey:securityLevel:sharingType: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

## Declaration

```objectivec
- (id<NSSecureCoding>) controller:(MTRDeviceController *) controller valueForKey:(NSString *) key securityLevel:(MTRStorageSecurityLevel) securityLevel sharingType:(MTRStorageSharingType) sharingType;
```
