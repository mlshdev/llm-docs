> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmhome/removeservicegroup(_:completionhandler:)](https://developer.apple.com/documentation/homekit/hmhome/removeservicegroup(_:completionhandler:))

# removeServiceGroup(\_:completionHandler:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Removes a service group from the home.

## Declaration

```swift
func removeServiceGroup(_ group: HMServiceGroup, completionHandler completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func removeServiceGroup(_ group: HMServiceGroup) async throws
```

## Parameters

- `group`: The service group to remove.
- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

## See Also

### Grouping services

- [servicesWithTypes(\_:)](serviceswithtypes%28__%29.md): Returns an array of all services provided by accessories in the home that match the specified types.
- [serviceGroups](servicegroups.md): An array of all service groups in the home.
- [addServiceGroup(withName:completionHandler:)](addservicegroup%28withname_completionhandler_%29.md): Adds a service group to the home.
- [HMServiceGroup](../hmservicegroup.md): A collection of accessory services.

# removeServiceGroup:completionHandler: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Removes a service group from the home.

## Declaration

```objectivec
- (void) removeServiceGroup:(HMServiceGroup *) group completionHandler:(void (^)(NSError *error)) completion;
```

## Parameters

- `group`: The service group to remove.
- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

## See Also

### Grouping services

- [servicesWithTypes:](serviceswithtypes%28__%29.md): Returns an array of all services provided by accessories in the home that match the specified types.
- [serviceGroups](servicegroups.md): An array of all service groups in the home.
- [addServiceGroupWithName:completionHandler:](addservicegroup%28withname_completionhandler_%29.md): Adds a service group to the home.
- [HMServiceGroup](../hmservicegroup.md): A collection of accessory services.
