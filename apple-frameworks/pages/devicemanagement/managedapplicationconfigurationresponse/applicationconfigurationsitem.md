> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/managedapplicationconfigurationresponse/applicationconfigurationsitem](https://developer.apple.com/documentation/devicemanagement/managedapplicationconfigurationresponse/applicationconfigurationsitem)

# ManagedApplicationConfigurationResponse.ApplicationConfigurationsItem

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 7.0+ · macOS 10.15+ · tvOS 10.2+ · visionOS 1.1+ · watchOS 10.0+

A dictionary that contains a managed app’s configurations item.

## Declaration

```
object ManagedApplicationConfigurationResponse.ApplicationConfigurationsItem
```

## Properties

- `Configuration` — `ManagedApplicationConfigurationResponse.ApplicationConfigurationsItem.Configuration`: The app’s configurations.
- `Identifier` — `string` (required): The app’s bundle identifier.

  > **Note**

  >  For a watchOS app, the identifier is the watch’s bundle identifier, which differs from the main bundle identifier for the iPhone the watch pairs with.

## Topics

### Objects

- [ManagedApplicationConfigurationResponse.ApplicationConfigurationsItem.Configuration](applicationconfigurationsitem/configuration-data.dictionary.md): A dictionary that contains a managed app’s configuration items.

## See Also

### Objects

- [ManagedApplicationConfigurationResponse.ErrorChainItem](errorchainitem.md): A dictionary that describes an error chain item.
