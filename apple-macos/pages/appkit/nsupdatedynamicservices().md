> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsupdatedynamicservices()](https://developer.apple.com/documentation/appkit/nsupdatedynamicservices())

# NSUpdateDynamicServices() (Swift)

**Framework:** AppKit  
**Kind:** Function  
**Availability:** macOS

Causes the services information for the system to be updated.

## Declaration

```swift
func NSUpdateDynamicServices()
```

<a id="Discussion"></a>

## Discussion

Used by a service-providing application to reregister the services it is willing to provide. To do this, you create a bundle with the extension “`.service`” and place it in the application’s path or `~/Library/Services`. The content of the bundle is identical to a normal service bundle. You then call this function.

It is only necessary to call this function if your program adds dynamic services to the system.

## See Also

### Registering Services

- [NSRegisterServicesProvider(\_:\_:)](nsregisterservicesprovider%28____%29.md): Registers a service provider.
- [NSUnregisterServicesProvider(\_:)](nsunregisterservicesprovider%28__%29.md): Unregisters a service provider.
- [NSServiceProviderName](nsserviceprovidername.md)

# NSUpdateDynamicServices (Objective-C)

**Framework:** AppKit  
**Kind:** Function  
**Availability:** macOS

Causes the services information for the system to be updated.

## Declaration

```objectivec
extern void NSUpdateDynamicServices();
```

<a id="Discussion"></a>

## Discussion

Used by a service-providing application to reregister the services it is willing to provide. To do this, you create a bundle with the extension “`.service`” and place it in the application’s path or `~/Library/Services`. The content of the bundle is identical to a normal service bundle. You then call this function.

It is only necessary to call this function if your program adds dynamic services to the system.

## See Also

### Registering Services

- [NSRegisterServicesProvider](nsregisterservicesprovider%28____%29.md): Registers a service provider.
- [NSUnregisterServicesProvider](nsunregisterservicesprovider%28__%29.md): Unregisters a service provider.
- [NSServiceProviderName](nsserviceprovidername.md)
