> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nspointfromstring(_:)](https://developer.apple.com/documentation/foundation/nspointfromstring(_:))

# NSPointFromString(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns a point from a text-based representation.

## Declaration

```swift
func NSPointFromString(_ aString: String) -> NSPoint
```

## Parameters

- `aString`: A string of the form “{x, y}”.

<a id="return-value"></a>

## Return Value

If `aString` is of the form “{x, y}” an `NSPoint` structure that uses x and y as the x and y coordinates, in that order.

<a id="discussion"></a>

## Discussion

If `aString` only contains a single number, it is used as the x coordinate. If `aString` does not contain any numbers, returns an `NSPoint` object whose x and y coordinates are both 0.

## See Also

### Managing Points

- [NSEqualPoints(\_:\_:)](nsequalpoints%28____%29.md): Returns a Boolean value that indicates whether two points are equal.
- [NSMakePoint(\_:\_:)](nsmakepoint%28____%29.md): Creates a new `NSPoint` from the specified values.
- [NSStringFromPoint(\_:)](nsstringfrompoint%28__%29.md): Returns a string representation of a point.
- [NSPointFromCGPoint(\_:)](nspointfromcgpoint%28__%29.md): Returns an `NSPoint` typecast from a `CGPoint`.
- [NSPointToCGPoint(\_:)](nspointtocgpoint%28__%29.md): Returns a `CGPoint` typecast from an `NSPoint`.

# NSPointFromString (Objective-C)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns a point from a text-based representation.

## Declaration

```objectivec
extern NSPoint NSPointFromString(NSString *aString);
```

## Parameters

- `aString`: A string of the form “{x, y}”.

<a id="return-value"></a>

## Return Value

If `aString` is of the form “{x, y}” an `NSPoint` structure that uses x and y as the x and y coordinates, in that order.

<a id="discussion"></a>

## Discussion

If `aString` only contains a single number, it is used as the x coordinate. If `aString` does not contain any numbers, returns an `NSPoint` object whose x and y coordinates are both 0.

## See Also

### Managing Points

- [NSEqualPoints](nsequalpoints%28____%29.md): Returns a Boolean value that indicates whether two points are equal.
- [NSMakePoint](nsmakepoint%28____%29.md): Creates a new `NSPoint` from the specified values.
- [NSStringFromPoint](nsstringfrompoint%28__%29.md): Returns a string representation of a point.
- [NSPointFromCGPoint](nspointfromcgpoint%28__%29.md): Returns an `NSPoint` typecast from a `CGPoint`.
- [NSPointToCGPoint](nspointtocgpoint%28__%29.md): Returns a `CGPoint` typecast from an `NSPoint`.
