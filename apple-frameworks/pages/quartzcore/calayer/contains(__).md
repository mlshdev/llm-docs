> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayer/contains(_:)](https://developer.apple.com/documentation/quartzcore/calayer/contains(_:))

# contains(\_:) (Swift)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns whether the receiver contains a specified point.

## Declaration

```swift
func contains(_ p: CGPoint) -> Bool
```

## Parameters

- `p`: A point in the receiver’s coordinate system.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the bounds of the layer contains the point.

## See Also

### Hit testing

- [hitTest(\_:)](hittest%28__%29.md): Returns the farthest descendant of the receiver in the layer hierarchy (including itself) that contains the specified point.

# containsPoint: (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns whether the receiver contains a specified point.

## Declaration

```objectivec
- (BOOL) containsPoint:(CGPoint) p;
```

## Parameters

- `p`: A point in the receiver’s coordinate system.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the bounds of the layer contains the point.

## See Also

### Hit testing

- [hitTest:](hittest%28__%29.md): Returns the farthest descendant of the receiver in the layer hierarchy (including itself) that contains the specified point.
