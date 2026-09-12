> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/uilaunchscreens/uidefaultlaunchscreen](https://developer.apple.com/documentation/bundleresources/information-property-list/uilaunchscreens/uidefaultlaunchscreen)

# UIDefaultLaunchScreen

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 14.0+ · iPadOS 14.0+

The default launch screen configuration.

## Details

`UIDefaultLaunchScreen`

<a id="Discussion"></a>

## Discussion

Provide the identifier, stored in the [UILaunchScreenIdentifier](uilaunchscreendefinitions/uilaunchscreenidentifier.md) key, of one of the launch screen definitions in your [UILaunchScreenDefinitions](uilaunchscreendefinitions.md) array. The system displays the named launch screen when launching your app in response to a URL scheme that you don’t enumerate in the [UIURLToLaunchStoryboardAssociations](../uilaunchstoryboards/uiurltolaunchstoryboardassociations.md) dictionary, or when the user launches your app directly.

## See Also

### Associations

- [UIURLToLaunchScreenAssociations](uiurltolaunchscreenassociations.md): The mapping of URL schemes to launch screen configurations.
