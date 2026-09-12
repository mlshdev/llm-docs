> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmatrix/init(frame:)](https://developer.apple.com/documentation/appkit/nsmatrix/init(frame:))

# init(frame:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Initializes a newly allocated matrix with the specified frame.

## Declaration

```swift
convenience init(frame frameRect: NSRect)
```

## Parameters

- `frameRect`: The frame with which to initialize the matrix.

<a id="return-value"></a>

## Return Value

The [NSMatrix](../nsmatrix.md), initialized with default parameters. The new [NSMatrix](../nsmatrix.md) contains no rows or columns. The default mode is `NSRadioModeMatrix`. The default cell class is [NSActionCell](../nsactioncell.md).

<a id="Discussion"></a>

## Discussion

See [NSMatrix](../nsmatrix.md).

## See Also

### Initializing an NSMatrix Object

- [init(frame:mode:cellClass:numberOfRows:numberOfColumns:)](init%28frame_mode_cellclass_numberofrows_numberofcolumns_%29.md): Initializes and returns a newly allocated matrix of the specified size using cells of the given class.
- [init(frame:mode:prototype:numberOfRows:numberOfColumns:)](init%28frame_mode_prototype_numberofrows_numberofcolumns_%29.md): Initializes and returns a newly allocated matrix of the specified size using the given cell as a prototype.

# initWithFrame: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Initializes a newly allocated matrix with the specified frame.

## Declaration

```objectivec
- (instancetype) initWithFrame:(NSRect) frameRect;
```

## Parameters

- `frameRect`: The frame with which to initialize the matrix.

<a id="return-value"></a>

## Return Value

The [NSMatrix](../nsmatrix.md), initialized with default parameters. The new [NSMatrix](../nsmatrix.md) contains no rows or columns. The default mode is `NSRadioModeMatrix`. The default cell class is [NSActionCell](../nsactioncell.md).

<a id="Discussion"></a>

## Discussion

See [NSMatrix](../nsmatrix.md).

## See Also

### Initializing an NSMatrix Object

- [initWithFrame:mode:cellClass:numberOfRows:numberOfColumns:](init%28frame_mode_cellclass_numberofrows_numberofcolumns_%29.md): Initializes and returns a newly allocated matrix of the specified size using cells of the given class.
- [initWithFrame:mode:prototype:numberOfRows:numberOfColumns:](init%28frame_mode_prototype_numberofrows_numberofcolumns_%29.md): Initializes and returns a newly allocated matrix of the specified size using the given cell as a prototype.
