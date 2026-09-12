> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstablecolumn/init(identifier:)](https://developer.apple.com/documentation/appkit/nstablecolumn/init(identifier:))

# init(identifier:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Initializes a newly created table column with a string identifier.

## Declaration

```swift
init(identifier: NSUserInterfaceItemIdentifier)
```

## Parameters

- `identifier`: The string identifier for the column.

<a id="return-value"></a>

## Return Value

An initialized table column instance with an [NSTextFieldCell](../nstextfieldcell.md) instance as its default cell.

<a id="Discussion"></a>

## Discussion

You can set the table column title using the [title](title.md) property.

This method is the designated initializer for the `NSTableColumn` class.

## See Also

### Related Documentation

- [NSTableView](../nstableview.md): A set of related records, displayed in rows that represent individual records and columns that represent the attributes of those records.
- [identifier](identifier.md): The identifier string for the table column.

# initWithIdentifier: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Initializes a newly created table column with a string identifier.

## Declaration

```objectivec
- (instancetype) initWithIdentifier:(NSUserInterfaceItemIdentifier) identifier;
```

## Parameters

- `identifier`: The string identifier for the column.

<a id="return-value"></a>

## Return Value

An initialized table column instance with an [NSTextFieldCell](../nstextfieldcell.md) instance as its default cell.

<a id="Discussion"></a>

## Discussion

You can set the table column title using the [title](title.md) property.

This method is the designated initializer for the `NSTableColumn` class.

## See Also

### Related Documentation

- [NSTableView](../nstableview.md): A set of related records, displayed in rows that represent individual records and columns that represent the attributes of those records.
- [identifier](identifier.md): The identifier string for the table column.
