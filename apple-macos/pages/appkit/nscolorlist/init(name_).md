> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorlist/init(name:)](https://developer.apple.com/documentation/appkit/nscolorlist/init(name:))

# init(name:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Initializes and returns a color list, registering it under the specified name if it isn’t in use already.

## Declaration

```swift
init(name: NSColorList.Name)
```

## Parameters

- `name`: The name under which to register the color list. Specify `@””` if you don’t want a name.

<a id="return-value"></a>

## Return Value

The initialized color list.

<a id="Discussion"></a>

## Discussion

This method invokes [init(name:fromFile:)](init%28name_fromfile_%29.md) with a `fromFile:` argument of `nil`, indicating that the color list doesn’t need to be initialized from a file. Note that this method does not add the color list to [availableColorLists](availablecolorlists.md) until the color list is saved into the user’s path with [write(toFile:)](write%28tofile_%29.md) with a value of `nil`.

## See Also

### Related Documentation

- [init(name:fromFile:)](init%28name_fromfile_%29.md): Initializes and returns a color list from the specified file, registering it under the specified name if it isn’t in use already.

### Creating Lists of Colors

- [init(name:fromFile:)](init%28name_fromfile_%29.md): Initializes and returns a color list from the specified file, registering it under the specified name if it isn’t in use already.

# initWithName: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Initializes and returns a color list, registering it under the specified name if it isn’t in use already.

## Declaration

```objectivec
- (instancetype) initWithName:(NSColorListName) name;
```

## Parameters

- `name`: The name under which to register the color list. Specify `@””` if you don’t want a name.

<a id="return-value"></a>

## Return Value

The initialized color list.

<a id="Discussion"></a>

## Discussion

This method invokes [initWithName:fromFile:](init%28name_fromfile_%29.md) with a `fromFile:` argument of `nil`, indicating that the color list doesn’t need to be initialized from a file. Note that this method does not add the color list to [availableColorLists](availablecolorlists.md) until the color list is saved into the user’s path with [writeToFile:](write%28tofile_%29.md) with a value of `nil`.

## See Also

### Related Documentation

- [initWithName:fromFile:](init%28name_fromfile_%29.md): Initializes and returns a color list from the specified file, registering it under the specified name if it isn’t in use already.

### Creating Lists of Colors

- [initWithName:fromFile:](init%28name_fromfile_%29.md): Initializes and returns a color list from the specified file, registering it under the specified name if it isn’t in use already.
