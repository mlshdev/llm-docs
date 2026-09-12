> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacetable/removerows(at:)](https://developer.apple.com/documentation/watchkit/wkinterfacetable/removerows(at:))

# removeRows(at:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Removes the specified rows from the table.

## Declaration

```swift
func removeRows(at rows: IndexSet)
```

## Parameters

- `rows`: An index set corresponding to the rows you want to remove. If any of the indexes are invalid, this method raises an exception.

<a id="Discussion"></a>

## Discussion

This method removes row controllers from the table using the same semantics defined by the [removeObjects(at:)](https://developer.apple.com/documentation/foundation/nsmutablearray/removeobjects%28at:%29) method of [NSMutableArray](https://developer.apple.com/documentation/foundation/nsmutablearray).

## See Also

### Inserting and Removing Rows

- [insertRows(at:withRowType:)](insertrows%28at_withrowtype_%29.md): Inserts rows into the table at the specified indexes.

# removeRowsAtIndexes: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Removes the specified rows from the table.

## Declaration

```objectivec
- (void) removeRowsAtIndexes:(NSIndexSet *) rows;
```

## Parameters

- `rows`: An index set corresponding to the rows you want to remove. If any of the indexes are invalid, this method raises an exception.

<a id="Discussion"></a>

## Discussion

This method removes row controllers from the table using the same semantics defined by the [removeObjectsAtIndexes:](https://developer.apple.com/documentation/foundation/nsmutablearray/removeobjects%28at:%29) method of [NSMutableArray](https://developer.apple.com/documentation/foundation/nsmutablearray).

## See Also

### Inserting and Removing Rows

- [insertRowsAtIndexes:withRowType:](insertrows%28at_withrowtype_%29.md): Inserts rows into the table at the specified indexes.
