> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiokit/augenericviewdisplayflags](https://developer.apple.com/documentation/coreaudiokit/augenericviewdisplayflags)

# AUGenericViewDisplayFlags (Swift)

**Framework:** CoreAudioKit  
**Kind:** Structure  
**Availability:** macOS

Flags that describe the display of a generic view.

## Declaration

```swift
struct AUGenericViewDisplayFlags
```

## Topics

### Display Flags

- [viewParametersDisplayFlag](augenericviewdisplayflags/viewparametersdisplayflag.md): If set, the generic view displays the audio unit parameters of the audio unit.
- [viewPropertiesDisplayFlag](augenericviewdisplayflags/viewpropertiesdisplayflag.md): If set, the generic view displays the audio unit properties of the audio unit.
- [viewTitleDisplayFlag](augenericviewdisplayflags/viewtitledisplayflag.md): If set, the generic view displays the title and manufacturer of the audio unit.

### Initializers

- [init(rawValue:)](augenericviewdisplayflags/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

# AUGenericViewDisplayFlags (Objective-C)

**Framework:** CoreAudioKit  
**Kind:** Enumeration  
**Availability:** macOS

Flags that describe the display of a generic view.

## Declaration

```objectivec
enum AUGenericViewDisplayFlags : UInt32;
```

## Topics

### Display Flags

- [AUViewParametersDisplayFlag](augenericviewdisplayflags/viewparametersdisplayflag.md): If set, the generic view displays the audio unit parameters of the audio unit.
- [AUViewPropertiesDisplayFlag](augenericviewdisplayflags/viewpropertiesdisplayflag.md): If set, the generic view displays the audio unit properties of the audio unit.
- [AUViewTitleDisplayFlag](augenericviewdisplayflags/viewtitledisplayflag.md): If set, the generic view displays the title and manufacturer of the audio unit.
