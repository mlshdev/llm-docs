> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssearchfieldcell/maximumrecents](https://developer.apple.com/documentation/appkit/nssearchfieldcell/maximumrecents)

# maximumRecents (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The maximum number of search strings that can appear in the search menu.

## Declaration

```swift
var maximumRecents: Int { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property must be between `0` and `254`. Specifying a negative value for the property sets it to the default value, which is `10`. Specifying a value greater than `254` sets the property to `254`.

When the maximum number of search strings is exceeded, the oldest search string on the menu is dropped.

## See Also

### Managing recent search strings

- [recentSearches](recentsearches.md): An array of the recent search strings to display in the pop-up icon menu of the search field.
- [recentsAutosaveName](recentsautosavename.md): The autosave name under which the search field automatically saves the list of recent search strings.

# maximumRecents (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The maximum number of search strings that can appear in the search menu.

## Declaration

```objectivec
@property NSInteger maximumRecents;
```

<a id="Discussion"></a>

## Discussion

The value of this property must be between `0` and `254`. Specifying a negative value for the property sets it to the default value, which is `10`. Specifying a value greater than `254` sets the property to `254`.

When the maximum number of search strings is exceeded, the oldest search string on the menu is dropped.

## See Also

### Managing recent search strings

- [recentSearches](recentsearches.md): An array of the recent search strings to display in the pop-up icon menu of the search field.
- [recentsAutosaveName](recentsautosavename.md): The autosave name under which the search field automatically saves the list of recent search strings.
