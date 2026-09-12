> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vncircle/contains(_:)](https://developer.apple.com/documentation/vision/vncircle/contains(_:))

# contains(\_:) (Swift)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Determines if this circle, including its boundary, contains the specified point.

## Declaration

```swift
func contains(_ point: VNPoint) -> Bool
```

## Parameters

- `point`: The point to test.

<a id="return-value"></a>

## Return Value

[true](../../foundation/nsexpression/true.md) if the point is contained within this circle, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Inspecting a Circle

- [center](center.md): The circle’s center point.
- [diameter](diameter.md): The circle’s diameter.
- [radius](radius.md): The circle’s radius.
- [contains(\_:inCircumferentialRingOfWidth:)](contains%28__incircumferentialringofwidth_%29.md): Determines if a ring around this circle’s circumference contains the specified point.

# containsPoint: (Objective-C)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Determines if this circle, including its boundary, contains the specified point.

## Declaration

```objectivec
- (BOOL) containsPoint:(VNPoint *) point;
```

## Parameters

- `point`: The point to test.

<a id="return-value"></a>

## Return Value

[trueExpression](../../foundation/nsexpression/true.md) if the point is contained within this circle, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Inspecting a Circle

- [center](center.md): The circle’s center point.
- [diameter](diameter.md): The circle’s diameter.
- [radius](radius.md): The circle’s radius.
- [containsPoint:inCircumferentialRingOfWidth:](contains%28__incircumferentialringofwidth_%29.md): Determines if a ring around this circle’s circumference contains the specified point.
