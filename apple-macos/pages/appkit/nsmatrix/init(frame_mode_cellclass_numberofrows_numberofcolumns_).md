> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmatrix/init(frame:mode:cellclass:numberofrows:numberofcolumns:)](https://developer.apple.com/documentation/appkit/nsmatrix/init(frame:mode:cellclass:numberofrows:numberofcolumns:))

# init(frame:mode:cellClass:numberOfRows:numberOfColumns:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Initializes and returns a newly allocated matrix of the specified size using cells of the given class.

## Declaration

```swift
init(frame frameRect: NSRect, mode: NSMatrix.Mode, cellClass factoryId: AnyClass?, numberOfRows rowsHigh: Int, numberOfColumns colsWide: Int)
```

## Parameters

- `frameRect`: The matrix’s frame.
- `mode`: The tracking mode for the matrix; this can be one of the modes described in [NSMatrix.Mode](mode-swift.enum.md).
- `factoryId`: The class to use for any cells that the matrix creates and uses. This can be obtained by sending a `class` message to the desired subclass of [NSCell](../nscell.md).
- `rowsHigh`: The number of rows in the matrix.
- `colsWide`: The number of columns in the matrix.

<a id="return-value"></a>

## Return Value

The initialized instance of [NSMatrix](../nsmatrix.md).

<a id="Discussion"></a>

## Discussion

This method is the designated initializer for matrices that add cells by creating instances of an [NSCell](../nscell.md) subclass.

## See Also

### Initializing an NSMatrix Object

- [init(frame:)](init%28frame_%29.md): Initializes a newly allocated matrix with the specified frame.
- [init(frame:mode:prototype:numberOfRows:numberOfColumns:)](init%28frame_mode_prototype_numberofrows_numberofcolumns_%29.md): Initializes and returns a newly allocated matrix of the specified size using the given cell as a prototype.

# initWithFrame:mode:cellClass:numberOfRows:numberOfColumns: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Initializes and returns a newly allocated matrix of the specified size using cells of the given class.

## Declaration

```objectivec
- (instancetype) initWithFrame:(NSRect) frameRect mode:(NSMatrixMode) mode cellClass:(Class) factoryId numberOfRows:(NSInteger) rowsHigh numberOfColumns:(NSInteger) colsWide;
```

## Parameters

- `frameRect`: The matrix’s frame.
- `mode`: The tracking mode for the matrix; this can be one of the modes described in [NSMatrixMode](mode-swift.enum.md).
- `factoryId`: The class to use for any cells that the matrix creates and uses. This can be obtained by sending a `class` message to the desired subclass of [NSCell](../nscell.md).
- `rowsHigh`: The number of rows in the matrix.
- `colsWide`: The number of columns in the matrix.

<a id="return-value"></a>

## Return Value

The initialized instance of [NSMatrix](../nsmatrix.md).

<a id="Discussion"></a>

## Discussion

This method is the designated initializer for matrices that add cells by creating instances of an [NSCell](../nscell.md) subclass.

## See Also

### Initializing an NSMatrix Object

- [initWithFrame:](init%28frame_%29.md): Initializes a newly allocated matrix with the specified frame.
- [initWithFrame:mode:prototype:numberOfRows:numberOfColumns:](init%28frame_mode_prototype_numberofrows_numberofcolumns_%29.md): Initializes and returns a newly allocated matrix of the specified size using the given cell as a prototype.
