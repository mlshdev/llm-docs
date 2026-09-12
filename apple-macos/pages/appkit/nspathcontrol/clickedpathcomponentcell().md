> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspathcontrol/clickedpathcomponentcell()](https://developer.apple.com/documentation/appkit/nspathcontrol/clickedpathcomponentcell())

# clickedPathComponentCell() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Returns the clicked cell.

> Use the clickedPathItem property instead

## Declaration

```swift
func clickedPathComponentCell() -> NSPathComponentCell?
```

<a id="return-value"></a>

## Return Value

The component cell that was clicked.

<a id="Discussion"></a>

## Discussion

The value returned is generally valid only when the action or double action is being sent.

> **Note**

>  In OS X v10.5 and earlier the returned value was \[nil\] if no cell had been clicked. In OS X v10.6, the folder of the cell that the user selected is returned instead.

## See Also

### Managing Path Components

- [pathComponentCells()](pathcomponentcells%28%29.md): Deprecated. Returns an array of the `NSPathComponentCell` objects currently being displayed.
- [setPathComponentCells(\_:)](setpathcomponentcells%28__%29.md): Deprecated. Sets the array of `NSPathComponentCell` objects currently being displayed.

# clickedPathComponentCell (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Returns the clicked cell.

> Use the clickedPathItem property instead

## Declaration

```objectivec
- (NSPathComponentCell *) clickedPathComponentCell;
```

<a id="return-value"></a>

## Return Value

The component cell that was clicked.

<a id="Discussion"></a>

## Discussion

The value returned is generally valid only when the action or double action is being sent.

> **Note**

>  In OS X v10.5 and earlier the returned value was \[nil\] if no cell had been clicked. In OS X v10.6, the folder of the cell that the user selected is returned instead.

## See Also

### Managing Path Components

- [pathComponentCells](pathcomponentcells%28%29.md): Deprecated. Returns an array of the `NSPathComponentCell` objects currently being displayed.
- [setPathComponentCells:](setpathcomponentcells%28__%29.md): Deprecated. Sets the array of `NSPathComponentCell` objects currently being displayed.
