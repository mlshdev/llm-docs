> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/path()](https://developer.apple.com/documentation/appkit/nsbrowser/path())

# path() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a string representing the browser’s current path.

## Declaration

```swift
func path() -> String
```

<a id="return-value"></a>

## Return Value

The path representing the current selection. The components of this path are separated with the string returned by [pathSeparator](pathseparator.md).

<a id="Discussion"></a>

## Discussion

Invoking this method is equivalent to invoking [path(toColumn:)](path%28tocolumn_%29.md) for all columns.

## See Also

### Managing the Path

- [setPath(\_:)](setpath%28__%29.md): Sets the path to be displayed by the browser.
- [path(toColumn:)](path%28tocolumn_%29.md): Returns a string representing the path from the first column up to, but not including, the column at the given index.
- [pathSeparator](pathseparator.md): The path separator.

# path (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a string representing the browser’s current path.

## Declaration

```objectivec
- (NSString *) path;
```

<a id="return-value"></a>

## Return Value

The path representing the current selection. The components of this path are separated with the string returned by [pathSeparator](pathseparator.md).

<a id="Discussion"></a>

## Discussion

Invoking this method is equivalent to invoking [pathToColumn:](path%28tocolumn_%29.md) for all columns.

## See Also

### Managing the Path

- [setPath:](setpath%28__%29.md): Sets the path to be displayed by the browser.
- [pathToColumn:](path%28tocolumn_%29.md): Returns a string representing the path from the first column up to, but not including, the column at the given index.
- [pathSeparator](pathseparator.md): The path separator.
