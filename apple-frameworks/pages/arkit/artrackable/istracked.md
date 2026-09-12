> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/artrackable/istracked](https://developer.apple.com/documentation/arkit/artrackable/istracked)

# isTracked (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

A Boolean value that indicates whether the object’s transform is valid.

## Declaration

```swift
var isTracked: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If this value is [true](https://developer.apple.com/documentation/swift/true), the object’s transform currently matches the position and orientation of the real-world object it represents.

If this value is [false](https://developer.apple.com/documentation/swift/false), the object is not guaranteed to match the movement of its corresponding real-world feature, even if it remains in the visible scene.

# isTracked (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

A Boolean value that indicates whether the object’s transform is valid.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL isTracked;
```

<a id="Discussion"></a>

## Discussion

If this value is [true](https://developer.apple.com/documentation/swift/true), the object’s transform currently matches the position and orientation of the real-world object it represents.

If this value is [false](https://developer.apple.com/documentation/swift/false), the object is not guaranteed to match the movement of its corresponding real-world feature, even if it remains in the visible scene.
