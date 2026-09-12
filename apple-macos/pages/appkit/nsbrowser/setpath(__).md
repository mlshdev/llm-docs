> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/setpath(_:)](https://developer.apple.com/documentation/appkit/nsbrowser/setpath(_:))

# setPath(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the path to be displayed by the browser.

## Declaration

```swift
func setPath(_ path: String) -> Bool
```

## Parameters

- `path`: The path to display. If `path` is prefixed by the path separator, the path is absolute, containing the full path from the browser’s first column. Otherwise, the path is relative, extending the browser’s current path starting at the last column.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the given path is valid; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

While parsing `path`, the browser compares each component with the entries in the current column. If an exact match is found, the matching entry is selected, and the next component is compared to the next column’s entries. If no match is found for a component, the method exits and returns [false](https://developer.apple.com/documentation/swift/false); the final path is set to the valid portion of `path`. If each component of `path` specifies a valid branch or leaf in the browser’s hierarchy, the method returns [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Managing the Path

- [path()](path%28%29.md): Returns a string representing the browser’s current path.
- [path(toColumn:)](path%28tocolumn_%29.md): Returns a string representing the path from the first column up to, but not including, the column at the given index.
- [pathSeparator](pathseparator.md): The path separator.

# setPath: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the path to be displayed by the browser.

## Declaration

```objectivec
- (BOOL) setPath:(NSString *) path;
```

## Parameters

- `path`: The path to display. If `path` is prefixed by the path separator, the path is absolute, containing the full path from the browser’s first column. Otherwise, the path is relative, extending the browser’s current path starting at the last column.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the given path is valid; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

While parsing `path`, the browser compares each component with the entries in the current column. If an exact match is found, the matching entry is selected, and the next component is compared to the next column’s entries. If no match is found for a component, the method exits and returns [false](https://developer.apple.com/documentation/swift/false); the final path is set to the valid portion of `path`. If each component of `path` specifies a valid branch or leaf in the browser’s hierarchy, the method returns [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Managing the Path

- [path](path%28%29.md): Returns a string representing the browser’s current path.
- [pathToColumn:](path%28tocolumn_%29.md): Returns a string representing the path from the first column up to, but not including, the column at the given index.
- [pathSeparator](pathseparator.md): The path separator.
