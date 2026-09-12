> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspathcontrol/setpathcomponentcells(_:)](https://developer.apple.com/documentation/appkit/nspathcontrol/setpathcomponentcells(_:))

# setPathComponentCells(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Sets the array of `NSPathComponentCell` objects currently being displayed.

> Use the pathItems property instead

## Declaration

```swift
func setPathComponentCells(_ cells: [NSPathComponentCell])
```

## Parameters

- `cells`: An array of `NSPathComponentCell` objects.

<a id="Discussion"></a>

## Discussion

Each item in the array must be an instance of `NSPathComponentCell` or a subclass thereof. You cannot set this value to `nil`, but you can set it to an empty array using, for example, `[NSArray array]`.

## See Also

### Managing Path Components

- [clickedPathComponentCell()](clickedpathcomponentcell%28%29.md): Deprecated. Returns the clicked cell.
- [pathComponentCells()](pathcomponentcells%28%29.md): Deprecated. Returns an array of the `NSPathComponentCell` objects currently being displayed.

# setPathComponentCells: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Sets the array of `NSPathComponentCell` objects currently being displayed.

> Use the pathItems property instead

## Declaration

```objectivec
- (void) setPathComponentCells:(NSArray<NSPathComponentCell *> *) cells;
```

## Parameters

- `cells`: An array of `NSPathComponentCell` objects.

<a id="Discussion"></a>

## Discussion

Each item in the array must be an instance of `NSPathComponentCell` or a subclass thereof. You cannot set this value to `nil`, but you can set it to an empty array using, for example, `[NSArray array]`.

## See Also

### Managing Path Components

- [clickedPathComponentCell](clickedpathcomponentcell%28%29.md): Deprecated. Returns the clicked cell.
- [pathComponentCells](pathcomponentcells%28%29.md): Deprecated. Returns an array of the `NSPathComponentCell` objects currently being displayed.
