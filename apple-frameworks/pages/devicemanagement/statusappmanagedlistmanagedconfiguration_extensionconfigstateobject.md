> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/statusappmanagedlistmanagedconfiguration_extensionconfigstateobject](https://developer.apple.com/documentation/devicemanagement/statusappmanagedlistmanagedconfiguration_extensionconfigstateobject)

# StatusAppManagedListManagedConfiguration_ExtensionConfigStateObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 27.0+ · visionOS 2.4+

The status of any app extension managed configuration. This key’s value is a dictionary whose keys are the bundle identifiers of app extensions that have a managed configuration. The values of each key represent the status of the corresponding app extension’s managed configuration.

## Declaration

```
object StatusAppManagedListManagedConfiguration_ExtensionConfigStateObject
```

## Properties

- `ANY` — `StatusAppManagedListManagedConfigurationStateObject`: The bundle identifier of the managed app extension.

## See Also

### Objects

- [StatusAppManagedListManagedConfigurationStateObject](statusappmanagedlistmanagedconfigurationstateobject.md): The status of any app managed configuration. This key is only present when the managed app has a managed configuration.
