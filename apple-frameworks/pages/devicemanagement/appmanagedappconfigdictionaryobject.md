> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/appmanagedappconfigdictionaryobject](https://developer.apple.com/documentation/devicemanagement/appmanagedappconfigdictionaryobject)

# AppManagedAppConfigDictionaryObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 27.0+ · visionOS 2.4+

A dictionary of app config data and credentials.

## Declaration

```
object AppManagedAppConfigDictionaryObject
```

## Properties

- `Certificates` — `[AppManagedCredentialConfigObject]`: Provides certificates to the managed app or extension. Each element in the array contains a certificate asset reference and an associated identifier which the app or extension uses to look up the certificate.
- `DataAssetReference` — `string`: Specifies the identifier of an asset declaration containing a reference to the app or extension config data. The corresponding asset needs to be of type `com.apple.asset.data`. The referenced data needs to be a property list file, and the asset’s “ContentType” value set to match the data type.
- `Identities` — `[AppManagedCredentialConfigObject]`: Provides identities to the managed app or extension. Each element in the array contains an identity asset reference and an associated identifier which the app or extension uses to look up the identity.
- `Passwords` — `[AppManagedCredentialConfigObject]`: Provides passwords to the managed app or extension. Each element in the array contains a password asset reference and an associated identifier which the app or extension uses to look up the password.

## Mentioned In

- [Configuring managed apps and extensions](configuring-managed-apps-and-extensions.md)

## Topics

### Objects

- [AppManagedCredentialConfigObject](appmanagedcredentialconfigobject.md): A dictionary of values associated with a credential config.

## See Also

### Objects

- [AppManagedAttributesObject](appmanagedattributesobject.md): A dictionary of values to associate with the app.
- [AppManagedExtensionConfigsObject](appmanagedextensionconfigsobject.md): A dictionary of extension config data and credentials.
- [AppManagedInstallBehaviorObject](appmanagedinstallbehaviorobject.md): A dictionary that describes how and when to install the app.
- [AppManagedUpdateBehaviorObject](appmanagedupdatebehaviorobject.md): A dictionary that specifies how the device updates apps.
