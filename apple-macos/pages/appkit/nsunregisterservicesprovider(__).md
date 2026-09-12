> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsunregisterservicesprovider(_:)](https://developer.apple.com/documentation/appkit/nsunregisterservicesprovider(_:))

# NSUnregisterServicesProvider(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Function  
**Availability:** macOS

Unregisters a service provider.

## Declaration

```swift
func NSUnregisterServicesProvider(_ name: NSServiceProviderName)
```

## Parameters

- `name`: The name of the service you want to unregister.

<a id="Discussion"></a>

## Discussion

Use this function to unregister custom services not directly related to your application.

You should not use this function to unregister the services provided by your application. For your application’s services, you should use the [servicesProvider](nsapplication/servicesprovider.md) method of [NSApplication](nsapplication.md), passing a `nil` argument.

## See Also

### Registering Services

- [NSRegisterServicesProvider(\_:\_:)](nsregisterservicesprovider%28____%29.md): Registers a service provider.
- [NSUpdateDynamicServices()](nsupdatedynamicservices%28%29.md): Causes the services information for the system to be updated.
- [NSServiceProviderName](nsserviceprovidername.md)

# NSUnregisterServicesProvider (Objective-C)

**Framework:** AppKit  
**Kind:** Function  
**Availability:** macOS

Unregisters a service provider.

## Declaration

```objectivec
extern void NSUnregisterServicesProvider(NSServiceProviderName name);
```

## Parameters

- `name`: The name of the service you want to unregister.

<a id="Discussion"></a>

## Discussion

Use this function to unregister custom services not directly related to your application.

You should not use this function to unregister the services provided by your application. For your application’s services, you should use the [servicesProvider](nsapplication/servicesprovider.md) method of [NSApplication](nsapplication.md), passing a `nil` argument.

## See Also

### Registering Services

- [NSRegisterServicesProvider](nsregisterservicesprovider%28____%29.md): Registers a service provider.
- [NSUpdateDynamicServices](nsupdatedynamicservices%28%29.md): Causes the services information for the system to be updated.
- [NSServiceProviderName](nsserviceprovidername.md)
