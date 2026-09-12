> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clbeaconregion/notifyentrystateondisplay](https://developer.apple.com/documentation/corelocation/clbeaconregion/notifyentrystateondisplay)

# notifyEntryStateOnDisplay (Swift)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0)

A Boolean value that indicates whether Core Location sends beacon notifications when the device’s display is on.

## Declaration

```swift
var notifyEntryStateOnDisplay: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When you set this to [true](https://developer.apple.com/documentation/swift/true), the location manager sends beacon notifications when the user turns on the display and the device is already inside the region. These are notifications the framework sends even if your app isn’t running. In that situation, the system launches your app into the background so that it can handle the notifications. In both situations, the location manager calls the [locationManager(\_:didDetermineState:for:)](../cllocationmanagerdelegate/locationmanager%28__diddeterminestate_for_%29.md) method of its delegate object.

The default value for this property is [false](https://developer.apple.com/documentation/swift/false).

# notifyEntryStateOnDisplay (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0)

A Boolean value that indicates whether Core Location sends beacon notifications when the device’s display is on.

## Declaration

```objectivec
@property (atomic, assign) BOOL notifyEntryStateOnDisplay;
```

<a id="Discussion"></a>

## Discussion

When you set this to [true](https://developer.apple.com/documentation/swift/true), the location manager sends beacon notifications when the user turns on the display and the device is already inside the region. These are notifications the framework sends even if your app isn’t running. In that situation, the system launches your app into the background so that it can handle the notifications. In both situations, the location manager calls the [locationManager:didDetermineState:forRegion:](../cllocationmanagerdelegate/locationmanager%28__diddeterminestate_for_%29.md) method of its delegate object.

The default value for this property is [false](https://developer.apple.com/documentation/swift/false).
