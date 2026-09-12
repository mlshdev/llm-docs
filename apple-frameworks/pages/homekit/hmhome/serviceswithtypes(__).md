> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmhome/serviceswithtypes(_:)](https://developer.apple.com/documentation/homekit/hmhome/serviceswithtypes(_:))

# servicesWithTypes(\_:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array of all services provided by accessories in the home that match the specified types.

## Declaration

```swift
func servicesWithTypes(_ serviceTypes: [String]) -> [HMService]?
```

## Parameters

- `serviceTypes`: An array of strings that identify service types. See [Accessory Service Types](../accessory-service-types.md) for a list of types.

<a id="return-value"></a>

## Return Value

An array of found services. Returns `nil` if no matching services are found.

## See Also

### Grouping services

- [serviceGroups](servicegroups.md): An array of all service groups in the home.
- [addServiceGroup(withName:completionHandler:)](addservicegroup%28withname_completionhandler_%29.md): Adds a service group to the home.
- [removeServiceGroup(\_:completionHandler:)](removeservicegroup%28__completionhandler_%29.md): Removes a service group from the home.
- [HMServiceGroup](../hmservicegroup.md): A collection of accessory services.

# servicesWithTypes: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array of all services provided by accessories in the home that match the specified types.

## Declaration

```objectivec
- (NSArray<HMService *> *) servicesWithTypes:(NSArray<NSString *> *) serviceTypes;
```

## Parameters

- `serviceTypes`: An array of strings that identify service types. See [Accessory Service Types](../accessory-service-types.md) for a list of types.

<a id="return-value"></a>

## Return Value

An array of found services. Returns `nil` if no matching services are found.

## See Also

### Grouping services

- [serviceGroups](servicegroups.md): An array of all service groups in the home.
- [addServiceGroupWithName:completionHandler:](addservicegroup%28withname_completionhandler_%29.md): Adds a service group to the home.
- [removeServiceGroup:completionHandler:](removeservicegroup%28__completionhandler_%29.md): Removes a service group from the home.
- [HMServiceGroup](../hmservicegroup.md): A collection of accessory services.
