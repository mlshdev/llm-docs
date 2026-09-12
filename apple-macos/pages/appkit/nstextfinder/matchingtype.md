> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfinder/matchingtype](https://developer.apple.com/documentation/appkit/nstextfinder/matchingtype)

# NSTextFinder.MatchingType (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.7+

The following constants indicate the type of search anchor an action should perform.

## Declaration

```swift
enum MatchingType
```

## Topics

### Constants

- [NSTextFinder.MatchingType.contains](matchingtype/contains.md): The match contains the string.
- [NSTextFinder.MatchingType.startsWith](matchingtype/startswith.md): The match begins with the string.
- [NSTextFinder.MatchingType.fullWord](matchingtype/fullword.md): The match exactly matches the string.
- [NSTextFinder.MatchingType.endsWith](matchingtype/endswith.md): The match ends with the string.

### Initializers

- [init(rawValue:)](matchingtype/init%28rawvalue_%29.md)

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

- [NSTextFinder.Action](action.md): These constants specify the user interface item tags that correspond find action. These constants are passed to the [performTextFinderAction(\_:)](../nsresponder/performtextfinderaction%28__%29.md) method, the responder will call the appropriate method for the tag. That method will, in turn, determine the desired action and invoke the appropriate method in the `NSTextFinder` object’s `NSTextFinderClient` protocol.
- [Text Finder Options For The Pasteboard](../text-finder-options-for-the-pasteboard.md): The following keys are used for communicating `NSTextFinder` search options via pasteboard. Use the [textFinderOptions](../nspasteboard/pasteboardtype/textfinderoptions.md) type

# NSTextFinderMatchingType (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.7+

The following constants indicate the type of search anchor an action should perform.

## Declaration

```objectivec
enum NSTextFinderMatchingType : NSInteger;
```

## Topics

### Constants

- [NSTextFinderMatchingTypeContains](matchingtype/contains.md): The match contains the string.
- [NSTextFinderMatchingTypeStartsWith](matchingtype/startswith.md): The match begins with the string.
- [NSTextFinderMatchingTypeFullWord](matchingtype/fullword.md): The match exactly matches the string.
- [NSTextFinderMatchingTypeEndsWith](matchingtype/endswith.md): The match ends with the string.

## See Also

### Constants

- [NSTextFinderAction](action.md): These constants specify the user interface item tags that correspond find action. These constants are passed to the [performTextFinderAction:](../nsresponder/performtextfinderaction%28__%29.md) method, the responder will call the appropriate method for the tag. That method will, in turn, determine the desired action and invoke the appropriate method in the `NSTextFinder` object’s `NSTextFinderClient` protocol.
- [Text Finder Options For The Pasteboard](../text-finder-options-for-the-pasteboard.md): The following keys are used for communicating `NSTextFinder` search options via pasteboard. Use the [NSPasteboardTypeTextFinderOptions](../nspasteboard/pasteboardtype/textfinderoptions.md) type
