> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiresponderstandardeditactions/find(_:)](https://developer.apple.com/documentation/uikit/uiresponderstandardeditactions/find(_:))

# find(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

Begins a search for content in your app’s interface.

## Declaration

```swift
optional func find(_ sender: Any?)
```

## Parameters

- `sender`: The object calling this method.

<a id="Discussion"></a>

## Discussion

UIKit calls this method when the user selects the Find command from an editing menu. Your implementation should present the UI for finding textual content in your view.

For example, a view using a find interaction might call [presentFindNavigator(showingReplace:)](../uifindinteraction/presentfindnavigator%28showingreplace_%29.md) to present the system find panel.

## See Also

### Handling find and replace commands

- [findNext(\_:)](findnext%28__%29.md): Finds the next match in your app’s interface.
- [findPrevious(\_:)](findprevious%28__%29.md): Finds the previous match in your app’s interface.
- [findAndReplace(\_:)](findandreplace%28__%29.md): Begins a search for content in your app’s interface and provides a replacement.
- [useSelectionForFind(\_:)](useselectionforfind%28__%29.md): Begins a search for the selected content in your app’s interface.

# find: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

Begins a search for content in your app’s interface.

## Declaration

```objectivec
- (void) find:(id) sender;
```

## Parameters

- `sender`: The object calling this method.

<a id="Discussion"></a>

## Discussion

UIKit calls this method when the user selects the Find command from an editing menu. Your implementation should present the UI for finding textual content in your view.

For example, a view using a find interaction might call [presentFindNavigatorShowingReplace:](../uifindinteraction/presentfindnavigator%28showingreplace_%29.md) to present the system find panel.

## See Also

### Handling find and replace commands

- [findNext:](findnext%28__%29.md): Finds the next match in your app’s interface.
- [findPrevious:](findprevious%28__%29.md): Finds the previous match in your app’s interface.
- [findAndReplace:](findandreplace%28__%29.md): Begins a search for content in your app’s interface and provides a replacement.
- [useSelectionForFind:](useselectionforfind%28__%29.md): Begins a search for the selected content in your app’s interface.
