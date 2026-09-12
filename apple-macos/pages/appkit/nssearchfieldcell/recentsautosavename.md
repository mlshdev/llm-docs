> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssearchfieldcell/recentsautosavename](https://developer.apple.com/documentation/appkit/nssearchfieldcell/recentsautosavename)

# recentsAutosaveName (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The autosave name under which the search field automatically saves the list of recent search strings.

## Declaration

```swift
var recentsAutosaveName: NSSearchField.RecentsAutosaveName? { get set }
```

<a id="Discussion"></a>

## Discussion

The autosave name is used as a key in the standard user defaults to save the recent searches. If you specify `nil` or an empty string for this parameter, no autosave name is set and searches are not automatically saved.

## See Also

### Managing recent search strings

- [maximumRecents](maximumrecents.md): The maximum number of search strings that can appear in the search menu.
- [recentSearches](recentsearches.md): An array of the recent search strings to display in the pop-up icon menu of the search field.

# recentsAutosaveName (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The autosave name under which the search field automatically saves the list of recent search strings.

## Declaration

```objectivec
@property (copy, nullable) NSSearchFieldRecentsAutosaveName recentsAutosaveName;
```

<a id="Discussion"></a>

## Discussion

The autosave name is used as a key in the standard user defaults to save the recent searches. If you specify `nil` or an empty string for this parameter, no autosave name is set and searches are not automatically saved.

## See Also

### Managing recent search strings

- [maximumRecents](maximumrecents.md): The maximum number of search strings that can appear in the search menu.
- [recentSearches](recentsearches.md): An array of the recent search strings to display in the pop-up icon menu of the search field.
