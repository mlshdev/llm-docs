> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmljs/settings/1627370-onrestrictionschange](https://developer.apple.com/documentation/tvmljs/settings/1627370-onrestrictionschange)

# onRestrictionsChange

**Interface language:** Data

**Framework:** TVMLKit JS  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+

A callback function that is called when changes to a device’s restriction information changes.

## Declaration

```
attribute function onRestrictionsChange;
```

<a id="discussion"></a>

## Discussion

The `onRestrictionsChange` attribute is used to update any activities that use a device’s restriction information. The attribute must be set to a function; for example, `Settings.onRestrictionsChange = function () {}`.

## See Also

### Retrieving Setting Information

- [restrictions](1627378-restrictions.md): Restriction information on the device.
- [language](1627439-language.md): The language used to display information by the device.
- [storefrontCountryCode](1627376-storefrontcountrycode.md): The country code used by the store on this device.
