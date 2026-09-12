> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/find-panel-search-metadata](https://developer.apple.com/documentation/appkit/find-panel-search-metadata)

# Find Panel Search Metadata (Swift)

**Framework:** AppKit  
**Kind:** API Collection

In addition to communicating search strings via the find pasteboard, the standard Find panel for `NSTextView` also communicates search option metadata, including case sensitivity and substring matching options. This metadata is stored in a property list as the [findPanelSearchOptions](nspasteboard/pasteboardtype/findpanelsearchoptions.md) value on the global find pasteboard. As such, third party applications may store additional keys in this property list to communicate additional metadata as desired to support the various search options common to many third-party applications’ Find panels.

## Topics

### Constants

- [findPanelSearchOptions](nspasteboard/pasteboardtype/findpanelsearchoptions.md): Type for the find panel metadata property list.
- [findPanelCaseInsensitiveSearch](nspasteboard/pasteboardtype/findpanelsearchoptionkey/findpanelcaseinsensitivesearch.md): A Boolean value indicating whether the search is case-insensitive.
- [findPanelSubstringMatch](nspasteboard/pasteboardtype/findpanelsearchoptionkey/findpanelsubstringmatch.md): A number object containing the match type to use in the find panel.

## See Also

### Constants

- [NSSelectionGranularity](nsselectiongranularity.md): These constants specify how much the text view extends the selection when the user drags the mouse. They’re used by [selectionGranularity](nstextview/selectiongranularity.md), and [selectionRange(forProposedRange:granularity:)](nstextview/selectionrange%28forproposedrange_granularity_%29.md):
- [NSSelectionAffinity](nsselectionaffinity.md): These constants specify the preferred direction of selection. They’re used by [selectionAffinity](nstextview/selectionaffinity.md) and [setSelectedRange(\_:affinity:stillSelecting:)](nstextview/setselectedrange%28__affinity_stillselecting_%29.md).
- [NSFindPanelAction](nsfindpanelaction.md): These constants define the tags for [performFindPanelAction(\_:)](nstextview/performfindpanelaction%28__%29.md).
- [Input Sources Locale Identifiers](input-sources-locale-identifiers.md): Locale identifiers represent the input sources available.
- [NSFindPanelSubstringMatchType](nsfindpanelsubstringmatchtype.md): The type of substring matching used by the Find panel.

# Find Panel Search Metadata (Objective-C)

**Framework:** AppKit  
**Kind:** API Collection

In addition to communicating search strings via the find pasteboard, the standard Find panel for `NSTextView` also communicates search option metadata, including case sensitivity and substring matching options. This metadata is stored in a property list as the [NSFindPanelSearchOptionsPboardType](nspasteboard/pasteboardtype/findpanelsearchoptions.md) value on the global find pasteboard. As such, third party applications may store additional keys in this property list to communicate additional metadata as desired to support the various search options common to many third-party applications’ Find panels.

## Topics

### Constants

- [NSFindPanelSearchOptionsPboardType](nspasteboard/pasteboardtype/findpanelsearchoptions.md): Type for the find panel metadata property list.
- [NSFindPanelCaseInsensitiveSearch](nspasteboard/pasteboardtype/findpanelsearchoptionkey/findpanelcaseinsensitivesearch.md): A Boolean value indicating whether the search is case-insensitive.
- [NSFindPanelSubstringMatch](nspasteboard/pasteboardtype/findpanelsearchoptionkey/findpanelsubstringmatch.md): A number object containing the match type to use in the find panel.

## See Also

### Constants

- [NSSelectionGranularity](nsselectiongranularity.md): These constants specify how much the text view extends the selection when the user drags the mouse. They’re used by [selectionGranularity](nstextview/selectiongranularity.md), and [selectionRangeForProposedRange:granularity:](nstextview/selectionrange%28forproposedrange_granularity_%29.md):
- [NSSelectionAffinity](nsselectionaffinity.md): These constants specify the preferred direction of selection. They’re used by [selectionAffinity](nstextview/selectionaffinity.md) and [setSelectedRange:affinity:stillSelecting:](nstextview/setselectedrange%28__affinity_stillselecting_%29.md).
- [NSFindPanelAction](nsfindpanelaction.md): These constants define the tags for [performFindPanelAction:](nstextview/performfindpanelaction%28__%29.md).
- [Input Sources Locale Identifiers](input-sources-locale-identifiers.md): Locale identifiers represent the input sources available.
- [NSFindPanelSubstringMatchType](nsfindpanelsubstringmatchtype.md): The type of substring matching used by the Find panel.
