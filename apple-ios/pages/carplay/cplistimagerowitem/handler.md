> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cplistimagerowitem/handler](https://developer.apple.com/documentation/carplay/cplistimagerowitem/handler)

# handler (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

An optional closure that CarPlay invokes when the user selects the list item.

## Declaration

```swift
var handler: ((any CPSelectableListItem, @escaping () -> Void) -> Void)? { get set }
```

<a id="Discussion"></a>

## Discussion

In Swift, this property is a closure that has two parameters:

- An object that conforms to [CPSelectableListItem](../cpselectablelistitem.md), which is the list item that the user selects.
- The completion closure you call to notify CarPlay when you finish processing the selection.

In Objective-C, the block’s parameters are:

- **`item`**: The list item that the user selects.
- **`completionBlock`**: The block you call to notify CarPlay when you finish processing the tap interaction.

CarPlay executes your handler on the main queue. You must call the completion closure, or `completionBlock` in Objective-C, after you finish processing the selection. If you need to perform asynchronous tasks, dispatch them to a background queue and call the completion closure or `completionBlock` when they complete. CarPlay displays an asynchronous progress indicator until you call the completion closure.

## See Also

### Managing Selection

- [listImageRowHandler](listimagerowhandler.md): An optional closure that CarPlay invokes when the user selects an image.

# handler (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

An optional closure that CarPlay invokes when the user selects the list item.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) void (^)(id<CPSelectableListItem>, void (^)(void)) handler;
```

<a id="Discussion"></a>

## Discussion

In Swift, this property is a closure that has two parameters:

- An object that conforms to [CPSelectableListItem](../cpselectablelistitem.md), which is the list item that the user selects.
- The completion closure you call to notify CarPlay when you finish processing the selection.

In Objective-C, the block’s parameters are:

- **`item`**: The list item that the user selects.
- **`completionBlock`**: The block you call to notify CarPlay when you finish processing the tap interaction.

CarPlay executes your handler on the main queue. You must call the completion closure, or `completionBlock` in Objective-C, after you finish processing the selection. If you need to perform asynchronous tasks, dispatch them to a background queue and call the completion closure or `completionBlock` when they complete. CarPlay displays an asynchronous progress indicator until you call the completion closure.

## See Also

### Managing Selection

- [listImageRowHandler](listimagerowhandler.md): An optional closure that CarPlay invokes when the user selects an image.
