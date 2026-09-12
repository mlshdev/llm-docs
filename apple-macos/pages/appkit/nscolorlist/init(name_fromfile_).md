> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorlist/init(name:fromfile:)](https://developer.apple.com/documentation/appkit/nscolorlist/init(name:fromfile:))

# init(name:fromFile:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Initializes and returns a color list from the specified file, registering it under the specified name if it isn’t in use already.

## Declaration

```swift
init?(name: NSColorList.Name, fromFile path: String?)
```

## Parameters

- `name`: The name of the file for the color list (minus the `“.clr”` extension). Specify `@””` if you don’t want a name.
- `path`: The full path to the file for the color list. A `nil` path indicates the color list should be initialized with no colors.

<a id="Discussion"></a>

## Discussion

Note that this method does not add the color list to [availableColorLists](availablecolorlists.md) until the color list is saved into the user’s path with [write(toFile:)](write%28tofile_%29.md) with a value of `nil`.

## See Also

### Creating Lists of Colors

- [init(name:)](init%28name_%29.md): Initializes and returns a color list, registering it under the specified name if it isn’t in use already.

# initWithName:fromFile: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Initializes and returns a color list from the specified file, registering it under the specified name if it isn’t in use already.

## Declaration

```objectivec
- (instancetype) initWithName:(NSColorListName) name fromFile:(NSString *) path;
```

## Parameters

- `name`: The name of the file for the color list (minus the `“.clr”` extension). Specify `@””` if you don’t want a name.
- `path`: The full path to the file for the color list. A `nil` path indicates the color list should be initialized with no colors.

<a id="Discussion"></a>

## Discussion

Note that this method does not add the color list to [availableColorLists](availablecolorlists.md) until the color list is saved into the user’s path with [writeToFile:](write%28tofile_%29.md) with a value of `nil`.

## See Also

### Creating Lists of Colors

- [initWithName:](init%28name_%29.md): Initializes and returns a color list, registering it under the specified name if it isn’t in use already.
