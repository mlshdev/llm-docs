> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchsuggestion/representedobject](https://developer.apple.com/documentation/uikit/uisearchsuggestion/representedobject)

# representedObject (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

An object for tracking supplementary information about the search suggestion.

## Declaration

```swift
var representedObject: Any? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to associate the search suggestion with a corresponding object.

## See Also

### Describing a search suggestion

- [localizedSuggestion](localizedsuggestion.md): A label for the suggestion, usually the search term the suggestion represents.
- [localizedDescription](localizeddescription.md): A description of the suggestion.
- [localizedAttributedSuggestion](localizedattributedsuggestion.md): An attributed label for the suggestion, usually the search term the suggestion represents.
- [iconImage](iconimage.md): An image for display on the suggestion.

# representedObject (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

An object for tracking supplementary information about the search suggestion.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) id representedObject;
```

<a id="Discussion"></a>

## Discussion

Use this property to associate the search suggestion with a corresponding object.

## See Also

### Describing a search suggestion

- [localizedSuggestion](localizedsuggestion.md): A label for the suggestion, usually the search term the suggestion represents.
- [localizedDescription](localizeddescription.md): A description of the suggestion.
- [localizedAttributedSuggestion](localizedattributedsuggestion.md): An attributed label for the suggestion, usually the search term the suggestion represents.
- [iconImage](iconimage.md): An image for display on the suggestion.
