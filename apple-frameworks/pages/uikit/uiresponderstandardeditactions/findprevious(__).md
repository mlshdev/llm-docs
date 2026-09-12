> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiresponderstandardeditactions/findprevious(_:)](https://developer.apple.com/documentation/uikit/uiresponderstandardeditactions/findprevious(_:))

# findPrevious(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

Finds the previous match in your app’s interface.

## Declaration

```swift
optional func findPrevious(_ sender: Any?)
```

## Parameters

- `sender`: The object calling this method.

<a id="Discussion"></a>

## Discussion

UIKit calls this method when the user selects the Find Previous command from an editing menu. Your implementation should highlight the previous result in the UI for finding textual content in your view.

For example, a view using a find interaction might call [highlightNextResult(in:)](../uifindsession/highlightnextresult%28in_%29.md) to update the find session.

## See Also

### Handling find and replace commands

- [find(\_:)](find%28__%29.md): Begins a search for content in your app’s interface.
- [findNext(\_:)](findnext%28__%29.md): Finds the next match in your app’s interface.
- [findAndReplace(\_:)](findandreplace%28__%29.md): Begins a search for content in your app’s interface and provides a replacement.
- [useSelectionForFind(\_:)](useselectionforfind%28__%29.md): Begins a search for the selected content in your app’s interface.

# findPrevious: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

Finds the previous match in your app’s interface.

## Declaration

```objectivec
- (void) findPrevious:(id) sender;
```

## Parameters

- `sender`: The object calling this method.

<a id="Discussion"></a>

## Discussion

UIKit calls this method when the user selects the Find Previous command from an editing menu. Your implementation should highlight the previous result in the UI for finding textual content in your view.

For example, a view using a find interaction might call [highlightNextResultInDirection:](../uifindsession/highlightnextresult%28in_%29.md) to update the find session.

## See Also

### Handling find and replace commands

- [find:](find%28__%29.md): Begins a search for content in your app’s interface.
- [findNext:](findnext%28__%29.md): Finds the next match in your app’s interface.
- [findAndReplace:](findandreplace%28__%29.md): Begins a search for content in your app’s interface and provides a replacement.
- [useSelectionForFind:](useselectionforfind%28__%29.md): Begins a search for the selected content in your app’s interface.
