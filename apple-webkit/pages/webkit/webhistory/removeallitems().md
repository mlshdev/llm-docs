> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webhistory/removeallitems()](https://developer.apple.com/documentation/webkit/webhistory/removeallitems())

# removeAllItems() (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Removes all items from the web history.

## Declaration

```swift
func removeAllItems()
```

<a id="Discussion"></a>

## Discussion

When successful, this method posts a notification ([WebHistoryAllItemsRemovedNotification](../webhistoryallitemsremovednotification.md)).

## See Also

### Adding and Removing History Items

- [addItems(\_:)](additems%28__%29.md): Deprecated. Inserts or updates the specified items in the web history.
- [removeItems(\_:)](removeitems%28__%29.md): Deprecated. Removes the specified items from the web history.

# removeAllItems (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Removes all items from the web history.

## Declaration

```objectivec
- (void) removeAllItems;
```

<a id="Discussion"></a>

## Discussion

When successful, this method posts a notification ([WebHistoryAllItemsRemovedNotification](../webhistoryallitemsremovednotification.md)).

## See Also

### Adding and Removing History Items

- [addItems:](additems%28__%29.md): Deprecated. Inserts or updates the specified items in the web history.
- [removeItems:](removeitems%28__%29.md): Deprecated. Removes the specified items from the web history.
