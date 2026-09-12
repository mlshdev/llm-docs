> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacecontroller/contextforsegue(withidentifier:)](https://developer.apple.com/documentation/watchkit/wkinterfacecontroller/contextforsegue(withidentifier:))

# contextForSegue(withIdentifier:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Returns the context object to pass to the specified interface controller when a button is tapped.

## Declaration

```swift
func contextForSegue(withIdentifier segueIdentifier: String) -> Any?
```

## Parameters

- `segueIdentifier`: The identifier of the segue that was triggered. When configuring your interface, specify the identifier for a segue in the Attributes inspector.

<a id="return-value"></a>

## Return Value

The object to pass to the new interface controller. Use this object to communicate important information to the new interface controller, such as the data to be displayed or any relevant state information. You may return `nil` if you want, but doing so is not recommended.

## Mentioned In

- [Navigating Between Scenes](../navigating-between-scenes.md)

<a id="Discussion"></a>

## Discussion

When you create a segue from a button to a single interface controller, the system calls this method when that segue is triggered. Use this method to provide the new interface controller with any contextual data it needs to display its content. The object you return is passed directly to the new interface controller’s [awake(withContext:)](awake%28withcontext_%29.md) method.

WatchKit calls this method on your WatchKit extension’s main thread. Implementation of this method is optional but is recommended if you use segues in your storyboard file. You do not need to call `super` in your implementation. For segues originating from a table row, use the [contextForSegue(withIdentifier:in:rowIndex:)](contextforsegue%28withidentifier_in_rowindex_%29.md) method instead.

## See Also

### Managing segue-based transitions

- [contextsForSegue(withIdentifier:)](contextsforsegue%28withidentifier_%29.md): Returns the context objects to pass to a page-based set of interface controllers when a button is tapped.
- [contextForSegue(withIdentifier:in:rowIndex:)](contextforsegue%28withidentifier_in_rowindex_%29.md): Returns the context object to pass to the specified interface controller when a row in a table is tapped.
- [contextsForSegue(withIdentifier:in:rowIndex:)](contextsforsegue%28withidentifier_in_rowindex_%29.md): Returns the context objects to pass to a page-based set of interface controllers when a row in a table is tapped.

# contextForSegueWithIdentifier: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Returns the context object to pass to the specified interface controller when a button is tapped.

## Declaration

```objectivec
- (id) contextForSegueWithIdentifier:(NSString *) segueIdentifier;
```

## Parameters

- `segueIdentifier`: The identifier of the segue that was triggered. When configuring your interface, specify the identifier for a segue in the Attributes inspector.

<a id="return-value"></a>

## Return Value

The object to pass to the new interface controller. Use this object to communicate important information to the new interface controller, such as the data to be displayed or any relevant state information. You may return `nil` if you want, but doing so is not recommended.

## Mentioned In

- [Navigating Between Scenes](../navigating-between-scenes.md)

<a id="Discussion"></a>

## Discussion

When you create a segue from a button to a single interface controller, the system calls this method when that segue is triggered. Use this method to provide the new interface controller with any contextual data it needs to display its content. The object you return is passed directly to the new interface controller’s [awakeWithContext:](awake%28withcontext_%29.md) method.

WatchKit calls this method on your WatchKit extension’s main thread. Implementation of this method is optional but is recommended if you use segues in your storyboard file. You do not need to call `super` in your implementation. For segues originating from a table row, use the [contextForSegueWithIdentifier:inTable:rowIndex:](contextforsegue%28withidentifier_in_rowindex_%29.md) method instead.

## See Also

### Managing segue-based transitions

- [contextsForSegueWithIdentifier:](contextsforsegue%28withidentifier_%29.md): Returns the context objects to pass to a page-based set of interface controllers when a button is tapped.
- [contextForSegueWithIdentifier:inTable:rowIndex:](contextforsegue%28withidentifier_in_rowindex_%29.md): Returns the context object to pass to the specified interface controller when a row in a table is tapped.
- [contextsForSegueWithIdentifier:inTable:rowIndex:](contextsforsegue%28withidentifier_in_rowindex_%29.md): Returns the context objects to pass to a page-based set of interface controllers when a row in a table is tapped.
