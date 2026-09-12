> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgrectgetwidth(_:)](https://developer.apple.com/documentation/coregraphics/cgrectgetwidth(_:))

# CGRectGetWidth(\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the width of a rectangle.

## Declaration

```swift
func CGRectGetWidth(_ rect: CGRect) -> CGFloat
```

## Parameters

- `rect`: The rectangle to examine.

<a id="return-value"></a>

## Return Value

The width of the specified rectangle.

<a id="Discussion"></a>

## Discussion

Regardless of whether the width is stored in the [CGRect](../corefoundation/cgrect.md) data structure as a positive or negative number, this function returns the width as if the rectangle were standardized.  That is, the result is never a negative number.

## See Also

### Getting Height and Width

- [CGRectGetHeight(\_:)](cgrectgetheight%28__%29.md): Returns the height of a rectangle.

# CGRectGetWidth (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the width of a rectangle.

## Declaration

```objectivec
extern CGFloat CGRectGetWidth(CGRect rect);
```

## Parameters

- `rect`: The rectangle to examine.

<a id="return-value"></a>

## Return Value

The width of the specified rectangle.

<a id="Discussion"></a>

## Discussion

Regardless of whether the width is stored in the [CGRect](../corefoundation/cgrect.md) data structure as a positive or negative number, this function returns the width as if the rectangle were standardized.  That is, the result is never a negative number.

## See Also

### Getting Height and Width

- [CGRectGetHeight](cgrectgetheight%28__%29.md): Returns the height of a rectangle.
