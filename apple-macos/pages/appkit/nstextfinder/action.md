> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfinder/action](https://developer.apple.com/documentation/appkit/nstextfinder/action)

# NSTextFinder.Action (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.7+

These constants specify the user interface item tags that correspond find action. These constants are passed to the [performTextFinderAction(\_:)](../nsresponder/performtextfinderaction%28__%29.md) method, the responder will call the appropriate method for the tag. That method will, in turn, determine the desired action and invoke the appropriate method in the `NSTextFinder` object’s `NSTextFinderClient` protocol.

## Declaration

```swift
enum Action
```

## Topics

### Constants

- [NSTextFinder.Action.showFindInterface](action/showfindinterface.md): The find bar interface is displayed.
- [NSTextFinder.Action.nextMatch](action/nextmatch.md): The next match, if any, is displayed.
- [NSTextFinder.Action.previousMatch](action/previousmatch.md): The previous match, if any, is displayed.
- [NSTextFinder.Action.replaceAll](action/replaceall.md): All occurrences of the string are replaced.
- [NSTextFinder.Action.replace](action/replace.md): Replaces a single instance of the string.
- [NSTextFinder.Action.replaceAndFind](action/replaceandfind.md): Replaces a single instance of the string and searches for the next match.
- [NSTextFinder.Action.setSearchString](action/setsearchstring.md): Sets the search string.
- [NSTextFinder.Action.replaceAllInSelection](action/replaceallinselection.md): Replaces all occurrences of the string within the current selection.
- [NSTextFinder.Action.selectAll](action/selectall.md): Selects all matching search strings.
- [NSTextFinder.Action.selectAllInSelection](action/selectallinselection.md): Selects all matching search strings within the current selection.
- [NSTextFinder.Action.hideFindInterface](action/hidefindinterface.md): Hides the find bar interface.
- [NSTextFinder.Action.showReplaceInterface](action/showreplaceinterface.md): Displays the find bar interface including the replace functionality.
- [NSTextFinder.Action.hideReplaceInterface](action/hidereplaceinterface.md): Displays the find bar interface including the replace functionality.

### Initializers

- [init(rawValue:)](action/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [Text Finder Options For The Pasteboard](../text-finder-options-for-the-pasteboard.md): The following keys are used for communicating `NSTextFinder` search options via pasteboard. Use the [textFinderOptions](../nspasteboard/pasteboardtype/textfinderoptions.md) type
- [NSTextFinder.MatchingType](matchingtype.md): The following constants indicate the type of search anchor an action should perform.

# NSTextFinderAction (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.7+

These constants specify the user interface item tags that correspond find action. These constants are passed to the [performTextFinderAction:](../nsresponder/performtextfinderaction%28__%29.md) method, the responder will call the appropriate method for the tag. That method will, in turn, determine the desired action and invoke the appropriate method in the `NSTextFinder` object’s `NSTextFinderClient` protocol.

## Declaration

```objectivec
enum NSTextFinderAction : NSInteger;
```

## Topics

### Constants

- [NSTextFinderActionShowFindInterface](action/showfindinterface.md): The find bar interface is displayed.
- [NSTextFinderActionNextMatch](action/nextmatch.md): The next match, if any, is displayed.
- [NSTextFinderActionPreviousMatch](action/previousmatch.md): The previous match, if any, is displayed.
- [NSTextFinderActionReplaceAll](action/replaceall.md): All occurrences of the string are replaced.
- [NSTextFinderActionReplace](action/replace.md): Replaces a single instance of the string.
- [NSTextFinderActionReplaceAndFind](action/replaceandfind.md): Replaces a single instance of the string and searches for the next match.
- [NSTextFinderActionSetSearchString](action/setsearchstring.md): Sets the search string.
- [NSTextFinderActionReplaceAllInSelection](action/replaceallinselection.md): Replaces all occurrences of the string within the current selection.
- [NSTextFinderActionSelectAll](action/selectall.md): Selects all matching search strings.
- [NSTextFinderActionSelectAllInSelection](action/selectallinselection.md): Selects all matching search strings within the current selection.
- [NSTextFinderActionHideFindInterface](action/hidefindinterface.md): Hides the find bar interface.
- [NSTextFinderActionShowReplaceInterface](action/showreplaceinterface.md): Displays the find bar interface including the replace functionality.
- [NSTextFinderActionHideReplaceInterface](action/hidereplaceinterface.md): Displays the find bar interface including the replace functionality.

## See Also

### Constants

- [Text Finder Options For The Pasteboard](../text-finder-options-for-the-pasteboard.md): The following keys are used for communicating `NSTextFinder` search options via pasteboard. Use the [NSPasteboardTypeTextFinderOptions](../nspasteboard/pasteboardtype/textfinderoptions.md) type
- [NSTextFinderMatchingType](matchingtype.md): The following constants indicate the type of search anchor an action should perform.
