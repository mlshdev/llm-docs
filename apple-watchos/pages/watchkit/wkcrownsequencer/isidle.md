> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkcrownsequencer/isidle](https://developer.apple.com/documentation/watchkit/wkcrownsequencer/isidle)

# isIdle (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 3.0+

A Boolean value indicating whether the crown is at rest.

## Declaration

```swift
var isIdle: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the user is not rotating the crown and [false](https://developer.apple.com/documentation/swift/false) when the user is rotating the crown.

## See Also

### Related Documentation

- [crownDidBecomeIdle(\_:)](../wkcrowndelegate/crowndidbecomeidle%28__%29.md): Called when the user stops rotating the crown.

### Getting the Current Crown Status

- [rotationsPerSecond](rotationspersecond.md): The rotational speed of the crown, measured in rotations per second.

# idle (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 3.0+

A Boolean value indicating whether the crown is at rest.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isIdle) BOOL idle;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the user is not rotating the crown and [false](https://developer.apple.com/documentation/swift/false) when the user is rotating the crown.

## See Also

### Related Documentation

- [crownDidBecomeIdle:](../wkcrowndelegate/crowndidbecomeidle%28__%29.md): Called when the user stops rotating the crown.

### Getting the Current Crown Status

- [rotationsPerSecond](rotationspersecond.md): The rotational speed of the crown, measured in rotations per second.
