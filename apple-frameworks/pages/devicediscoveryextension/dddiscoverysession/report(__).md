> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicediscoveryextension/dddiscoverysession/report(_:)

# report(\_:) (Swift)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Reports an event to the system.

## Declaration

```swift
func report(_ inEvent: DDDeviceEvent)
```

## Parameters

- `inEvent`: The event to report.

<a id="Discussion"></a>

## Discussion

The extension updates the system with the discovery status of the device of interest by passing event objects (`DDEvent`) through this function.

# reportEvent: (Objective-C)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Reports an event to the system.

## Declaration

```objectivec
- (void) reportEvent:(DDDeviceEvent *) inEvent;
```

## Parameters

- `inEvent`: The event to report.

<a id="Discussion"></a>

## Discussion

The extension updates the system with the discovery status of the device of interest by passing event objects (`DDEvent`) through this function.
