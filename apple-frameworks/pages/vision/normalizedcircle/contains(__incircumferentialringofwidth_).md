> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/normalizedcircle/contains(_:incircumferentialringofwidth:)](https://developer.apple.com/documentation/vision/normalizedcircle/contains(_:incircumferentialringofwidth:))

# contains(\_:inCircumferentialRingOfWidth:)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

Returns a Boolean value that indicates whether a ring around this circle’s circumference contains the specified point.

## Declaration

```swift
func contains(_ point: NormalizedPoint, inCircumferentialRingOfWidth ringWidth: CGFloat) -> Bool
```

## Parameters

- `point`: The normalized point.
- `ringWidth`: The ring width.

## See Also

### Determining whether the circle contains a point

- [contains(\_:)](contains%28__%29.md): Returns a Boolean value that indicates whether this circle, including its boundary, contains the specified point.
