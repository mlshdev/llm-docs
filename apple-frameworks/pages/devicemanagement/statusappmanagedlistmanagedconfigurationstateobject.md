> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/statusappmanagedlistmanagedconfigurationstateobject](https://developer.apple.com/documentation/devicemanagement/statusappmanagedlistmanagedconfigurationstateobject)

# StatusAppManagedListManagedConfigurationStateObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 27.0+ · visionOS 2.4+

The status of any app managed configuration. This key is only present when the managed app has a managed configuration.

## Declaration

```
object StatusAppManagedListManagedConfigurationStateObject
```

## Properties

- `state` — `string` (required): The managed configuration status.

  - `unknown`: The device hasn’t read the managed configuration.
  - `invalid`: The device read the managed configuration and found it to be invalid.
  - `valid`: The device read the managed configuration and found it to be valid.  
  **Allowed values:** `unknown`, `invalid`, `valid`

## See Also

### Objects

- [StatusAppManagedListManagedConfiguration_ExtensionConfigStateObject](statusappmanagedlistmanagedconfiguration_extensionconfigstateobject.md): The status of any app extension managed configuration. This key’s value is a dictionary whose keys are the bundle identifiers of app extensions that have a managed configuration. The values of each key represent the status of the corresponding app extension’s managed configuration.
