> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/appmanagedextensionconfigsobject](https://developer.apple.com/documentation/devicemanagement/appmanagedextensionconfigsobject)

# AppManagedExtensionConfigsObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 27.0+ · visionOS 2.4+

A dictionary of extension config data and credentials.

## Declaration

```
object AppManagedExtensionConfigsObject
```

## Properties

- `ANY` — `AppManagedAppConfigDictionaryObject`: A dictionary mapping extension composed identifiers to the extension config data and credentials.

  The format of the composed identifier is either “Bundle-ID” or “Bundle-ID (Team-ID)”. “Bundle-ID” is the bundle identifier string of the provider. “Team-ID” is the team identifier from the provider’s code signature. For example, “com.example.app” for the bundle ID format, or “com.example.app (ABCD1234)” for the team ID format.

## See Also

### Objects

- [AppManagedAppConfigDictionaryObject](appmanagedappconfigdictionaryobject.md): A dictionary of app config data and credentials.
- [AppManagedAttributesObject](appmanagedattributesobject.md): A dictionary of values to associate with the app.
- [AppManagedInstallBehaviorObject](appmanagedinstallbehaviorobject.md): A dictionary that describes how and when to install the app.
- [AppManagedUpdateBehaviorObject](appmanagedupdatebehaviorobject.md): A dictionary that specifies how the device updates apps.
