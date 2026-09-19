> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corelocation/cllocationsourceinformation/issimulatedbysoftware

# isSimulatedBySoftware (Swift)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A Boolean value that indicates whether the system generates the location using on-device software simulation.

## Declaration

```swift
var isSimulatedBySoftware: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Core Location sets [isSimulatedBySoftware](issimulatedbysoftware.md) to `true` if the system generated the location using on-device software simulation. You can simulate locations by loading GPX files using the Xcode debugger. The default value is `false`.

## See Also

### Identifying the source of location data

- [isProducedByAccessory](isproducedbyaccessory.md): A Boolean value that indicates whether the system receives the location from an external accessory.

# isSimulatedBySoftware (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A Boolean value that indicates whether the system generates the location using on-device software simulation.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL isSimulatedBySoftware;
```

<a id="Discussion"></a>

## Discussion

Core Location sets [isSimulatedBySoftware](issimulatedbysoftware.md) to `true` if the system generated the location using on-device software simulation. You can simulate locations by loading GPX files using the Xcode debugger. The default value is `false`.

## See Also

### Identifying the source of location data

- [isProducedByAccessory](isproducedbyaccessory.md): A Boolean value that indicates whether the system receives the location from an external accessory.
