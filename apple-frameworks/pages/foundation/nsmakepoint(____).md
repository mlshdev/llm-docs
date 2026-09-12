> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmakepoint(_:_:)](https://developer.apple.com/documentation/foundation/nsmakepoint(_:_:))

# NSMakePoint(\_:\_:) (Swift)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Creates a new `NSPoint` from the specified values.

## Declaration

```swift
func NSMakePoint(_ x: Double, _ y: Double) -> NSPoint
```

<a id="return-value"></a>

## Return Value

An `NSPoint` having the coordinates `x` and `y`.

## See Also

### Managing Points

- [NSEqualPoints(\_:\_:)](nsequalpoints%28____%29.md): Returns a Boolean value that indicates whether two points are equal.
- [NSPointFromString(\_:)](nspointfromstring%28__%29.md): Returns a point from a text-based representation.
- [NSStringFromPoint(\_:)](nsstringfrompoint%28__%29.md): Returns a string representation of a point.
- [NSPointFromCGPoint(\_:)](nspointfromcgpoint%28__%29.md): Returns an `NSPoint` typecast from a `CGPoint`.
- [NSPointToCGPoint(\_:)](nspointtocgpoint%28__%29.md): Returns a `CGPoint` typecast from an `NSPoint`.

# NSMakePoint (Objective-C)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Creates a new `NSPoint` from the specified values.

## Declaration

```objectivec
static NSPoint NSMakePoint(CGFloat x, CGFloat y);
```

<a id="return-value"></a>

## Return Value

An `NSPoint` having the coordinates `x` and `y`.

## See Also

### Managing Points

- [NSEqualPoints](nsequalpoints%28____%29.md): Returns a Boolean value that indicates whether two points are equal.
- [NSPointFromString](nspointfromstring%28__%29.md): Returns a point from a text-based representation.
- [NSStringFromPoint](nsstringfrompoint%28__%29.md): Returns a string representation of a point.
- [NSPointFromCGPoint](nspointfromcgpoint%28__%29.md): Returns an `NSPoint` typecast from a `CGPoint`.
- [NSPointToCGPoint](nspointtocgpoint%28__%29.md): Returns a `CGPoint` typecast from an `NSPoint`.
