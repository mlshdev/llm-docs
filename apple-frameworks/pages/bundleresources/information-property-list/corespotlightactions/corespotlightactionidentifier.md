> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/corespotlightactions/corespotlightactionidentifier](https://developer.apple.com/documentation/bundleresources/information-property-list/corespotlightactions/corespotlightactionidentifier)

# CoreSpotlightActionIdentifier

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · visionOS 1.0+

A string an app defines to identify the action.

## Details

`CoreSpotlightActionIdentifier`

<a id="Discussion"></a>

## Discussion

Core Spotlight includes the value of this key in the `userInfo` dictionary of the [NSUserActivity](../../../foundation/nsuseractivity.md) when it invokes the app.

## See Also

### Action Properties

- [CoreSpotlightActionTitle](corespotlightactiontitle.md): The user-visible string that Spotlight displays as the title of the action.
- [CoreSpotlightActionSymbolImage](corespotlightactionsymbolimage.md): The name of a SF Symbol to display next to the action’s title.
