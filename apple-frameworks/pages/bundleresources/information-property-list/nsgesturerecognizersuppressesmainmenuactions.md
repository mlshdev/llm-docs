> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/nsgesturerecognizersuppressesmainmenuactions](https://developer.apple.com/documentation/bundleresources/information-property-list/nsgesturerecognizersuppressesmainmenuactions)

# NSGestureRecognizerSuppressesMainMenuActions

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** macOS 27.0+

A Boolean value that indicates whether keyboard shortcuts for menu items are ignored while any gesture recognizer is active.

## Details

`NSGestureRecognizerSuppressesMainMenuActions`

<a id="Discussion"></a>

## Discussion

Set this key to `YES` if your app uses gesture recognizers in contexts where accidental keyboard shortcuts would interfere with the gesture interaction.

AppKit always suppresses keyboard shortcuts during an exclusive gesture (one that locks input to a single view), so this key is only relevant if your app also triggers gestures that are not exclusive.
