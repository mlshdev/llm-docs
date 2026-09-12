> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/nsstringfromgcpoint2(_:)](https://developer.apple.com/documentation/gamecontroller/nsstringfromgcpoint2(_:))

# NSStringFromGCPoint2(\_:) (Swift)

**Framework:** Game Controller  
**Kind:** Function  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.3+ · tvOS 17.4+ · visionOS 1.1+

Returns a string representation of a point.

## Declaration

```swift
func NSStringFromGCPoint2(_ point: GCPoint2) -> String
```

## Parameters

- `point`: The point to convert to a string.

<a id="return-value"></a>

## Return Value

A string of the form `{a, b}`, where `a` and `b` are the x and y coordinates of `point`.

## See Also

### Comparing and converting points

- [GCPoint2Equal(\_:\_:)](gcpoint2equal%28____%29.md): Returns whether two points are equal.

# NSStringFromGCPoint2 (Objective-C)

**Framework:** Game Controller  
**Kind:** Function  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.3+ · tvOS 17.4+ · visionOS 1.1+

Returns a string representation of a point.

## Declaration

```objectivec
extern NSString *NSStringFromGCPoint2(GCPoint2 point);
```

## Parameters

- `point`: The point to convert to a string.

<a id="return-value"></a>

## Return Value

A string of the form `{a, b}`, where `a` and `b` are the x and y coordinates of `point`.

## See Also

### Comparing and converting points

- [GCPoint2Equal](gcpoint2equal%28____%29.md): Returns whether two points are equal.
