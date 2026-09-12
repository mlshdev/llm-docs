> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/text-finder-options-for-the-pasteboard](https://developer.apple.com/documentation/appkit/text-finder-options-for-the-pasteboard)

# Text Finder Options For The Pasteboard (Swift)

**Framework:** AppKit  
**Kind:** API Collection

The following keys are used for communicating `NSTextFinder` search options via pasteboard. Use the [textFinderOptions](nspasteboard/pasteboardtype/textfinderoptions.md) type

## Topics

### Constants

- [textFinderCaseInsensitiveKey](nspasteboard/pasteboardtype/textfinderoptionkey/textfindercaseinsensitivekey.md): A Boolean value indicating whether the search is case insensitive.
- [textFinderMatchingTypeKey](nspasteboard/pasteboardtype/textfinderoptionkey/textfindermatchingtypekey.md): A number object containing the match type to use.

## See Also

### Constants

- [NSTextFinder.Action](nstextfinder/action.md): These constants specify the user interface item tags that correspond find action. These constants are passed to the [performTextFinderAction(\_:)](nsresponder/performtextfinderaction%28__%29.md) method, the responder will call the appropriate method for the tag. That method will, in turn, determine the desired action and invoke the appropriate method in the `NSTextFinder` object’s `NSTextFinderClient` protocol.
- [NSTextFinder.MatchingType](nstextfinder/matchingtype.md): The following constants indicate the type of search anchor an action should perform.

# Text Finder Options For The Pasteboard (Objective-C)

**Framework:** AppKit  
**Kind:** API Collection

The following keys are used for communicating `NSTextFinder` search options via pasteboard. Use the [NSPasteboardTypeTextFinderOptions](nspasteboard/pasteboardtype/textfinderoptions.md) type

## Topics

### Constants

- [NSTextFinderCaseInsensitiveKey](nspasteboard/pasteboardtype/textfinderoptionkey/textfindercaseinsensitivekey.md): A Boolean value indicating whether the search is case insensitive.
- [NSTextFinderMatchingTypeKey](nspasteboard/pasteboardtype/textfinderoptionkey/textfindermatchingtypekey.md): A number object containing the match type to use.

## See Also

### Constants

- [NSTextFinderAction](nstextfinder/action.md): These constants specify the user interface item tags that correspond find action. These constants are passed to the [performTextFinderAction:](nsresponder/performtextfinderaction%28__%29.md) method, the responder will call the appropriate method for the tag. That method will, in turn, determine the desired action and invoke the appropriate method in the `NSTextFinder` object’s `NSTextFinderClient` protocol.
- [NSTextFinderMatchingType](nstextfinder/matchingtype.md): The following constants indicate the type of search anchor an action should perform.
