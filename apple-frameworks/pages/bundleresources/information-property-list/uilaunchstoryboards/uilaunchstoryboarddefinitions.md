> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/bundleresources/information-property-list/uilaunchstoryboards/uilaunchstoryboarddefinitions

# UILaunchStoryboardDefinitions

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 9.0+ · iPadOS 9.0+

An array of dictionaries mapping launch storyboard identifiers to storyboards.

## Details

`UILaunchStoryboardDefinitions`

<a id="Discussion"></a>

## Discussion

Each dictionary has [UILaunchStoryboardFile](uilaunchstoryboarddefinitions/uilaunchstoryboardfile.md) and [UILaunchStoryboardIdentifier](uilaunchstoryboarddefinitions/uilaunchstoryboardidentifier.md) keys, associating a storyboard file or xib with an identifier.

## Topics

### Specifying Storyboard Identifiers

- [UILaunchStoryboardIdentifier](uilaunchstoryboarddefinitions/uilaunchstoryboardidentifier.md): A user-specified identifier for a launch storyboard.
- [UILaunchStoryboardFile](uilaunchstoryboarddefinitions/uilaunchstoryboardfile.md): A launch storyboard file or xib.

## See Also

### Specifying Launch Storyboards

- [UIDefaultLaunchStoryboard](uidefaultlaunchstoryboard.md): The identifier of the default launch storyboard to use.
