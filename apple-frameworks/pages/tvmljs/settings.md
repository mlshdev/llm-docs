> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmljs/settings](https://developer.apple.com/documentation/tvmljs/settings)

# Settings

**Interface language:** Data

**Framework:** TVMLKit JS  
**Kind:** Class  
**Availability:** tvOS 9.0+

An object that provides access to setting information for a device.

## Declaration

```
interface Settings
```

<a id="overview"></a>

## Overview

You cannot create an instance of the `Settings` class. An instance of this class is available in the global context as `Settings`.

## Topics

### Retrieving Setting Information

- [restrictions](settings/1627378-restrictions.md): Restriction information on the device.
- [language](settings/1627439-language.md): The language used to display information by the device.
- [onRestrictionsChange](settings/1627370-onrestrictionschange.md): A callback function that is called when changes to a device’s restriction information changes.
- [storefrontCountryCode](settings/1627376-storefrontcountrycode.md): The country code used by the store on this device.

## See Also

### Device Settings

- [Device](device.md): An object that provides information about an Apple TV and the host app installed on the device.
- [Restrictions](restrictions.md): An object used to retrieve rating restriction information.
