> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsselectionaffinity](https://developer.apple.com/documentation/appkit/nsselectionaffinity)

# NSSelectionAffinity (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

These constants specify the preferred direction of selection. They’re used by [selectionAffinity](nstextview/selectionaffinity.md) and [setSelectedRange(\_:affinity:stillSelecting:)](nstextview/setselectedrange%28__affinity_stillselecting_%29.md).

## Declaration

```swift
enum NSSelectionAffinity
```

## Topics

### Constants

- [NSSelectionAffinity.upstream](nsselectionaffinity/upstream.md): The selection is moving toward the top of the document.
- [NSSelectionAffinity.downstream](nsselectionaffinity/downstream.md): The selection is moving toward the bottom of the document.

### Initializers

- [init(rawValue:)](nsselectionaffinity/init%28rawvalue_%29.md)

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
- [NSFindPanelAction](nsfindpanelaction.md): These constants define the tags for [performFindPanelAction(\_:)](nstextview/performfindpanelaction%28__%29.md).
- [Input Sources Locale Identifiers](input-sources-locale-identifiers.md): Locale identifiers represent the input sources available.
- [Find Panel Search Metadata](find-panel-search-metadata.md): In addition to communicating search strings via the find pasteboard, the standard Find panel for `NSTextView` also communicates search option metadata, including case sensitivity and substring matching options. This metadata is stored in a property list as the [findPanelSearchOptions](nspasteboard/pasteboardtype/findpanelsearchoptions.md) value on the global find pasteboard. As such, third party applications may store additional keys in this property list to communicate additional metadata as desired to support the various search options common to many third-party applications’ Find panels.
- [NSFindPanelSubstringMatchType](nsfindpanelsubstringmatchtype.md): The type of substring matching used by the Find panel.

# NSSelectionAffinity (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

These constants specify the preferred direction of selection. They’re used by [selectionAffinity](nstextview/selectionaffinity.md) and [setSelectedRange:affinity:stillSelecting:](nstextview/setselectedrange%28__affinity_stillselecting_%29.md).

## Declaration

```objectivec
enum NSSelectionAffinity : NSUInteger;
```

## Topics

### Constants

- [NSSelectionAffinityUpstream](nsselectionaffinity/upstream.md): The selection is moving toward the top of the document.
- [NSSelectionAffinityDownstream](nsselectionaffinity/downstream.md): The selection is moving toward the bottom of the document.

## See Also

### Constants

- [NSSelectionGranularity](nsselectiongranularity.md): These constants specify how much the text view extends the selection when the user drags the mouse. They’re used by [selectionGranularity](nstextview/selectiongranularity.md), and [selectionRangeForProposedRange:granularity:](nstextview/selectionrange%28forproposedrange_granularity_%29.md):
- [NSFindPanelAction](nsfindpanelaction.md): These constants define the tags for [performFindPanelAction:](nstextview/performfindpanelaction%28__%29.md).
- [Input Sources Locale Identifiers](input-sources-locale-identifiers.md): Locale identifiers represent the input sources available.
- [Find Panel Search Metadata](find-panel-search-metadata.md): In addition to communicating search strings via the find pasteboard, the standard Find panel for `NSTextView` also communicates search option metadata, including case sensitivity and substring matching options. This metadata is stored in a property list as the [NSFindPanelSearchOptionsPboardType](nspasteboard/pasteboardtype/findpanelsearchoptions.md) value on the global find pasteboard. As such, third party applications may store additional keys in this property list to communicate additional metadata as desired to support the various search options common to many third-party applications’ Find panels.
- [NSFindPanelSubstringMatchType](nsfindpanelsubstringmatchtype.md): The type of substring matching used by the Find panel.
