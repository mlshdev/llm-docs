> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboard/pasteboardtype/findpanelsearchoptionkey/findpanelsubstringmatch](https://developer.apple.com/documentation/appkit/nspasteboard/pasteboardtype/findpanelsearchoptionkey/findpanelsubstringmatch)

# findPanelSubstringMatch (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.5+

A number object containing the match type to use in the find panel.

## Declaration

```swift
static let findPanelSubstringMatch: NSPasteboard.PasteboardType.FindPanelSearchOptionKey
```

<a id="Discussion"></a>

## Discussion

The value of this key is an [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) object containing one of the values defined in [NSFindPanelSubstringMatchType](../../../nsfindpanelsubstringmatchtype.md).

## See Also

### Constants

- [findPanelSearchOptions](../findpanelsearchoptions.md): Type for the find panel metadata property list.
- [findPanelCaseInsensitiveSearch](findpanelcaseinsensitivesearch.md): A Boolean value indicating whether the search is case-insensitive.

# NSFindPanelSubstringMatch (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

A number object containing the match type to use in the find panel.

## Declaration

```objectivec
extern NSPasteboardTypeFindPanelSearchOptionKey NSFindPanelSubstringMatch;
```

<a id="Discussion"></a>

## Discussion

The value of this key is an [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) object containing one of the values defined in [NSFindPanelSubstringMatchType](../../../nsfindpanelsubstringmatchtype.md).

## See Also

### Constants

- [NSFindPanelSearchOptionsPboardType](../findpanelsearchoptions.md): Type for the find panel metadata property list.
- [NSFindPanelCaseInsensitiveSearch](findpanelcaseinsensitivesearch.md): A Boolean value indicating whether the search is case-insensitive.
