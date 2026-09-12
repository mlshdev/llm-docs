> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrdevicecontrollerstoragedelegate/controller(_:storevalues:securitylevel:sharingtype:)](https://developer.apple.com/documentation/matter/mtrdevicecontrollerstoragedelegate/controller(_:storevalues:securitylevel:sharingtype:))

# controller(\_:storeValues:securityLevel:sharingType:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

## Declaration

```swift
optional func controller(_ controller: MTRDeviceController, storeValues values: [String : any NSSecureCoding], securityLevel: MTRStorageSecurityLevel, sharingType: MTRStorageSharingType) -> Bool
```

# controller:storeValues:securityLevel:sharingType: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

## Declaration

```objectivec
- (BOOL) controller:(MTRDeviceController *) controller storeValues:(NSDictionary<NSString *,id<NSSecureCoding>> *) values securityLevel:(MTRStorageSecurityLevel) securityLevel sharingType:(MTRStorageSharingType) sharingType;
```
