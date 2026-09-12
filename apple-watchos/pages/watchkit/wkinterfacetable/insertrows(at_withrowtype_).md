> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacetable/insertrows(at:withrowtype:)](https://developer.apple.com/documentation/watchkit/wkinterfacetable/insertrows(at:withrowtype:))

# insertRows(at:withRowType:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Inserts rows into the table at the specified indexes.

## Declaration

```swift
func insertRows(at rows: IndexSet, withRowType rowType: String)
```

## Parameters

- `rows`: An index set containing the locations for the new rows. Each new row controller object is inserted into the array of row controllers in turn and at the specified index after earlier insertions have been made.
- `rowType`: The type of the row controllers to insert. This string corresponds to the value in the Identifier attribute of a row controller definition in your storyboard file.

<a id="Discussion"></a>

## Discussion

This method inserts the new row controllers into the existing array of row controllers using the semantics defined by the [insert(\_:at:)](https://developer.apple.com/documentation/foundation/nsmutablearray/insert%28_:at:%29-73pln) method of [NSMutableArray](https://developer.apple.com/documentation/foundation/nsmutablearray).

## See Also

### Inserting and Removing Rows

- [removeRows(at:)](removerows%28at_%29.md): Removes the specified rows from the table.

# insertRowsAtIndexes:withRowType: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Inserts rows into the table at the specified indexes.

## Declaration

```objectivec
- (void) insertRowsAtIndexes:(NSIndexSet *) rows withRowType:(NSString *) rowType;
```

## Parameters

- `rows`: An index set containing the locations for the new rows. Each new row controller object is inserted into the array of row controllers in turn and at the specified index after earlier insertions have been made.
- `rowType`: The type of the row controllers to insert. This string corresponds to the value in the Identifier attribute of a row controller definition in your storyboard file.

<a id="Discussion"></a>

## Discussion

This method inserts the new row controllers into the existing array of row controllers using the semantics defined by the [insertObjects:atIndexes:](https://developer.apple.com/documentation/foundation/nsmutablearray/insert%28_:at:%29-73pln) method of [NSMutableArray](https://developer.apple.com/documentation/foundation/nsmutablearray).

## See Also

### Inserting and Removing Rows

- [removeRowsAtIndexes:](removerows%28at_%29.md): Removes the specified rows from the table.
