> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmservice/updateassociatedservicetype(_:completionhandler:)](https://developer.apple.com/documentation/homekit/hmservice/updateassociatedservicetype(_:completionhandler:))

# updateAssociatedServiceType(\_:completionHandler:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · visionOS 1.0+

Associates the service type of the plugged-in device with a switch or an outlet service.

## Declaration

```swift
func updateAssociatedServiceType(_ serviceType: String?, completionHandler completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func updateAssociatedServiceType(_ serviceType: String?) async throws
```

## Parameters

- `serviceType`: The service type of the device that is hooked up to the switch or outlet.
- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

<a id="Discussion"></a>

## Discussion

This method is only valid for services of type [HMServiceTypeOutlet](../hmservicetypeoutlet.md) or [HMServiceTypeSwitch](../hmservicetypeswitch.md). See [associatedServiceType](associatedservicetype.md) for details of associated service types.

## See Also

### Associating a secondary service

- [associatedServiceType](associatedservicetype.md): The type of the service associated with an outlet or a switch.

# updateAssociatedServiceType:completionHandler: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Associates the service type of the plugged-in device with a switch or an outlet service.

## Declaration

```objectivec
- (void) updateAssociatedServiceType:(NSString *) serviceType completionHandler:(void (^)(NSError *error)) completion;
```

## Parameters

- `serviceType`: The service type of the device that is hooked up to the switch or outlet.
- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

<a id="Discussion"></a>

## Discussion

This method is only valid for services of type [HMServiceTypeOutlet](../hmservicetypeoutlet.md) or [HMServiceTypeSwitch](../hmservicetypeswitch.md). See [associatedServiceType](associatedservicetype.md) for details of associated service types.

## See Also

### Associating a secondary service

- [associatedServiceType](associatedservicetype.md): The type of the service associated with an outlet or a switch.
