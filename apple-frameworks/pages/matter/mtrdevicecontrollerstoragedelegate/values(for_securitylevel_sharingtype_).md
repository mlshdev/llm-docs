> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrdevicecontrollerstoragedelegate/values(for:securitylevel:sharingtype:)](https://developer.apple.com/documentation/matter/mtrdevicecontrollerstoragedelegate/values(for:securitylevel:sharingtype:))

# values(for:securityLevel:sharingType:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

## Declaration

```swift
optional func values(for controller: MTRDeviceController, securityLevel: MTRStorageSecurityLevel, sharingType: MTRStorageSharingType) -> [String : any NSSecureCoding]?
```

# valuesForController:securityLevel:sharingType: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

## Declaration

```objectivec
- (NSDictionary<NSString *,id<NSSecureCoding>> *) valuesForController:(MTRDeviceController *) controller securityLevel:(MTRStorageSecurityLevel) securityLevel sharingType:(MTRStorageSharingType) sharingType;
```
