> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifindinteraction/delegate](https://developer.apple.com/documentation/uikit/uifindinteraction/delegate)

# delegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

An object that updates your app’s presentation and provides the session object for managing the interaction’s search.

## Declaration

```swift
weak var delegate: (any UIFindInteractionDelegate)? { get }
```

## See Also

### Managing find interactions

- [presentFindNavigator(showingReplace:)](presentfindnavigator%28showingreplace_%29.md): Begins a search, displaying the find panel.
- [dismissFindNavigator()](dismissfindnavigator%28%29.md): Dismisses the find panel, if present.
- [findNext()](findnext%28%29.md): Highlights the next found result in the content, relative to the currently highlighted result.
- [findPrevious()](findprevious%28%29.md): Highlights the previously found result in the document, relative to the currently highlighted result.

# delegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

An object that updates your app’s presentation and provides the session object for managing the interaction’s search.

## Declaration

```objectivec
@property (nonatomic, weak, readonly) id<UIFindInteractionDelegate> delegate;
```

## See Also

### Managing find interactions

- [presentFindNavigatorShowingReplace:](presentfindnavigator%28showingreplace_%29.md): Begins a search, displaying the find panel.
- [dismissFindNavigator](dismissfindnavigator%28%29.md): Dismisses the find panel, if present.
- [findNext](findnext%28%29.md): Highlights the next found result in the content, relative to the currently highlighted result.
- [findPrevious](findprevious%28%29.md): Highlights the previously found result in the document, relative to the currently highlighted result.
