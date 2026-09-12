> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssearchfield/recentsearches](https://developer.apple.com/documentation/appkit/nssearchfield/recentsearches)

# recentSearches (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The list of recent search strings for the control.

## Declaration

```swift
var recentSearches: [String] { get set }
```

<a id="Discussion"></a>

## Discussion

An array of `NSString` objects, each of which contains a search string either displayed in the search menu or from a recent autosave archive. If there have been no recent searches and no prior searches saved under an autosave name, this array may be empty.

## See Also

### Managing Recent Searches

- [maximumRecents](maximumrecents.md): The maximum number of search strings that can appear in the search menu.
- [recentsAutosaveName](recentsautosavename-swift.property.md): The name under which the search field automatically archives the list of recent search strings.
- [NSSearchField.RecentsAutosaveName](recentsautosavename-swift.typealias.md): The string that stores the name under which a search field automatically archives a list of recent search strings.

# recentSearches (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The list of recent search strings for the control.

## Declaration

```objectivec
@property (copy) NSArray<NSString *> * recentSearches;
```

<a id="Discussion"></a>

## Discussion

An array of `NSString` objects, each of which contains a search string either displayed in the search menu or from a recent autosave archive. If there have been no recent searches and no prior searches saved under an autosave name, this array may be empty.

## See Also

### Managing Recent Searches

- [maximumRecents](maximumrecents.md): The maximum number of search strings that can appear in the search menu.
- [recentsAutosaveName](recentsautosavename-swift.property.md): The name under which the search field automatically archives the list of recent search strings.
- [NSSearchFieldRecentsAutosaveName](recentsautosavename-swift.typealias.md): The string that stores the name under which a search field automatically archives a list of recent search strings.
