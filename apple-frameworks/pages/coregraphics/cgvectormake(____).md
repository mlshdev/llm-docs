> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgvectormake(_:_:)](https://developer.apple.com/documentation/coregraphics/cgvectormake(_:_:))

# CGVectorMake(\_:\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a vector with the specified dimension values.

## Declaration

```swift
func CGVectorMake(_ dx: CGFloat, _ dy: CGFloat) -> CGVector
```

## Parameters

- `dx`: The x-coordinate of the vector to construct.
- `dy`: The y-coordinate of the vector to construct.

<a id="return-value"></a>

## Return Value

Returns a [CGVector](../corefoundation/cgvector.md) structure with the specified coordinates.

## See Also

### Creating a Geometric Primitive from Values

- [CGPointMake(\_:\_:)](cgpointmake%28____%29.md): Returns a point with the specified coordinates.
- [CGRectMake(\_:\_:\_:\_:)](cgrectmake%28________%29.md): Returns a rectangle with the specified coordinate and size values.
- [CGSizeMake(\_:\_:)](cgsizemake%28____%29.md): Returns a size with the specified dimension values.

# CGVectorMake (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a vector with the specified dimension values.

## Declaration

```objectivec
static CGVector CGVectorMake(CGFloat dx, CGFloat dy);
```

## Parameters

- `dx`: The x-coordinate of the vector to construct.
- `dy`: The y-coordinate of the vector to construct.

<a id="return-value"></a>

## Return Value

Returns a [CGVector](../corefoundation/cgvector.md) structure with the specified coordinates.

## See Also

### Creating a Geometric Primitive from Values

- [CGPointMake](cgpointmake%28____%29.md): Returns a point with the specified coordinates.
- [CGRectMake](cgrectmake%28________%29.md): Returns a rectangle with the specified coordinate and size values.
- [CGSizeMake](cgsizemake%28____%29.md): Returns a size with the specified dimension values.
