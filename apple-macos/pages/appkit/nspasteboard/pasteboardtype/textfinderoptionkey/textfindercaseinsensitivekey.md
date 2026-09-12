> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboard/pasteboardtype/textfinderoptionkey/textfindercaseinsensitivekey](https://developer.apple.com/documentation/appkit/nspasteboard/pasteboardtype/textfinderoptionkey/textfindercaseinsensitivekey)

# textFinderCaseInsensitiveKey (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.7+

A Boolean value indicating whether the search is case insensitive.

## Declaration

```swift
static let textFinderCaseInsensitiveKey: NSPasteboard.PasteboardType.TextFinderOptionKey
```

<a id="Discussion"></a>

## Discussion

The value of this key must be an [NSValue](https://developer.apple.com/documentation/foundation/nsvalue) object containing a Boolean value. The value [true](https://developer.apple.com/documentation/swift/true) indicates a case-insensitive search; [false](https://developer.apple.com/documentation/swift/false) indicates a case-sensitive search.

## See Also

### Option Keys

- [textFinderMatchingTypeKey](textfindermatchingtypekey.md): A number object containing the match type to use.

# NSTextFinderCaseInsensitiveKey (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.7+

A Boolean value indicating whether the search is case insensitive.

## Declaration

```objectivec
extern NSPasteboardTypeTextFinderOptionKey const NSTextFinderCaseInsensitiveKey;
```

<a id="Discussion"></a>

## Discussion

The value of this key must be an [NSValue](https://developer.apple.com/documentation/foundation/nsvalue) object containing a Boolean value. The value [true](https://developer.apple.com/documentation/swift/true) indicates a case-insensitive search; [false](https://developer.apple.com/documentation/swift/false) indicates a case-sensitive search.

## See Also

### Option Keys

- [NSTextFinderMatchingTypeKey](textfindermatchingtypekey.md): A number object containing the match type to use.
