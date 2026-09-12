> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorlist/availablecolorlists](https://developer.apple.com/documentation/appkit/nscolorlist/availablecolorlists)

# availableColorLists (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns an array of all color lists found in the standard color list directories.

## Declaration

```swift
class var availableColorLists: [NSColorList] { get }
```

<a id="return-value"></a>

## Return Value

An array of `NSColorList` objects representing all of the color lists found in the standard color list directories, including color catalogs (lists of colors identified only by name). Color lists created at runtime aren’t included in this list unless they’re saved into one of the standard color list directories.

## See Also

### Getting Lists of Colors

- [init(named:)](init%28named_%29.md): Searches the available color lists array and returns the color list with the specified name.

# availableColorLists (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns an array of all color lists found in the standard color list directories.

## Declaration

```objectivec
@property (class, copy, readonly) NSArray<NSColorList *> * availableColorLists;
```

<a id="return-value"></a>

## Return Value

An array of `NSColorList` objects representing all of the color lists found in the standard color list directories, including color catalogs (lists of colors identified only by name). Color lists created at runtime aren’t included in this list unless they’re saved into one of the standard color list directories.

## See Also

### Getting Lists of Colors

- [colorListNamed:](init%28named_%29.md): Searches the available color lists array and returns the color list with the specified name.
