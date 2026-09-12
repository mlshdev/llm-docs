> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdateinterval/intersects(_:)](https://developer.apple.com/documentation/foundation/nsdateinterval/intersects(_:))

# intersects(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Indicates whether the receiver intersects with the specified date interval.

## Declaration

```swift
func intersects(_ dateInterval: DateInterval) -> Bool
```

## Parameters

- `dateInterval`: The date interval with which to check the receiver for intersection.

<a id="Discussion"></a>

## Discussion

See [intersection(with:)](intersection%28with_%29.md) for more information about determining whether two date intervals intersect.

## See Also

### Determining Intersections

- [intersection(with:)](intersection%28with_%29.md): Returns the intersection between the receiver and the specified date interval.

# intersectsDateInterval: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Indicates whether the receiver intersects with the specified date interval.

## Declaration

```objectivec
- (BOOL) intersectsDateInterval:(NSDateInterval *) dateInterval;
```

## Parameters

- `dateInterval`: The date interval with which to check the receiver for intersection.

<a id="Discussion"></a>

## Discussion

See [intersectionWithDateInterval:](intersection%28with_%29.md) for more information about determining whether two date intervals intersect.

## See Also

### Determining Intersections

- [intersectionWithDateInterval:](intersection%28with_%29.md): Returns the intersection between the receiver and the specified date interval.
