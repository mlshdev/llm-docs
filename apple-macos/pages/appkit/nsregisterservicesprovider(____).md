> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsregisterservicesprovider(_:_:)](https://developer.apple.com/documentation/appkit/nsregisterservicesprovider(_:_:))

# NSRegisterServicesProvider(\_:\_:) (Swift)

**Framework:** AppKit  
**Kind:** Function  
**Availability:** macOS

Registers a service provider.

## Declaration

```swift
func NSRegisterServicesProvider(_ provider: Any?, _ name: NSServiceProviderName)
```

## Parameters

- `provider`: The object providing the service you want to register.
- `name`: The unique name to associate with the service. This string is used to advertise the service to interested clients.

<a id="Discussion"></a>

## Discussion

Use this function to register custom services not directly related to your application.

You should not use this function to register the services provided by your application. For your application’s services, you should use the [servicesProvider](nsapplication/servicesprovider.md) method of [NSApplication](nsapplication.md), passing a non-`nil` argument.

## See Also

### Registering Services

- [NSUnregisterServicesProvider(\_:)](nsunregisterservicesprovider%28__%29.md): Unregisters a service provider.
- [NSUpdateDynamicServices()](nsupdatedynamicservices%28%29.md): Causes the services information for the system to be updated.
- [NSServiceProviderName](nsserviceprovidername.md)

# NSRegisterServicesProvider (Objective-C)

**Framework:** AppKit  
**Kind:** Function  
**Availability:** macOS

Registers a service provider.

## Declaration

```objectivec
extern void NSRegisterServicesProvider(id provider, NSServiceProviderName name);
```

## Parameters

- `provider`: The object providing the service you want to register.
- `name`: The unique name to associate with the service. This string is used to advertise the service to interested clients.

<a id="Discussion"></a>

## Discussion

Use this function to register custom services not directly related to your application.

You should not use this function to register the services provided by your application. For your application’s services, you should use the [servicesProvider](nsapplication/servicesprovider.md) method of [NSApplication](nsapplication.md), passing a non-`nil` argument.

## See Also

### Registering Services

- [NSUnregisterServicesProvider](nsunregisterservicesprovider%28__%29.md): Unregisters a service provider.
- [NSUpdateDynamicServices](nsupdatedynamicservices%28%29.md): Causes the services information for the system to be updated.
- [NSServiceProviderName](nsserviceprovidername.md)
