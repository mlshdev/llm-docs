> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webhistory/additems(_:)](https://developer.apple.com/documentation/webkit/webhistory/additems(_:))

# addItems(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Inserts or updates the specified items in the web history.

## Declaration

```swift
func addItems(_ newItems: [Any]!)
```

## Parameters

- `newItems`: An array of web history items to add. If an item in the array already exists in the web history this method replaces the existing item, so that the last-visited date for the item is updated.

<a id="Discussion"></a>

## Discussion

When successful, this method posts a notification ([WebHistoryItemsAddedNotification](../webhistoryitemsaddednotification.md)).

## See Also

### Adding and Removing History Items

- [removeItems(\_:)](removeitems%28__%29.md): Deprecated. Removes the specified items from the web history.
- [removeAllItems()](removeallitems%28%29.md): Deprecated. Removes all items from the web history.

# addItems: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Inserts or updates the specified items in the web history.

## Declaration

```objectivec
- (void) addItems:(NSArray *) newItems;
```

## Parameters

- `newItems`: An array of web history items to add. If an item in the array already exists in the web history this method replaces the existing item, so that the last-visited date for the item is updated.

<a id="Discussion"></a>

## Discussion

When successful, this method posts a notification ([WebHistoryItemsAddedNotification](../webhistoryitemsaddednotification.md)).

## See Also

### Adding and Removing History Items

- [removeItems:](removeitems%28__%29.md): Deprecated. Removes the specified items from the web history.
- [removeAllItems](removeallitems%28%29.md): Deprecated. Removes all items from the web history.
