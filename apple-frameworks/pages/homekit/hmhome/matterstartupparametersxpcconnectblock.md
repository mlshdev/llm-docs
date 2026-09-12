> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmhome/matterstartupparametersxpcconnectblock](https://developer.apple.com/documentation/homekit/hmhome/matterstartupparametersxpcconnectblock)

# matterStartupParametersXPCConnectBlock (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

## Declaration

```swift
var matterStartupParametersXPCConnectBlock: () -> NSXPCConnection { get }
```

<a id="discussion"></a>

## Discussion

Block generating XPC connection on demand through which to access the Matter controller associated with this home. This property can be passed as part of an MTRXPCDeviceControllerParameters to create an MTRDeviceController that will have access to the Apple Home Fabric.

# matterStartupParametersXPCConnectBlock (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSXPCConnection *(^)(void) matterStartupParametersXPCConnectBlock;
```

<a id="discussion"></a>

## Discussion

Block generating XPC connection on demand through which to access the Matter controller associated with this home. This property can be passed as part of an MTRXPCDeviceControllerParameters to create an MTRDeviceController that will have access to the Apple Home Fabric.
