> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/bundleresources/information-property-list/uilaunchscreens/uilaunchscreendefinitions/uilaunchscreenidentifier

# UILaunchScreenIdentifier

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 14.0+ · iPadOS 14.0+

A unique name for the launch screen configuration.

## Details

`UILaunchScreenIdentifier`

<a id="Discussion"></a>

## Discussion

You can choose any name you want for the identifier, as long as it’s unique among all your app’s configuration identifiers. Use this value to refer to the configuration when storing a URL to configuration mapping as the value for the [UIURLToLaunchScreenAssociations](../uiurltolaunchscreenassociations.md) key, or when specifying a default configuration with the [UIDefaultLaunchScreen](../uidefaultlaunchscreen.md) key.
