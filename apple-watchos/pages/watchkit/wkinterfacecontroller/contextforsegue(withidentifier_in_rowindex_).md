> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacecontroller/contextforsegue(withidentifier:in:rowindex:)](https://developer.apple.com/documentation/watchkit/wkinterfacecontroller/contextforsegue(withidentifier:in:rowindex:))

# contextForSegue(withIdentifier:in:rowIndex:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Returns the context object to pass to the specified interface controller when a row in a table is tapped.

## Declaration

```swift
func contextForSegue(withIdentifier segueIdentifier: String, in table: WKInterfaceTable, rowIndex: Int) -> Any?
```

## Parameters

- `segueIdentifier`: The identifier of the segue that was triggered. Specify the identifier for a segue in the Attributes inspector when configuring your interface.
- `table`: The table object containing the row that was tapped.
- `rowIndex`: The zero-based index of the row that was tapped by the user.

<a id="return-value"></a>

## Return Value

The object to pass to the new interface controller. Use this object to communicate important information to the new interface controller, such as the data to display or any relevant state information. You may specify `nil` if you want, but doing so is not recommended.

<a id="Discussion"></a>

## Discussion

WatchKit calls this method when a segue attached to a table row is triggered. Use this method to provide the new interface controller with any contextual data it needs to display its content. The object you return is passed directly to the new interface controller’s [awake(withContext:)](awake%28withcontext_%29.md) method.

This method is called on your WatchKit extension’s main thread. Implementation of this method is optional but is recommended if you use segues in your storyboard file. You do not need to call `super` in your implementation. For segues originating from a button, use the [contextsForSegue(withIdentifier:)](contextsforsegue%28withidentifier_%29.md) method instead.

## See Also

### Managing segue-based transitions

- [contextForSegue(withIdentifier:)](contextforsegue%28withidentifier_%29.md): Returns the context object to pass to the specified interface controller when a button is tapped.
- [contextsForSegue(withIdentifier:)](contextsforsegue%28withidentifier_%29.md): Returns the context objects to pass to a page-based set of interface controllers when a button is tapped.
- [contextsForSegue(withIdentifier:in:rowIndex:)](contextsforsegue%28withidentifier_in_rowindex_%29.md): Returns the context objects to pass to a page-based set of interface controllers when a row in a table is tapped.

# contextForSegueWithIdentifier:inTable:rowIndex: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Returns the context object to pass to the specified interface controller when a row in a table is tapped.

## Declaration

```objectivec
- (id) contextForSegueWithIdentifier:(NSString *) segueIdentifier inTable:(WKInterfaceTable *) table rowIndex:(NSInteger) rowIndex;
```

## Parameters

- `segueIdentifier`: The identifier of the segue that was triggered. Specify the identifier for a segue in the Attributes inspector when configuring your interface.
- `table`: The table object containing the row that was tapped.
- `rowIndex`: The zero-based index of the row that was tapped by the user.

<a id="return-value"></a>

## Return Value

The object to pass to the new interface controller. Use this object to communicate important information to the new interface controller, such as the data to display or any relevant state information. You may specify `nil` if you want, but doing so is not recommended.

<a id="Discussion"></a>

## Discussion

WatchKit calls this method when a segue attached to a table row is triggered. Use this method to provide the new interface controller with any contextual data it needs to display its content. The object you return is passed directly to the new interface controller’s [awakeWithContext:](awake%28withcontext_%29.md) method.

This method is called on your WatchKit extension’s main thread. Implementation of this method is optional but is recommended if you use segues in your storyboard file. You do not need to call `super` in your implementation. For segues originating from a button, use the [contextsForSegueWithIdentifier:](contextsforsegue%28withidentifier_%29.md) method instead.

## See Also

### Managing segue-based transitions

- [contextForSegueWithIdentifier:](contextforsegue%28withidentifier_%29.md): Returns the context object to pass to the specified interface controller when a button is tapped.
- [contextsForSegueWithIdentifier:](contextsforsegue%28withidentifier_%29.md): Returns the context objects to pass to a page-based set of interface controllers when a button is tapped.
- [contextsForSegueWithIdentifier:inTable:rowIndex:](contextsforsegue%28withidentifier_in_rowindex_%29.md): Returns the context objects to pass to a page-based set of interface controllers when a row in a table is tapped.
