> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avcapturedevicedirectioncoordinator/init(view:devicetypes:changehandler:)

# init(view:deviceTypes:changeHandler:) (Swift)

**Framework:** AVKit  
**Kind:** Initializer  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

Creates a coordinator that reports the direction cameras face in relation to the specified view.

## Declaration

```swift
init(view: UIView, deviceTypes: [AVCaptureDevice.DeviceType], changeHandler: ((AVCaptureDeviceDirectionMap) -> Void)? = nil)
```

## Parameters

- `view`: The view that camera directions are relative to.
- `deviceTypes`: The device types the coordinator considers. It reports no other cameras.
- `changeHandler`: A callback the coordinator invokes on the main actor soon after you create it, and again each time a camera changes direction. It receives an [AVCaptureDeviceDirectionMap](../avcapturedevicedirectionmap.md) that groups the cameras by the direction they now face. Pass `nil` to read [deviceDirections](devicedirections.md) yourself instead of receiving updates. A coordinator keeps the handler it’s created with, so create a new coordinator to change it.

<a id="discussion"></a>

## Discussion

> **Note**

> Initialize the coordinator only on the main actor.

# initWithView:deviceTypes:changeHandler: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

Creates a coordinator that reports the direction cameras face in relation to the specified view.

## Declaration

```objectivec
- (instancetype) initWithView:(UIView *) view deviceTypes:(NSArray<NSString *> *) deviceTypes changeHandler:(void (^)(AVCaptureDeviceDirectionMap *deviceDirections)) changeHandler;
```

## Parameters

- `view`: The view that camera directions are relative to.
- `deviceTypes`: The device types the coordinator considers. It reports no other cameras.
- `changeHandler`: A callback the coordinator invokes on the main actor soon after you create it, and again each time a camera changes direction. It receives an [AVCaptureDeviceDirectionMap](../avcapturedevicedirectionmap.md) that groups the cameras by the direction they now face. Pass `nil` to read [deviceDirections](devicedirections.md) yourself instead of receiving updates. A coordinator keeps the handler it’s created with, so create a new coordinator to change it.

<a id="discussion"></a>

## Discussion

> **Note**

> Initialize the coordinator only on the main actor.
