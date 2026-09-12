> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/path(tocolumn:)](https://developer.apple.com/documentation/appkit/nsbrowser/path(tocolumn:))

# path(toColumn:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a string representing the path from the first column up to, but not including, the column at the given index.

## Declaration

```swift
func path(toColumn column: Int) -> String
```

## Parameters

- `column`: The index of the column at which the path stops.

<a id="return-value"></a>

## Return Value

The path of the current selection up to, but not including, the specified column. The components of this path are separated with the string returned by [pathSeparator](pathseparator.md).

## See Also

### Managing the Path

- [path()](path%28%29.md): Returns a string representing the browser’s current path.
- [setPath(\_:)](setpath%28__%29.md): Sets the path to be displayed by the browser.
- [pathSeparator](pathseparator.md): The path separator.

# pathToColumn: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a string representing the path from the first column up to, but not including, the column at the given index.

## Declaration

```objectivec
- (NSString *) pathToColumn:(NSInteger) column;
```

## Parameters

- `column`: The index of the column at which the path stops.

<a id="return-value"></a>

## Return Value

The path of the current selection up to, but not including, the specified column. The components of this path are separated with the string returned by [pathSeparator](pathseparator.md).

## See Also

### Managing the Path

- [path](path%28%29.md): Returns a string representing the browser’s current path.
- [setPath:](setpath%28__%29.md): Sets the path to be displayed by the browser.
- [pathSeparator](pathseparator.md): The path separator.
