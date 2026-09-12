> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifindinteraction/optionsmenuprovider](https://developer.apple.com/documentation/uikit/uifindinteraction/optionsmenuprovider)

# optionsMenuProvider (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A closure that populates the search options for a find interaction.

## Declaration

```swift
var optionsMenuProvider: (([UIMenuElement]) -> UIMenu?)? { get set }
```

<a id="Discussion"></a>

## Discussion

You use this closure to modify, augement or omit options from the default set available in [UITextSearchOptions](../uitextsearchoptions.md).

## See Also

### Configuring the find panel

- [isFindNavigatorVisible](isfindnavigatorvisible.md): A Boolean value that indicates when the find panel displays onscreen.
- [searchText](searchtext.md): The search query with which to prepopulate the find panel’s search text field.
- [replacementText](replacementtext.md): The replacement string with which to prepopulate the find panel’s replace text field.

# optionsMenuProvider (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A closure that populates the search options for a find interaction.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) UIMenu * (^optionsMenuProvider)(NSArray<UIMenuElement *> *defaultOptions);
```

<a id="Discussion"></a>

## Discussion

You use this closure to modify, augement or omit options from the default set available in [UITextSearchOptions](../uitextsearchoptions.md).

## See Also

### Configuring the find panel

- [findNavigatorVisible](isfindnavigatorvisible.md): A Boolean value that indicates when the find panel displays onscreen.
- [searchText](searchtext.md): The search query with which to prepopulate the find panel’s search text field.
- [replacementText](replacementtext.md): The replacement string with which to prepopulate the find panel’s replace text field.
