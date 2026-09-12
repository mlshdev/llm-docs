> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmljs/settings/1627378-restrictions](https://developer.apple.com/documentation/tvmljs/settings/1627378-restrictions)

# restrictions

**Interface language:** Data

**Framework:** TVMLKit JS  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+

Restriction information on the device.

## Declaration

```
readonly attribute Restrictions restrictions;
```

<a id="discussion"></a>

## Discussion

The restriction information for a device determines the type of media items that can be played on the device. For more information, see [Restrictions](../restrictions.md).

## See Also

### Retrieving Setting Information

- [language](1627439-language.md): The language used to display information by the device.
- [onRestrictionsChange](1627370-onrestrictionschange.md): A callback function that is called when changes to a device’s restriction information changes.
- [storefrontCountryCode](1627376-storefrontcountrycode.md): The country code used by the store on this device.
