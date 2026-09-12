> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/nsextension/nsextensionprincipalclass](https://developer.apple.com/documentation/bundleresources/information-property-list/nsextension/nsextensionprincipalclass)

# NSExtensionPrincipalClass

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · macOS 10.10+ · visionOS 1.0+

The custom class that implements an app extension’s primary view or functionality.

## Details

`NSExtensionPrincipalClass`

<a id="Discussion"></a>

## Discussion

This key is mutually exclusive with [NSExtensionMainStoryboard](nsextensionmainstoryboard.md). Typically, Xcode sets the value of this key when creating an App Extension target in your project. If you change the name of the specified class, remember to update the value of this key.

> **Important**

>  If the app extension’s `Info.plist` file contains both keys, the system won’t load the extension.

## See Also

### Appearance and Presentation

- [NSExtensionActionWantsFullScreenPresentation](nsextensionactionwantsfullscreenpresentation.md): A Boolean value indicating whether the Action extension is presented in full screen.
- [NSExtensionMainStoryboard](nsextensionmainstoryboard.md): The name of the app extension’s main storyboard file.
- [NSExtensionOverridesHostUIAppearance](nsextensionoverrideshostuiappearance.md): A Boolean value indicating whether the app extension ignores appearance changes made by the host app.
- [NSExtensionPointIdentifier](nsextensionpointidentifier.md): The extension point that supports an app extension.
