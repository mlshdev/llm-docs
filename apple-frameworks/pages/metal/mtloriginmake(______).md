> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtloriginmake(_:_:_:)](https://developer.apple.com/documentation/metal/mtloriginmake(_:_:_:))

# MTLOriginMake(\_:\_:\_:) (Swift)

**Framework:** Metal  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Returns a new origin with the specified coordinates.

## Declaration

```swift
func MTLOriginMake(_ x: Int, _ y: Int, _ z: Int) -> MTLOrigin
```

## Parameters

- `x`: The x coordinate.
- `y`: The y coordinate.
- `z`: The z coordinate.

<a id="return-value"></a>

## Return Value

The specified origin point.

## See Also

### Creating origin points

- [init()](mtlorigin/init%28%29.md): Initializes a new origin.
- [init(x:y:z:)](mtlorigin/init%28x_y_z_%29.md): Initializes a new origin with the specified coordinates.

# MTLOriginMake (Objective-C)

**Framework:** Metal  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Returns a new origin with the specified coordinates.

## Declaration

```objectivec
static MTLOrigin MTLOriginMake(NSUInteger x, NSUInteger y, NSUInteger z);
```

## Parameters

- `x`: The x coordinate.
- `y`: The y coordinate.
- `z`: The z coordinate.

<a id="return-value"></a>

## Return Value

The specified origin point.
