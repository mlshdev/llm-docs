> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorlist/init(named:)](https://developer.apple.com/documentation/appkit/nscolorlist/init(named:))

# init(named:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Searches the available color lists array and returns the color list with the specified name.

## Declaration

```swift
init?(named name: NSColorList.Name)
```

## Parameters

- `name`: The name of the color list to retrieve. This name must not include the “`.clr`” suffix.

<a id="return-value"></a>

## Return Value

The color list with the specified name or `nil` if no such color list exists.

## See Also

### Related Documentation

- [name](name-swift.property.md): The name of the color list.

### Getting Lists of Colors

- [availableColorLists](availablecolorlists.md): Returns an array of all color lists found in the standard color list directories.

# colorListNamed: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Searches the available color lists array and returns the color list with the specified name.

## Declaration

```objectivec
+ (NSColorList *) colorListNamed:(NSColorListName) name;
```

## Parameters

- `name`: The name of the color list to retrieve. This name must not include the “`.clr`” suffix.

<a id="return-value"></a>

## Return Value

The color list with the specified name or `nil` if no such color list exists.

## See Also

### Related Documentation

- [name](name-swift.property.md): The name of the color list.

### Getting Lists of Colors

- [availableColorLists](availablecolorlists.md): Returns an array of all color lists found in the standard color list directories.
