> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/gamecontroller/gcspatialaccessory/haptics

# haptics (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** visionOS 27.0+

Gets the haptics for the device, if supported.

## Declaration

```swift
var haptics: GCDeviceHaptics? { get }
```

<a id="discussion"></a>

## Discussion

Use this property to create CHHapticEngine instances according to your needs.

> **Note**

> Haptics are a drain on the devices’s battery, and can be distracting when used excessively.

# haptics (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** visionOS 27.0+

Gets the haptics for the device, if supported.

## Declaration

```objectivec
@property (strong, readonly, nullable) GCDeviceHaptics * haptics;
```

<a id="discussion"></a>

## Discussion

Use this property to create CHHapticEngine instances according to your needs.

> **Note**

> Haptics are a drain on the devices’s battery, and can be distracting when used excessively.
