> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidraginteraction/isenabledbydefault](https://developer.apple.com/documentation/uikit/uidraginteraction/isenabledbydefault)

# isEnabledByDefault (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A device-dependent Boolean value that indicates whether a newly-instantiated drag interaction is allowed to participate in a drag activity.

## Declaration

```swift
class var isEnabledByDefault: Bool { get }
```

## See Also

### Enabling the interactions

- [isEnabled](isenabled.md): A Boolean value that specifies whether the drag interaction responds to touches and is allowed to participate in a drag activity.

# enabledByDefault (Objective-C)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A device-dependent Boolean value that indicates whether a newly-instantiated drag interaction is allowed to participate in a drag activity.

## Declaration

```objectivec
@property (class, nonatomic, readonly, getter=isEnabledByDefault) BOOL enabledByDefault;
```

## See Also

### Enabling the interactions

- [enabled](isenabled.md): A Boolean value that specifies whether the drag interaction responds to touches and is allowed to participate in a drag activity.
