> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacetable/numberofrows](https://developer.apple.com/documentation/watchkit/wkinterfacetable/numberofrows)

# numberOfRows (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+

The number of row controllers available for you to retrieve.

## Declaration

```swift
var numberOfRows: Int { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is `0` until you call the [setRowTypes(\_:)](setrowtypes%28__%29.md) or [setNumberOfRows(\_:withRowType:)](setnumberofrows%28__withrowtype_%29.md) method. After calling one of those methods, this property contains the number of row controllers that were created.

## See Also

### Getting the Row Controllers

- [rowController(at:)](rowcontroller%28at_%29.md): Returns the row controller for the row at the specified index in the table.

# numberOfRows (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+

The number of row controllers available for you to retrieve.

## Declaration

```objectivec
@property (nonatomic, readonly) NSInteger numberOfRows;
```

<a id="Discussion"></a>

## Discussion

The value of this property is `0` until you call the [setRowTypes:](setrowtypes%28__%29.md) or [setNumberOfRows:withRowType:](setnumberofrows%28__withrowtype_%29.md) method. After calling one of those methods, this property contains the number of row controllers that were created.

## See Also

### Getting the Row Controllers

- [rowControllerAtIndex:](rowcontroller%28at_%29.md): Returns the row controller for the row at the specified index in the table.
