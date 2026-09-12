> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrubber/reloaditems(at:)](https://developer.apple.com/documentation/appkit/nsscrubber/reloaditems(at:))

# reloadItems(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Reloads the items at the specified indexes.

## Declaration

```swift
func reloadItems(at indexes: IndexSet)
```

## Parameters

- `indexes`: The indexes of the items to reload, provided in an index set ([IndexSet](https://developer.apple.com/documentation/foundation/indexset)).

<a id="Discussion"></a>

## Discussion

The scrubber makes requests for updated views from the data source and then animates their display.

## See Also

### Reloading content

- [reloadData()](reloaddata%28%29.md): Reloads the content of the entire scrubber, and deselects the currently selected item.

# reloadItemsAtIndexes: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Reloads the items at the specified indexes.

## Declaration

```objectivec
- (void) reloadItemsAtIndexes:(NSIndexSet *) indexes;
```

## Parameters

- `indexes`: The indexes of the items to reload, provided in an index set ([IndexSet](https://developer.apple.com/documentation/foundation/indexset)).

<a id="Discussion"></a>

## Discussion

The scrubber makes requests for updated views from the data source and then animates their display.

## See Also

### Reloading content

- [reloadData](reloaddata%28%29.md): Reloads the content of the entire scrubber, and deselects the currently selected item.
