> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifindinteraction/isfindnavigatorvisible](https://developer.apple.com/documentation/uikit/uifindinteraction/isfindnavigatorvisible)

# isFindNavigatorVisible (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A Boolean value that indicates when the find panel displays onscreen.

## Declaration

```swift
var isFindNavigatorVisible: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is `YES` when the find panel displays; otherwise, `NO`.

## See Also

### Configuring the find panel

- [searchText](searchtext.md): The search query with which to prepopulate the find panel’s search text field.
- [replacementText](replacementtext.md): The replacement string with which to prepopulate the find panel’s replace text field.
- [optionsMenuProvider](optionsmenuprovider.md): A closure that populates the search options for a find interaction.

# findNavigatorVisible (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A Boolean value that indicates when the find panel displays onscreen.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isFindNavigatorVisible) BOOL findNavigatorVisible;
```

<a id="Discussion"></a>

## Discussion

The value of this property is `YES` when the find panel displays; otherwise, `NO`.

## See Also

### Configuring the find panel

- [searchText](searchtext.md): The search query with which to prepopulate the find panel’s search text field.
- [replacementText](replacementtext.md): The replacement string with which to prepopulate the find panel’s replace text field.
- [optionsMenuProvider](optionsmenuprovider.md): A closure that populates the search options for a find interaction.
