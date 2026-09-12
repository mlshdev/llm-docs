> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableviewrowaction/init(style:title:handler:)](https://developer.apple.com/documentation/appkit/nstableviewrowaction/init(style:title:handler:))

# init(style:title:handler:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.11+

Creates and returns a new table view row action object.

## Declaration

```swift
convenience init(style: NSTableViewRowAction.Style, title: String, handler: @escaping (NSTableViewRowAction, Int) -> Void)
```

## Parameters

- `style`: The style characteristics to apply to the button. Use this value to apply default appearance characteristics to the button. These characteristics visually communicate, such as by color, information about what the button does. For example, specify a style of [NSTableViewRowAction.Style.destructive](style-swift.enum/destructive.md) to indicate an action is destructive to the underlying data. For a list of possible style values, see [NSTableViewRowAction.Style](style-swift.enum.md).
- `title`: The string to display in the button. Specify a string localized for the user’s current language.
- `handler`: The block to execute when the user clicks the button associated with this action. AppKit makes a copy of the block you provide. When the user selects the action represented by this object, AppKit executes your `handler` block on the app’s main thread. This parameter must not be `nil`. This block has no return value and takes the following parameters:

  - **action**: The action object representing the action that the user selected.
  - **indexPath**: The table row that the user acted on.

<a id="return-value"></a>

## Return Value

A new table row action object that you can return from your table view’s delegate method.

<a id="Discussion"></a>

## Discussion

The style and handler block you specify cannot be changed later. You can change the title of the action button. You can also configure other appearance-related properties of the button using the properties of this class.

You can assign the same row action object to multiple rows of your table.

## See Also

### Related Documentation

- [NSTableViewRowAction.Style](style-swift.enum.md): Constants that help define the appearance and behavior of action buttons.
- [tableView(\_:rowActionsForRow:edge:)](../nstableviewdelegate/tableview%28__rowactionsforrow_edge_%29.md): Asks the delegate to provide an array of row actions to be attached to the specified edge of a table row and displayed when the user swipes horizontally across the row.

# rowActionWithStyle:title:handler: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.11+

Creates and returns a new table view row action object.

## Declaration

```objectivec
+ (instancetype) rowActionWithStyle:(NSTableViewRowActionStyle) style title:(NSString *) title handler:(void (^)(NSTableViewRowAction *action, NSInteger row)) handler;
```

## Parameters

- `style`: The style characteristics to apply to the button. Use this value to apply default appearance characteristics to the button. These characteristics visually communicate, such as by color, information about what the button does. For example, specify a style of [NSTableViewRowActionStyleDestructive](style-swift.enum/destructive.md) to indicate an action is destructive to the underlying data. For a list of possible style values, see [NSTableViewRowActionStyle](style-swift.enum.md).
- `title`: The string to display in the button. Specify a string localized for the user’s current language.
- `handler`: The block to execute when the user clicks the button associated with this action. AppKit makes a copy of the block you provide. When the user selects the action represented by this object, AppKit executes your `handler` block on the app’s main thread. This parameter must not be `nil`. This block has no return value and takes the following parameters:

  - **action**: The action object representing the action that the user selected.
  - **indexPath**: The table row that the user acted on.

<a id="return-value"></a>

## Return Value

A new table row action object that you can return from your table view’s delegate method.

<a id="Discussion"></a>

## Discussion

The style and handler block you specify cannot be changed later. You can change the title of the action button. You can also configure other appearance-related properties of the button using the properties of this class.

You can assign the same row action object to multiple rows of your table.

## See Also

### Related Documentation

- [NSTableViewRowActionStyle](style-swift.enum.md): Constants that help define the appearance and behavior of action buttons.
- [tableView:rowActionsForRow:edge:](../nstableviewdelegate/tableview%28__rowactionsforrow_edge_%29.md): Asks the delegate to provide an array of row actions to be attached to the specified edge of a table row and displayed when the user swipes horizontally across the row.
