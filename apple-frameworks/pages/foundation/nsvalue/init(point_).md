> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsvalue/init(point:)](https://developer.apple.com/documentation/foundation/nsvalue/init(point:))

# init(point:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Creates a new value object containing the specified Foundation point structure.

## Declaration

```swift
init(point: NSPoint)
```

## Parameters

- `point`: The value for the new object.

<a id="return-value"></a>

## Return Value

A new value object that contains the point information.

## See Also

### Related Documentation

- [NSPoint](../nspoint.md): A point in a Cartesian coordinate system.

### Working with Foundation Geometry Values

- [init(size:)](init%28size_%29.md): Creates a new value object containing the specified Foundation size structure.
- [init(rect:)](init%28rect_%29.md): Creates a new value object containing the specified Foundation rectangle structure.
- [pointValue](pointvalue.md): The Foundation point structure representation of the value.
- [sizeValue](sizevalue.md): The Foundation size structure representation of the value.
- [rectValue](rectvalue.md): The Foundation rectangle structure representation of the value.

# valueWithPoint: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Creates a new value object containing the specified Foundation point structure.

## Declaration

```objectivec
+ (NSValue *) valueWithPoint:(NSPoint) point;
```

## Parameters

- `point`: The value for the new object.

<a id="return-value"></a>

## Return Value

A new value object that contains the point information.

## See Also

### Related Documentation

- [NSPoint](../nspoint.md): A point in a Cartesian coordinate system.

### Working with Foundation Geometry Values

- [valueWithSize:](init%28size_%29.md): Creates a new value object containing the specified Foundation size structure.
- [valueWithRect:](init%28rect_%29.md): Creates a new value object containing the specified Foundation rectangle structure.
- [pointValue](pointvalue.md): The Foundation point structure representation of the value.
- [sizeValue](sizevalue.md): The Foundation size structure representation of the value.
- [rectValue](rectvalue.md): The Foundation rectangle structure representation of the value.
