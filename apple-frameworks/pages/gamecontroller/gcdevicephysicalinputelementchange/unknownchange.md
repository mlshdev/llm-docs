> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/gamecontroller/gcdevicephysicalinputelementchange/unknownchange

# GCDevicePhysicalInputElementChange.unknownChange (Swift)

**Framework:** Game Controller  
**Kind:** Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

It’s unknown whether there’s a change to the input value.

## Declaration

```swift
case unknownChange
```

## Mentioned In

- [Handling input events](../handling-input-events.md)

<a id="Discussion"></a>

## Discussion

This occurs if Game Controller removes older input states from the queue.

## See Also

### States

- [GCDevicePhysicalInputElementChange.noChange](nochange.md): There’s no change to the input value.
- [GCDevicePhysicalInputElementChange.changed](changed.md): There’s a change to the input value.

# GCDevicePhysicalInputElementUnknownChange (Objective-C)

**Framework:** Game Controller  
**Kind:** Enumeration Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

It’s unknown whether there’s a change to the input value.

## Declaration

```objectivec
GCDevicePhysicalInputElementUnknownChange
```

## Mentioned In

- [Handling input events](../handling-input-events.md)

<a id="Discussion"></a>

## Discussion

This occurs if Game Controller removes older input states from the queue.

## See Also

### States

- [GCDevicePhysicalInputElementNoChange](nochange.md): There’s no change to the input value.
- [GCDevicePhysicalInputElementChanged](changed.md): There’s a change to the input value.
