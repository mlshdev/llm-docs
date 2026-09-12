> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationitemrenamedelegate-96g5t/navigationitem:didendrenamingwithtitle:](https://developer.apple.com/documentation/uikit/uinavigationitemrenamedelegate-96g5t/navigationitem:didendrenamingwithtitle:)

# navigationItem:didEndRenamingWithTitle:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Tells the delegate when the rename process ends.

## Declaration

```objectivec
- (void) navigationItem:(UINavigationItem *) navigationItem didEndRenamingWithTitle:(NSString *) title;
```

## Parameters

- `navigationItem`: The navigation item with the changing title.
- `title`: The new title of the navigation item.

<a id="Discussion"></a>

## Discussion

UIKit calls this method after a person finishes renaming the navigation item. Implement this method to update your data model with the new title as needed.

UIKit updates the navigation item’s title automatically. However, if you want to modify the final title that the system passes in to this method, you must update the navigation item’s title manually.

## See Also

### Handling the rename process

- [navigationItem:willBeginRenamingWithSuggestedTitle:selectedRange:](navigationitem_willbeginrenamingwithsuggestedtitle_selectedrange_.md): Tells the delegate when the rename process starts.
