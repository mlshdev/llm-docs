> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/uilaunchstoryboards/uiurltolaunchstoryboardassociations](https://developer.apple.com/documentation/bundleresources/information-property-list/uilaunchstoryboards/uiurltolaunchstoryboardassociations)

# UIURLToLaunchStoryboardAssociations

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 9.0+ · iPadOS 9.0+

The user-defined storyboard identifiers that associate with supported schemes.

## Details

`UIURLToLaunchStoryboardAssociations`

## Properties

- `Any Key` — `string`:

<a id="Discussion"></a>

## Discussion

The keys for this dictionary are the URL schemes defined in [CFBundleURLTypes](../cfbundleurltypes.md) for your app. The value for the specified key is a [UILaunchStoryboardIdentifier](uilaunchstoryboarddefinitions/uilaunchstoryboardidentifier.md) from the [UILaunchStoryboardDefinitions](uilaunchstoryboarddefinitions.md) array.
