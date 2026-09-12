> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkcrownsequencer/rotationspersecond](https://developer.apple.com/documentation/watchkit/wkcrownsequencer/rotationspersecond)

# rotationsPerSecond (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 3.0+

The rotational speed of the crown, measured in rotations per second.

## Declaration

```swift
var rotationsPerSecond: Double { get }
```

<a id="Discussion"></a>

## Discussion

This property contains the last reported rotational speed of the crown in rotations per second.  The rotational speed is an absolute value. It is always positive, regardless of the rotation’s direction.

## See Also

### Related Documentation

- [crownDidRotate(\_:rotationalDelta:)](../wkcrowndelegate/crowndidrotate%28__rotationaldelta_%29.md): Called when the user rotates the crown.

### Getting the Current Crown Status

- [isIdle](isidle.md): A Boolean value indicating whether the crown is at rest.

# rotationsPerSecond (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 3.0+

The rotational speed of the crown, measured in rotations per second.

## Declaration

```objectivec
@property (nonatomic, readonly) double rotationsPerSecond;
```

<a id="Discussion"></a>

## Discussion

This property contains the last reported rotational speed of the crown in rotations per second.  The rotational speed is an absolute value. It is always positive, regardless of the rotation’s direction.

## See Also

### Related Documentation

- [crownDidRotate:rotationalDelta:](../wkcrowndelegate/crowndidrotate%28__rotationaldelta_%29.md): Called when the user rotates the crown.

### Getting the Current Crown Status

- [idle](isidle.md): A Boolean value indicating whether the crown is at rest.
