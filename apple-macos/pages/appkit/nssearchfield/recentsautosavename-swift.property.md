> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssearchfield/recentsautosavename-swift.property](https://developer.apple.com/documentation/appkit/nssearchfield/recentsautosavename-swift.property)

# recentsAutosaveName (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The name under which the search field automatically archives the list of recent search strings.

## Declaration

```swift
var recentsAutosaveName: NSSearchField.RecentsAutosaveName? { get set }
```

<a id="Discussion"></a>

## Discussion

Used as a key in the standard user defaults to save the recent searches. If you specify `nil` or an empty string for this property, no autosave name is set and searches aren’t autosaved.

## See Also

### Managing Recent Searches

- [recentSearches](recentsearches.md): The list of recent search strings for the control.
- [maximumRecents](maximumrecents.md): The maximum number of search strings that can appear in the search menu.
- [NSSearchField.RecentsAutosaveName](recentsautosavename-swift.typealias.md): The string that stores the name under which a search field automatically archives a list of recent search strings.

# recentsAutosaveName (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The name under which the search field automatically archives the list of recent search strings.

## Declaration

```objectivec
@property (copy, nullable) NSSearchFieldRecentsAutosaveName recentsAutosaveName;
```

<a id="Discussion"></a>

## Discussion

Used as a key in the standard user defaults to save the recent searches. If you specify `nil` or an empty string for this property, no autosave name is set and searches aren’t autosaved.

## See Also

### Managing Recent Searches

- [recentSearches](recentsearches.md): The list of recent search strings for the control.
- [maximumRecents](maximumrecents.md): The maximum number of search strings that can appear in the search menu.
- [NSSearchFieldRecentsAutosaveName](recentsautosavename-swift.typealias.md): The string that stores the name under which a search field automatically archives a list of recent search strings.
