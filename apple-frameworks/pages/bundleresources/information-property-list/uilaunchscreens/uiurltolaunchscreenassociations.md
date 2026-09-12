> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/uilaunchscreens/uiurltolaunchscreenassociations](https://developer.apple.com/documentation/bundleresources/information-property-list/uilaunchscreens/uiurltolaunchscreenassociations)

# UIURLToLaunchScreenAssociations

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 14.0+ · iPadOS 14.0+

The mapping of URL schemes to launch screen configurations.

## Details

`UIURLToLaunchScreenAssociations`

## Properties

- `Any Key` — `string`:

<a id="Discussion"></a>

## Discussion

Set the keys of this dictionary to the URL schemes that your app supports. Provide a value for each key that is the identifier, stored in the [UILaunchScreenIdentifier](uilaunchscreendefinitions/uilaunchscreenidentifier.md) key, of one of the launch screen definitions in your [UILaunchScreenDefinitions](uilaunchscreendefinitions.md) array.

## See Also

### Associations

- [UIDefaultLaunchScreen](uidefaultlaunchscreen.md): The default launch screen configuration.
