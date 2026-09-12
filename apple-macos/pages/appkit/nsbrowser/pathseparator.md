> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/pathseparator](https://developer.apple.com/documentation/appkit/nsbrowser/pathseparator)

# pathSeparator (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The path separator.

## Declaration

```swift
var pathSeparator: String { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `/`.

## See Also

### Managing the Path

- [path()](path%28%29.md): Returns a string representing the browser’s current path.
- [setPath(\_:)](setpath%28__%29.md): Sets the path to be displayed by the browser.
- [path(toColumn:)](path%28tocolumn_%29.md): Returns a string representing the path from the first column up to, but not including, the column at the given index.

# pathSeparator (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The path separator.

## Declaration

```objectivec
@property (copy) NSString * pathSeparator;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `/`.

## See Also

### Managing the Path

- [path](path%28%29.md): Returns a string representing the browser’s current path.
- [setPath:](setpath%28__%29.md): Sets the path to be displayed by the browser.
- [pathToColumn:](path%28tocolumn_%29.md): Returns a string representing the path from the first column up to, but not including, the column at the given index.
