> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsvalue/init(rect:)](https://developer.apple.com/documentation/foundation/nsvalue/init(rect:))

# init(rect:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Creates a new value object containing the specified Foundation rectangle structure.

## Declaration

```swift
init(rect: NSRect)
```

## Parameters

- `rect`: The value for the new object.

<a id="return-value"></a>

## Return Value

A new value object that contains the data in the `rect` structure.

## See Also

### Related Documentation

- [NSRect](../nsrect.md): A rectangle.

### Working with Foundation Geometry Values

- [init(point:)](init%28point_%29.md): Creates a new value object containing the specified Foundation point structure.
- [init(size:)](init%28size_%29.md): Creates a new value object containing the specified Foundation size structure.
- [pointValue](pointvalue.md): The Foundation point structure representation of the value.
- [sizeValue](sizevalue.md): The Foundation size structure representation of the value.
- [rectValue](rectvalue.md): The Foundation rectangle structure representation of the value.

# valueWithRect: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Creates a new value object containing the specified Foundation rectangle structure.

## Declaration

```objectivec
+ (NSValue *) valueWithRect:(NSRect) rect;
```

## Parameters

- `rect`: The value for the new object.

<a id="return-value"></a>

## Return Value

A new value object that contains the data in the `rect` structure.

## See Also

### Related Documentation

- [NSRect](../nsrect.md): A rectangle.

### Working with Foundation Geometry Values

- [valueWithPoint:](init%28point_%29.md): Creates a new value object containing the specified Foundation point structure.
- [valueWithSize:](init%28size_%29.md): Creates a new value object containing the specified Foundation size structure.
- [pointValue](pointvalue.md): The Foundation point structure representation of the value.
- [sizeValue](sizevalue.md): The Foundation size structure representation of the value.
- [rectValue](rectvalue.md): The Foundation rectangle structure representation of the value.
