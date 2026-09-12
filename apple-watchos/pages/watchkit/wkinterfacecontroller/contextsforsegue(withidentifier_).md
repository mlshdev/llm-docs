> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacecontroller/contextsforsegue(withidentifier:)](https://developer.apple.com/documentation/watchkit/wkinterfacecontroller/contextsforsegue(withidentifier:))

# contextsForSegue(withIdentifier:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Returns the context objects to pass to a page-based set of interface controllers when a button is tapped.

## Declaration

```swift
func contextsForSegue(withIdentifier segueIdentifier: String) -> [Any]?
```

## Parameters

- `segueIdentifier`: The identifier of the segue that was triggered. Specify the identifier for a segue in the Attributes inspector when configuring your interface.

<a id="return-value"></a>

## Return Value

An array of objects to pass to the new interface controllers. The number of objects in the array must match the number of interface controllers that are present in the page-based interface that is the target of the segue. Use this object to communicate important information to the new interface controller, such as the data to display or any relevant state information. You may return `nil` if you want, but doing so is not recommended.

<a id="Discussion"></a>

## Discussion

When you create a modal segue from a button to a set of interface controllers in a page-based arrangement, the system calls this method when that segue is triggered. Use this method to provide the new interface controllers with any contextual data they need to display their content. The objects in the array are passed directly to the [awake(withContext:)](awake%28withcontext_%29.md) method of the corresponding interface controllers.

WatchKit calls this method on your WatchKit extension’s main thread. Implementation of this method is optional but is recommended if you use segues in your storyboard file. You do not need to call `super` in your implementation. For segues originating from a table row, use the [contextsForSegue(withIdentifier:in:rowIndex:)](contextsforsegue%28withidentifier_in_rowindex_%29.md) method instead.

## See Also

### Managing segue-based transitions

- [contextForSegue(withIdentifier:)](contextforsegue%28withidentifier_%29.md): Returns the context object to pass to the specified interface controller when a button is tapped.
- [contextForSegue(withIdentifier:in:rowIndex:)](contextforsegue%28withidentifier_in_rowindex_%29.md): Returns the context object to pass to the specified interface controller when a row in a table is tapped.
- [contextsForSegue(withIdentifier:in:rowIndex:)](contextsforsegue%28withidentifier_in_rowindex_%29.md): Returns the context objects to pass to a page-based set of interface controllers when a row in a table is tapped.

# contextsForSegueWithIdentifier: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Returns the context objects to pass to a page-based set of interface controllers when a button is tapped.

## Declaration

```objectivec
- (NSArray *) contextsForSegueWithIdentifier:(NSString *) segueIdentifier;
```

## Parameters

- `segueIdentifier`: The identifier of the segue that was triggered. Specify the identifier for a segue in the Attributes inspector when configuring your interface.

<a id="return-value"></a>

## Return Value

An array of objects to pass to the new interface controllers. The number of objects in the array must match the number of interface controllers that are present in the page-based interface that is the target of the segue. Use this object to communicate important information to the new interface controller, such as the data to display or any relevant state information. You may return `nil` if you want, but doing so is not recommended.

<a id="Discussion"></a>

## Discussion

When you create a modal segue from a button to a set of interface controllers in a page-based arrangement, the system calls this method when that segue is triggered. Use this method to provide the new interface controllers with any contextual data they need to display their content. The objects in the array are passed directly to the [awakeWithContext:](awake%28withcontext_%29.md) method of the corresponding interface controllers.

WatchKit calls this method on your WatchKit extension’s main thread. Implementation of this method is optional but is recommended if you use segues in your storyboard file. You do not need to call `super` in your implementation. For segues originating from a table row, use the [contextsForSegueWithIdentifier:inTable:rowIndex:](contextsforsegue%28withidentifier_in_rowindex_%29.md) method instead.

## See Also

### Managing segue-based transitions

- [contextForSegueWithIdentifier:](contextforsegue%28withidentifier_%29.md): Returns the context object to pass to the specified interface controller when a button is tapped.
- [contextForSegueWithIdentifier:inTable:rowIndex:](contextforsegue%28withidentifier_in_rowindex_%29.md): Returns the context object to pass to the specified interface controller when a row in a table is tapped.
- [contextsForSegueWithIdentifier:inTable:rowIndex:](contextsforsegue%28withidentifier_in_rowindex_%29.md): Returns the context objects to pass to a page-based set of interface controllers when a row in a table is tapped.
