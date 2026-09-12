> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgrectgetheight(_:)](https://developer.apple.com/documentation/coregraphics/cgrectgetheight(_:))

# CGRectGetHeight(\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the height of a rectangle.

## Declaration

```swift
func CGRectGetHeight(_ rect: CGRect) -> CGFloat
```

## Parameters

- `rect`: The rectangle to examine.

<a id="return-value"></a>

## Return Value

The height of the specified rectangle.

<a id="Discussion"></a>

## Discussion

Regardless of whether the height is stored in the [CGRect](../corefoundation/cgrect.md) data structure as a positive or negative number, this function returns the height as if the rectangle were standardized. That is, the result is never a negative number.

## See Also

### Getting Height and Width

- [CGRectGetWidth(\_:)](cgrectgetwidth%28__%29.md): Returns the width of a rectangle.

# CGRectGetHeight (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the height of a rectangle.

## Declaration

```objectivec
extern CGFloat CGRectGetHeight(CGRect rect);
```

## Parameters

- `rect`: The rectangle to examine.

<a id="return-value"></a>

## Return Value

The height of the specified rectangle.

<a id="Discussion"></a>

## Discussion

Regardless of whether the height is stored in the [CGRect](../corefoundation/cgrect.md) data structure as a positive or negative number, this function returns the height as if the rectangle were standardized. That is, the result is never a negative number.

## See Also

### Getting Height and Width

- [CGRectGetWidth](cgrectgetwidth%28__%29.md): Returns the width of a rectangle.
