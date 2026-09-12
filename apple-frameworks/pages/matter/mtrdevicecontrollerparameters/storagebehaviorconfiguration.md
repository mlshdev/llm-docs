> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrdevicecontrollerparameters/storagebehaviorconfiguration](https://developer.apple.com/documentation/matter/mtrdevicecontrollerparameters/storagebehaviorconfiguration)

# storageBehaviorConfiguration (Swift)

**Framework:** Matter  
**Kind:** Instance Property  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

Sets the storage behavior configuration - see MTRDeviceStorageBehaviorConfiguration.h for details

## Declaration

```swift
@NSCopying var storageBehaviorConfiguration: MTRDeviceStorageBehaviorConfiguration? { get set }
```

<a id="discussion"></a>

## Discussion

If this value is nil, a default storage behavior configuration will be used.

# storageBehaviorConfiguration (Objective-C)

**Framework:** Matter  
**Kind:** Instance Property  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

Sets the storage behavior configuration - see MTRDeviceStorageBehaviorConfiguration.h for details

## Declaration

```objectivec
@property (nonatomic, copy, nullable) MTRDeviceStorageBehaviorConfiguration * storageBehaviorConfiguration;
```

<a id="discussion"></a>

## Discussion

If this value is nil, a default storage behavior configuration will be used.
