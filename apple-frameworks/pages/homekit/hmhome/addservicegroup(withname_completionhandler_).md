> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmhome/addservicegroup(withname:completionhandler:)](https://developer.apple.com/documentation/homekit/hmhome/addservicegroup(withname:completionhandler:))

# addServiceGroup(withName:completionHandler:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Adds a service group to the home.

## Declaration

```swift
func addServiceGroup(withName serviceGroupName: String, completionHandler completion: @escaping @Sendable (HMServiceGroup?, (any Error)?) -> Void)
```

```swift
func addServiceGroup(named serviceGroupName: String) async throws -> HMServiceGroup
```

## Parameters

- `serviceGroupName`: The name of the new service group. Must not be `nil`, and must not be the name of a service group already in the home.
- `completion`: The block executed after the request is processed.

  - **group**: The newly created service group.
  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

## See Also

### Grouping services

- [servicesWithTypes(\_:)](serviceswithtypes%28__%29.md): Returns an array of all services provided by accessories in the home that match the specified types.
- [serviceGroups](servicegroups.md): An array of all service groups in the home.
- [removeServiceGroup(\_:completionHandler:)](removeservicegroup%28__completionhandler_%29.md): Removes a service group from the home.
- [HMServiceGroup](../hmservicegroup.md): A collection of accessory services.

# addServiceGroupWithName:completionHandler: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Adds a service group to the home.

## Declaration

```objectivec
- (void) addServiceGroupWithName:(NSString *) serviceGroupName completionHandler:(void (^)(HMServiceGroup *group, NSError *error)) completion;
```

## Parameters

- `serviceGroupName`: The name of the new service group. Must not be `nil`, and must not be the name of a service group already in the home.
- `completion`: The block executed after the request is processed.

  - **group**: The newly created service group.
  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

## See Also

### Grouping services

- [servicesWithTypes:](serviceswithtypes%28__%29.md): Returns an array of all services provided by accessories in the home that match the specified types.
- [serviceGroups](servicegroups.md): An array of all service groups in the home.
- [removeServiceGroup:completionHandler:](removeservicegroup%28__completionhandler_%29.md): Removes a service group from the home.
- [HMServiceGroup](../hmservicegroup.md): A collection of accessory services.
