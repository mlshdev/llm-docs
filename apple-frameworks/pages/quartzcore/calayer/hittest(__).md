> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayer/hittest(_:)](https://developer.apple.com/documentation/quartzcore/calayer/hittest(_:))

# hitTest(\_:) (Swift)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns the farthest descendant of the receiver in the layer hierarchy (including itself) that contains the specified point.

## Declaration

```swift
func hitTest(_ p: CGPoint) -> CALayer?
```

## Parameters

- `p`: A point in the coordinate system of the receiver’s superlayer.

<a id="return-value"></a>

## Return Value

The layer that contains `thePoint` or `nil` if the point lies outside the receiver’s bounds rectangle.

## See Also

### Hit testing

- [contains(\_:)](contains%28__%29.md): Returns whether the receiver contains a specified point.

# hitTest: (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns the farthest descendant of the receiver in the layer hierarchy (including itself) that contains the specified point.

## Declaration

```objectivec
- (CALayer *) hitTest:(CGPoint) p;
```

## Parameters

- `p`: A point in the coordinate system of the receiver’s superlayer.

<a id="return-value"></a>

## Return Value

The layer that contains `thePoint` or `nil` if the point lies outside the receiver’s bounds rectangle.

## See Also

### Hit testing

- [containsPoint:](contains%28__%29.md): Returns whether the receiver contains a specified point.
