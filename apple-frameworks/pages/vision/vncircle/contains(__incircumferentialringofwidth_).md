> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vncircle/contains(_:incircumferentialringofwidth:)](https://developer.apple.com/documentation/vision/vncircle/contains(_:incircumferentialringofwidth:))

# contains(\_:inCircumferentialRingOfWidth:) (Swift)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Determines if a ring around this circle’s circumference contains the specified point.

## Declaration

```swift
func contains(_ point: VNPoint, inCircumferentialRingOfWidth ringWidth: Double) -> Bool
```

## Parameters

- `point`: The point to test.
- `ringWidth`: The width of the ring around this circle’s circumference.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the ring contains the specified point, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Inspecting a Circle

- [center](center.md): The circle’s center point.
- [diameter](diameter.md): The circle’s diameter.
- [radius](radius.md): The circle’s radius.
- [contains(\_:)](contains%28__%29.md): Determines if this circle, including its boundary, contains the specified point.

# containsPoint:inCircumferentialRingOfWidth: (Objective-C)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Determines if a ring around this circle’s circumference contains the specified point.

## Declaration

```objectivec
- (BOOL) containsPoint:(VNPoint *) point inCircumferentialRingOfWidth:(double) ringWidth;
```

## Parameters

- `point`: The point to test.
- `ringWidth`: The width of the ring around this circle’s circumference.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the ring contains the specified point, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Inspecting a Circle

- [center](center.md): The circle’s center point.
- [diameter](diameter.md): The circle’s diameter.
- [radius](radius.md): The circle’s radius.
- [containsPoint:](contains%28__%29.md): Determines if this circle, including its boundary, contains the specified point.
