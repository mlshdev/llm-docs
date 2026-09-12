> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssearchfield/maximumrecents](https://developer.apple.com/documentation/appkit/nssearchfield/maximumrecents)

# maximumRecents (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The maximum number of search strings that can appear in the search menu.

## Declaration

```swift
var maximumRecents: Int { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property must be between 0 and 254. Specifying a negative value for the property sets it to the default value, which is 10. Specifying a value greater than 254 sets the property to 254.

When the maximum number of search strings is exceeded, the oldest search string on the menu is dropped.

## See Also

### Managing Recent Searches

- [recentSearches](recentsearches.md): The list of recent search strings for the control.
- [recentsAutosaveName](recentsautosavename-swift.property.md): The name under which the search field automatically archives the list of recent search strings.
- [NSSearchField.RecentsAutosaveName](recentsautosavename-swift.typealias.md): The string that stores the name under which a search field automatically archives a list of recent search strings.

# maximumRecents (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The maximum number of search strings that can appear in the search menu.

## Declaration

```objectivec
@property NSInteger maximumRecents;
```

<a id="Discussion"></a>

## Discussion

The value of this property must be between 0 and 254. Specifying a negative value for the property sets it to the default value, which is 10. Specifying a value greater than 254 sets the property to 254.

When the maximum number of search strings is exceeded, the oldest search string on the menu is dropped.

## See Also

### Managing Recent Searches

- [recentSearches](recentsearches.md): The list of recent search strings for the control.
- [recentsAutosaveName](recentsautosavename-swift.property.md): The name under which the search field automatically archives the list of recent search strings.
- [NSSearchFieldRecentsAutosaveName](recentsautosavename-swift.typealias.md): The string that stores the name under which a search field automatically archives a list of recent search strings.
