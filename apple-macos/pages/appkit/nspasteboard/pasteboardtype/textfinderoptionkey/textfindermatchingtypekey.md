> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboard/pasteboardtype/textfinderoptionkey/textfindermatchingtypekey](https://developer.apple.com/documentation/appkit/nspasteboard/pasteboardtype/textfinderoptionkey/textfindermatchingtypekey)

# textFinderMatchingTypeKey (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.7+

A number object containing the match type to use.

## Declaration

```swift
static let textFinderMatchingTypeKey: NSPasteboard.PasteboardType.TextFinderOptionKey
```

<a id="Discussion"></a>

## Discussion

The value of this key must be an [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) containing an [NSTextFinder.MatchingType](../../../nstextfinder/matchingtype.md) value that indicates the type of search matching to perform.

## See Also

### Option Keys

- [textFinderCaseInsensitiveKey](textfindercaseinsensitivekey.md): A Boolean value indicating whether the search is case insensitive.

# NSTextFinderMatchingTypeKey (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.7+

A number object containing the match type to use.

## Declaration

```objectivec
extern NSPasteboardTypeTextFinderOptionKey const NSTextFinderMatchingTypeKey;
```

<a id="Discussion"></a>

## Discussion

The value of this key must be an [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) containing an [NSTextFinderMatchingType](../../../nstextfinder/matchingtype.md) value that indicates the type of search matching to perform.

## See Also

### Option Keys

- [NSTextFinderCaseInsensitiveKey](textfindercaseinsensitivekey.md): A Boolean value indicating whether the search is case insensitive.
