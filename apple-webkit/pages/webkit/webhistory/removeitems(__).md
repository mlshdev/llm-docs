> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webhistory/removeitems(_:)](https://developer.apple.com/documentation/webkit/webhistory/removeitems(_:))

# removeItems(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Removes the specified items from the web history.

## Declaration

```swift
func removeItems(_ items: [Any]!)
```

## Parameters

- `items`: An array of web history items to remove.

<a id="Discussion"></a>

## Discussion

When successful, this method posts a notification ([WebHistoryItemsRemovedNotification](../webhistoryitemsremovednotification.md)).

## See Also

### Adding and Removing History Items

- [addItems(\_:)](additems%28__%29.md): Deprecated. Inserts or updates the specified items in the web history.
- [removeAllItems()](removeallitems%28%29.md): Deprecated. Removes all items from the web history.

# removeItems: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Removes the specified items from the web history.

## Declaration

```objectivec
- (void) removeItems:(NSArray *) items;
```

## Parameters

- `items`: An array of web history items to remove.

<a id="Discussion"></a>

## Discussion

When successful, this method posts a notification ([WebHistoryItemsRemovedNotification](../webhistoryitemsremovednotification.md)).

## See Also

### Adding and Removing History Items

- [addItems:](additems%28__%29.md): Deprecated. Inserts or updates the specified items in the web history.
- [removeAllItems](removeallitems%28%29.md): Deprecated. Removes all items from the web history.
