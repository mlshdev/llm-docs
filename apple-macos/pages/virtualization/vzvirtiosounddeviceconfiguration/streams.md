> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/virtualization/vzvirtiosounddeviceconfiguration/streams

# streams (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

List of audio streams exposed by this device.

## Declaration

```swift
var streams: [VZVirtioSoundDeviceStreamConfiguration] { get set }
```

<a id="Discussion"></a>

## Discussion

Empty by default.

# streams (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

List of audio streams exposed by this device.

## Declaration

```objectivec
@property (copy) NSArray<VZVirtioSoundDeviceStreamConfiguration *> * streams;
```

<a id="Discussion"></a>

## Discussion

Empty by default.
