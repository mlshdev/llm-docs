> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfindpanelaction](https://developer.apple.com/documentation/appkit/nsfindpanelaction)

# NSFindPanelAction (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

These constants define the tags for [performFindPanelAction(\_:)](nstextview/performfindpanelaction%28__%29.md).

## Declaration

```swift
enum NSFindPanelAction
```

## Topics

### Constants

- [NSFindPanelAction.showFindPanel](nsfindpanelaction/showfindpanel.md): Deprecated. Displays the find panel.
- [NSFindPanelAction.next](nsfindpanelaction/next.md): Finds the next instance of the queried text.
- [NSFindPanelAction.previous](nsfindpanelaction/previous.md): Finds the previous instance of the queried text.
- [NSFindPanelAction.replaceAll](nsfindpanelaction/replaceall.md): Replaces all query instances within the text view.
- [NSFindPanelAction.replace](nsfindpanelaction/replace.md): Replaces a single query instance within the text view.
- [NSFindPanelAction.replaceAndFind](nsfindpanelaction/replaceandfind.md): Replaces a single query instance and finds the next.
- [NSFindPanelAction.setFindString](nsfindpanelaction/setfindstring.md): Sets the query string to the current selection.
- [NSFindPanelAction.replaceAllInSelection](nsfindpanelaction/replaceallinselection.md): Replaces all query instances within the selection.
- [NSFindPanelAction.selectAll](nsfindpanelaction/selectall.md): Selects all query instances in the text view.
- [NSFindPanelAction.selectAllInSelection](nsfindpanelaction/selectallinselection.md): Selects all query instances within the selection.

### Initializers

- [init(rawValue:)](nsfindpanelaction/init%28rawvalue_%29.md)

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

- [NSSelectionGranularity](nsselectiongranularity.md): These constants specify how much the text view extends the selection when the user drags the mouse. They’re used by [selectionGranularity](nstextview/selectiongranularity.md), and [selectionRange(forProposedRange:granularity:)](nstextview/selectionrange%28forproposedrange_granularity_%29.md):
- [NSSelectionAffinity](nsselectionaffinity.md): These constants specify the preferred direction of selection. They’re used by [selectionAffinity](nstextview/selectionaffinity.md) and [setSelectedRange(\_:affinity:stillSelecting:)](nstextview/setselectedrange%28__affinity_stillselecting_%29.md).
- [Input Sources Locale Identifiers](input-sources-locale-identifiers.md): Locale identifiers represent the input sources available.
- [Find Panel Search Metadata](find-panel-search-metadata.md): In addition to communicating search strings via the find pasteboard, the standard Find panel for `NSTextView` also communicates search option metadata, including case sensitivity and substring matching options. This metadata is stored in a property list as the [findPanelSearchOptions](nspasteboard/pasteboardtype/findpanelsearchoptions.md) value on the global find pasteboard. As such, third party applications may store additional keys in this property list to communicate additional metadata as desired to support the various search options common to many third-party applications’ Find panels.
- [NSFindPanelSubstringMatchType](nsfindpanelsubstringmatchtype.md): The type of substring matching used by the Find panel.

# NSFindPanelAction (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

These constants define the tags for [performFindPanelAction:](nstextview/performfindpanelaction%28__%29.md).

## Declaration

```objectivec
enum NSFindPanelAction : NSUInteger;
```

## Topics

### Constants

- [NSFindPanelActionShowFindPanel](nsfindpanelaction/showfindpanel.md): Deprecated. Displays the find panel.
- [NSFindPanelActionNext](nsfindpanelaction/next.md): Finds the next instance of the queried text.
- [NSFindPanelActionPrevious](nsfindpanelaction/previous.md): Finds the previous instance of the queried text.
- [NSFindPanelActionReplaceAll](nsfindpanelaction/replaceall.md): Replaces all query instances within the text view.
- [NSFindPanelActionReplace](nsfindpanelaction/replace.md): Replaces a single query instance within the text view.
- [NSFindPanelActionReplaceAndFind](nsfindpanelaction/replaceandfind.md): Replaces a single query instance and finds the next.
- [NSFindPanelActionSetFindString](nsfindpanelaction/setfindstring.md): Sets the query string to the current selection.
- [NSFindPanelActionReplaceAllInSelection](nsfindpanelaction/replaceallinselection.md): Replaces all query instances within the selection.
- [NSFindPanelActionSelectAll](nsfindpanelaction/selectall.md): Selects all query instances in the text view.
- [NSFindPanelActionSelectAllInSelection](nsfindpanelaction/selectallinselection.md): Selects all query instances within the selection.

## See Also

### Constants

- [NSSelectionGranularity](nsselectiongranularity.md): These constants specify how much the text view extends the selection when the user drags the mouse. They’re used by [selectionGranularity](nstextview/selectiongranularity.md), and [selectionRangeForProposedRange:granularity:](nstextview/selectionrange%28forproposedrange_granularity_%29.md):
- [NSSelectionAffinity](nsselectionaffinity.md): These constants specify the preferred direction of selection. They’re used by [selectionAffinity](nstextview/selectionaffinity.md) and [setSelectedRange:affinity:stillSelecting:](nstextview/setselectedrange%28__affinity_stillselecting_%29.md).
- [Input Sources Locale Identifiers](input-sources-locale-identifiers.md): Locale identifiers represent the input sources available.
- [Find Panel Search Metadata](find-panel-search-metadata.md): In addition to communicating search strings via the find pasteboard, the standard Find panel for `NSTextView` also communicates search option metadata, including case sensitivity and substring matching options. This metadata is stored in a property list as the [NSFindPanelSearchOptionsPboardType](nspasteboard/pasteboardtype/findpanelsearchoptions.md) value on the global find pasteboard. As such, third party applications may store additional keys in this property list to communicate additional metadata as desired to support the various search options common to many third-party applications’ Find panels.
- [NSFindPanelSubstringMatchType](nsfindpanelsubstringmatchtype.md): The type of substring matching used by the Find panel.
