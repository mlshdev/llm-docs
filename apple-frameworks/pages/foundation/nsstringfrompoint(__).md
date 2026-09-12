> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstringfrompoint(_:)](https://developer.apple.com/documentation/foundation/nsstringfrompoint(_:))

# NSStringFromPoint(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns a string representation of a point.

## Declaration

```swift
func NSStringFromPoint(_ aPoint: NSPoint) -> String
```

## Parameters

- `aPoint`: A point structure.

<a id="return-value"></a>

## Return Value

A string of the form “{a, b}”, where a and b are the x and y coordinates of `aPoint`.

## See Also

### Managing Points

- [NSEqualPoints(\_:\_:)](nsequalpoints%28____%29.md): Returns a Boolean value that indicates whether two points are equal.
- [NSMakePoint(\_:\_:)](nsmakepoint%28____%29.md): Creates a new `NSPoint` from the specified values.
- [NSPointFromString(\_:)](nspointfromstring%28__%29.md): Returns a point from a text-based representation.
- [NSPointFromCGPoint(\_:)](nspointfromcgpoint%28__%29.md): Returns an `NSPoint` typecast from a `CGPoint`.
- [NSPointToCGPoint(\_:)](nspointtocgpoint%28__%29.md): Returns a `CGPoint` typecast from an `NSPoint`.

# NSStringFromPoint (Objective-C)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns a string representation of a point.

## Declaration

```objectivec
extern NSString *NSStringFromPoint(NSPoint aPoint);
```

## Parameters

- `aPoint`: A point structure.

<a id="return-value"></a>

## Return Value

A string of the form “{a, b}”, where a and b are the x and y coordinates of `aPoint`.

## See Also

### Managing Points

- [NSEqualPoints](nsequalpoints%28____%29.md): Returns a Boolean value that indicates whether two points are equal.
- [NSMakePoint](nsmakepoint%28____%29.md): Creates a new `NSPoint` from the specified values.
- [NSPointFromString](nspointfromstring%28__%29.md): Returns a point from a text-based representation.
- [NSPointFromCGPoint](nspointfromcgpoint%28__%29.md): Returns an `NSPoint` typecast from a `CGPoint`.
- [NSPointToCGPoint](nspointtocgpoint%28__%29.md): Returns a `CGPoint` typecast from an `NSPoint`.
