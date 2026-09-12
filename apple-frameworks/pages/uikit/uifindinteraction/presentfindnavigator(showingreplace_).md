> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifindinteraction/presentfindnavigator(showingreplace:)](https://developer.apple.com/documentation/uikit/uifindinteraction/presentfindnavigator(showingreplace:))

# presentFindNavigator(showingReplace:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Begins a search, displaying the find panel.

## Declaration

```swift
func presentFindNavigator(showingReplace: Bool)
```

## Parameters

- `showingReplace`: `YES` to display a replace text field in the panel if the delegate supports text replacement. `No` to avoid displaying the replace text field.

<a id="Discussion"></a>

## Discussion

You use this method to begin a search and display the find panel. The method calls [findInteraction(\_:sessionFor:)](../uifindinteractiondelegate/findinteraction%28__sessionfor_%29.md) on the interaction object’s delegate and updates the UI using the session object the delegate returns.

The following example presents the find panel from a bar button item.

```swift
@objc func findButtonTapped(sender: UIBarButtonItem) {
    self.findInteraction!.presentFindNavigator(showingReplace: false)
}
```

The method has no effect if the find navigator panel is already present.

## See Also

### Managing find interactions

- [delegate](delegate.md): An object that updates your app’s presentation and provides the session object for managing the interaction’s search.
- [dismissFindNavigator()](dismissfindnavigator%28%29.md): Dismisses the find panel, if present.
- [findNext()](findnext%28%29.md): Highlights the next found result in the content, relative to the currently highlighted result.
- [findPrevious()](findprevious%28%29.md): Highlights the previously found result in the document, relative to the currently highlighted result.

# presentFindNavigatorShowingReplace: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Begins a search, displaying the find panel.

## Declaration

```objectivec
- (void) presentFindNavigatorShowingReplace:(BOOL) showingReplace;
```

## Parameters

- `showingReplace`: `YES` to display a replace text field in the panel if the delegate supports text replacement. `No` to avoid displaying the replace text field.

<a id="Discussion"></a>

## Discussion

You use this method to begin a search and display the find panel. The method calls [findInteraction:sessionForView:](../uifindinteractiondelegate/findinteraction%28__sessionfor_%29.md) on the interaction object’s delegate and updates the UI using the session object the delegate returns.

The following example presents the find panel from a bar button item.

```swift
@objc func findButtonTapped(sender: UIBarButtonItem) {
    self.findInteraction!.presentFindNavigator(showingReplace: false)
}
```

The method has no effect if the find navigator panel is already present.

## See Also

### Managing find interactions

- [delegate](delegate.md): An object that updates your app’s presentation and provides the session object for managing the interaction’s search.
- [dismissFindNavigator](dismissfindnavigator%28%29.md): Dismisses the find panel, if present.
- [findNext](findnext%28%29.md): Highlights the next found result in the content, relative to the currently highlighted result.
- [findPrevious](findprevious%28%29.md): Highlights the previously found result in the document, relative to the currently highlighted result.
