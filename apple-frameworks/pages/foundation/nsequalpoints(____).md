> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsequalpoints(_:_:)](https://developer.apple.com/documentation/foundation/nsequalpoints(_:_:))

# NSEqualPoints(\_:\_:) (Swift)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns a Boolean value that indicates whether two points are equal.

## Declaration

```swift
func NSEqualPoints(_ aPoint: NSPoint, _ bPoint: NSPoint) -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the two points `aPoint` and `bPoint` are identical, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing Points

- [NSMakePoint(\_:\_:)](nsmakepoint%28____%29.md): Creates a new `NSPoint` from the specified values.
- [NSPointFromString(\_:)](nspointfromstring%28__%29.md): Returns a point from a text-based representation.
- [NSStringFromPoint(\_:)](nsstringfrompoint%28__%29.md): Returns a string representation of a point.
- [NSPointFromCGPoint(\_:)](nspointfromcgpoint%28__%29.md): Returns an `NSPoint` typecast from a `CGPoint`.
- [NSPointToCGPoint(\_:)](nspointtocgpoint%28__%29.md): Returns a `CGPoint` typecast from an `NSPoint`.

# NSEqualPoints (Objective-C)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns a Boolean value that indicates whether two points are equal.

## Declaration

```objectivec
extern BOOL NSEqualPoints(NSPoint aPoint, NSPoint bPoint);
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the two points `aPoint` and `bPoint` are identical, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing Points

- [NSMakePoint](nsmakepoint%28____%29.md): Creates a new `NSPoint` from the specified values.
- [NSPointFromString](nspointfromstring%28__%29.md): Returns a point from a text-based representation.
- [NSStringFromPoint](nsstringfrompoint%28__%29.md): Returns a string representation of a point.
- [NSPointFromCGPoint](nspointfromcgpoint%28__%29.md): Returns an `NSPoint` typecast from a `CGPoint`.
- [NSPointToCGPoint](nspointtocgpoint%28__%29.md): Returns a `CGPoint` typecast from an `NSPoint`.
