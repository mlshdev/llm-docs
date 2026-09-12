> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsvalue/init(size:)](https://developer.apple.com/documentation/foundation/nsvalue/init(size:))

# init(size:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Creates a new value object containing the specified Foundation size structure.

## Declaration

```swift
init(size: NSSize)
```

## Parameters

- `size`: The value for the new object.

<a id="return-value"></a>

## Return Value

A new value object that contains the size information.

## See Also

### Related Documentation

- [NSSize](../nssize.md): A two-dimensional size.

### Working with Foundation Geometry Values

- [init(point:)](init%28point_%29.md): Creates a new value object containing the specified Foundation point structure.
- [init(rect:)](init%28rect_%29.md): Creates a new value object containing the specified Foundation rectangle structure.
- [pointValue](pointvalue.md): The Foundation point structure representation of the value.
- [sizeValue](sizevalue.md): The Foundation size structure representation of the value.
- [rectValue](rectvalue.md): The Foundation rectangle structure representation of the value.

# valueWithSize: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Creates a new value object containing the specified Foundation size structure.

## Declaration

```objectivec
+ (NSValue *) valueWithSize:(NSSize) size;
```

## Parameters

- `size`: The value for the new object.

<a id="return-value"></a>

## Return Value

A new value object that contains the size information.

## See Also

### Related Documentation

- [NSSize](../nssize.md): A two-dimensional size.

### Working with Foundation Geometry Values

- [valueWithPoint:](init%28point_%29.md): Creates a new value object containing the specified Foundation point structure.
- [valueWithRect:](init%28rect_%29.md): Creates a new value object containing the specified Foundation rectangle structure.
- [pointValue](pointvalue.md): The Foundation point structure representation of the value.
- [sizeValue](sizevalue.md): The Foundation size structure representation of the value.
- [rectValue](rectvalue.md): The Foundation rectangle structure representation of the value.
