> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwareobject/addlistener(forproperties:dispatchqueue:)](https://developer.apple.com/documentation/coreaudio/audiohardwareobject/addlistener(forproperties:dispatchqueue:))

# addListener(forProperties:dispatchQueue:)

**Framework:** Core Audio  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 15.0+

Registers for notifications to be received on the property listener delegates when the given properties change.

## Declaration

```swift
func addListener(forProperties properties: [AudioObjectPropertyAddress], dispatchQueue: dispatch_queue_t? = nil) throws
```

## Parameters

- `properties`: An array of AudioObjectPropertyAddresses indicating which properties the listener should notify about.
- `dispatchQueue`: The dispatch queue on which the delegates will be called. All delegate calls will be dispatched asynchronously save for those dispatched from the IO context (of which kAudioDevicePropertyDeviceIsRunning and kAudioDeviceProcessorOverload are the only examples) which will be dispatched synchronously. Note that this dispatch queue will be retained until a matching call to removePropertyListener is made. If this value is nil, then the delegates will be directly called.

<a id="discussion"></a>

## Discussion

The AudioHardwareObject’s delegates property must contain at least one delegate for listeners to be called.
