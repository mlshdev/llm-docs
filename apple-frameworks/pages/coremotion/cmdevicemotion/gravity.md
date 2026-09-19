> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremotion/cmdevicemotion/gravity

# gravity (Swift)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 2.0+

The gravity acceleration vector expressed in the device’s reference frame.

## Declaration

```swift
var gravity: CMAcceleration { get }
```

<a id="Discussion"></a>

## Discussion

The total acceleration of the device is equal to gravity plus the acceleration the user imparts to the device ([userAcceleration](useracceleration.md)).

## See Also

### Getting Acceleration Data

- [userAcceleration](useracceleration.md): The acceleration that the user is giving to the device.

# gravity (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 2.0+

The gravity acceleration vector expressed in the device’s reference frame.

## Declaration

```objectivec
@property (nonatomic, readonly) CMAcceleration gravity;
```

<a id="Discussion"></a>

## Discussion

The total acceleration of the device is equal to gravity plus the acceleration the user imparts to the device ([userAcceleration](useracceleration.md)).

## See Also

### Getting Acceleration Data

- [userAcceleration](useracceleration.md): The acceleration that the user is giving to the device.
