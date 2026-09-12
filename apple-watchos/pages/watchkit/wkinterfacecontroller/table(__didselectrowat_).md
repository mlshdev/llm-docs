> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacecontroller/table(_:didselectrowat:)](https://developer.apple.com/documentation/watchkit/wkinterfacecontroller/table(_:didselectrowat:))

# table(\_:didSelectRowAt:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Called to let you know that the user selected a row in the table.

## Declaration

```swift
func table(_ table: WKInterfaceTable, didSelectRowAt rowIndex: Int)
```

## Parameters

- `table`: The table object whose row was selected.
- `rowIndex`: The zero-based index of the row that was selected.

<a id="Discussion"></a>

## Discussion

Use this method to respond to row selections in a table. You might use the selection of a row to display a new interface controller or update the state of your app. If you connected an action method to the table in your storyboard file, WatchKit does not call this method.

This method is called on your WatchKit extension’s main thread. Implementation of the method is optional.

# table:didSelectRowAtIndex: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Called to let you know that the user selected a row in the table.

## Declaration

```objectivec
- (void) table:(WKInterfaceTable *) table didSelectRowAtIndex:(NSInteger) rowIndex;
```

## Parameters

- `table`: The table object whose row was selected.
- `rowIndex`: The zero-based index of the row that was selected.

<a id="Discussion"></a>

## Discussion

Use this method to respond to row selections in a table. You might use the selection of a row to display a new interface controller or update the state of your app. If you connected an action method to the table in your storyboard file, WatchKit does not call this method.

This method is called on your WatchKit extension’s main thread. Implementation of the method is optional.
