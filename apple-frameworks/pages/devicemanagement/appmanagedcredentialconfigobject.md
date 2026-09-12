> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/appmanagedcredentialconfigobject](https://developer.apple.com/documentation/devicemanagement/appmanagedcredentialconfigobject)

# AppManagedCredentialConfigObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 27.0+ · visionOS 2.4+

A dictionary of values associated with a credential config.

## Declaration

```
object AppManagedCredentialConfigObject
```

## Properties

- `AssetReference` — `string` (required): Specifies the identifier of an asset declaration containing a username and password. The [ManagedApp](../managedapp.md) framework makes the password available to the app or extension. The [ManagedApp](../managedapp.md) framework ignores the username.
- `Identifier` — `string` (required): The app or extension uses this identifier to fetch the corresponding password using the [ManagedApp](../managedapp.md) framework. App developers define the values for these identifiers.

## Mentioned In

- [Configuring managed apps and extensions](configuring-managed-apps-and-extensions.md)
