> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssearchfieldcell/recentsearches](https://developer.apple.com/documentation/appkit/nssearchfieldcell/recentsearches)

# recentSearches (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

An array of the recent search strings to display in the pop-up icon menu of the search field.

## Declaration

```swift
var recentSearches: [String]! { get set }
```

<a id="Discussion"></a>

## Discussion

This property contains an array of [NSString](https://developer.apple.com/documentation/foundation/nsstring) objects, each of which contains a search string either displayed in the search menu or from a recent autosave archive. If there have been no recent searches and no prior searches saved under an autosave name, this array may be empty. When loading your interface, you might set the value of this property to a set of saved search strings.

## See Also

### Managing recent search strings

- [maximumRecents](maximumrecents.md): The maximum number of search strings that can appear in the search menu.
- [recentsAutosaveName](recentsautosavename.md): The autosave name under which the search field automatically saves the list of recent search strings.

# recentSearches (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

An array of the recent search strings to display in the pop-up icon menu of the search field.

## Declaration

```objectivec
@property (copy, null_resettable) NSArray<NSString *> * recentSearches;
```

<a id="Discussion"></a>

## Discussion

This property contains an array of [NSString](https://developer.apple.com/documentation/foundation/nsstring) objects, each of which contains a search string either displayed in the search menu or from a recent autosave archive. If there have been no recent searches and no prior searches saved under an autosave name, this array may be empty. When loading your interface, you might set the value of this property to a set of saved search strings.

## See Also

### Managing recent search strings

- [maximumRecents](maximumrecents.md): The maximum number of search strings that can appear in the search menu.
- [recentsAutosaveName](recentsautosavename.md): The autosave name under which the search field automatically saves the list of recent search strings.
