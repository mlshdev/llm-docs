> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/statusappmanagedlistmanagedconfigurationobject](https://developer.apple.com/documentation/devicemanagement/statusappmanagedlistmanagedconfigurationobject)

# StatusAppManagedListManagedConfigurationObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 27.0+ · visionOS 2.4+

The status of app or extension managed configurations. This key is only present when managed configurations are available for the managed app or any of its extensions.

## Declaration

```
object StatusAppManagedListManagedConfigurationObject
```

## Properties

- `app-config-state` — `StatusAppManagedListManagedConfigurationStateObject`: The status of any app managed configuration. This key is only present when the managed app has a managed configuration.
- `extension-config-state` — `StatusAppManagedListManagedConfiguration_ExtensionConfigStateObject`: The status of any app extension managed configuration. This key’s value is a dictionary whose keys are the bundle identifiers of app extensions that have a managed configuration. The values of each key represent the status of the corresponding app extension’s managed configuration.

## Topics

### Objects

- [StatusAppManagedListManagedConfigurationStateObject](statusappmanagedlistmanagedconfigurationstateobject.md): The status of any app managed configuration. This key is only present when the managed app has a managed configuration.
- [StatusAppManagedListManagedConfiguration_ExtensionConfigStateObject](statusappmanagedlistmanagedconfiguration_extensionconfigstateobject.md): The status of any app extension managed configuration. This key’s value is a dictionary whose keys are the bundle identifiers of app extensions that have a managed configuration. The values of each key represent the status of the corresponding app extension’s managed configuration.

## See Also

### Objects

- [StatusAppManagedListStatusReasonObject](statusappmanagedliststatusreasonobject.md): Information about a status error.
