> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/axmfihearingdevice/streamingear()](https://developer.apple.com/documentation/accessibility/axmfihearingdevice/streamingear())

# streamingEar() (Swift)

**Framework:** Accessibility  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns which ears enable streaming.

## Declaration

```swift
static func streamingEar() -> AXMFiHearingDevice.Ear
```

<a id="return-value"></a>

## Return Value

An [AXMFiHearingDevice.Ear](ear.md) constant that represents which ears enable streaming.

## See Also

### Streaming status

- [AXMFiHearingDevice.Ear](ear.md): Constants that represent a hearing device ear.
- [streamingEarDidChangeNotification](streamingeardidchangenotification.md): A notification that the system posts when there’s a change to which ears enable streaming.

# AXMFiHearingDeviceStreamingEar (Objective-C)

**Framework:** Accessibility  
**Kind:** Function  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns which ears enable streaming.

## Declaration

```objectivec
extern AXHearingDeviceEar AXMFiHearingDeviceStreamingEar();
```

<a id="return-value"></a>

## Return Value

An [AXHearingDeviceEar](ear.md) constant that represents which ears enable streaming.

## See Also

### Streaming status

- [AXHearingDeviceEar](ear.md): Constants that represent a hearing device ear.
- [AXMFiHearingDeviceStreamingEarDidChangeNotification](streamingeardidchangenotification.md): A notification that the system posts when there’s a change to which ears enable streaming.
