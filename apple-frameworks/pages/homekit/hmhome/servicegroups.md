> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmhome/servicegroups](https://developer.apple.com/documentation/homekit/hmhome/servicegroups)

# serviceGroups (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

An array of all service groups in the home.

## Declaration

```swift
var serviceGroups: [HMServiceGroup] { get }
```

<a id="Discussion"></a>

## Discussion

Services groups are instances of [HMServiceGroup](../hmservicegroup.md).

## See Also

### Grouping services

- [servicesWithTypes(\_:)](serviceswithtypes%28__%29.md): Returns an array of all services provided by accessories in the home that match the specified types.
- [addServiceGroup(withName:completionHandler:)](addservicegroup%28withname_completionhandler_%29.md): Adds a service group to the home.
- [removeServiceGroup(\_:completionHandler:)](removeservicegroup%28__completionhandler_%29.md): Removes a service group from the home.
- [HMServiceGroup](../hmservicegroup.md): A collection of accessory services.

# serviceGroups (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

An array of all service groups in the home.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<HMServiceGroup *> * serviceGroups;
```

<a id="Discussion"></a>

## Discussion

Services groups are instances of [HMServiceGroup](../hmservicegroup.md).

## See Also

### Grouping services

- [servicesWithTypes:](serviceswithtypes%28__%29.md): Returns an array of all services provided by accessories in the home that match the specified types.
- [addServiceGroupWithName:completionHandler:](addservicegroup%28withname_completionhandler_%29.md): Adds a service group to the home.
- [removeServiceGroup:completionHandler:](removeservicegroup%28__completionhandler_%29.md): Removes a service group from the home.
- [HMServiceGroup](../hmservicegroup.md): A collection of accessory services.
