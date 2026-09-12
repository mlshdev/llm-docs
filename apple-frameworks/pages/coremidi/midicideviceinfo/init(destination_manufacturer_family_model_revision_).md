> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midicideviceinfo/init(destination:manufacturer:family:model:revision:)](https://developer.apple.com/documentation/coremidi/midicideviceinfo/init(destination:manufacturer:family:model:revision:))

# init(destination:manufacturer:family:model:revision:) (Swift)

**Framework:** Core MIDI  
**Kind:** Initializer  
**Availability:** iOS 12.0+ (deprecated in 18.0) · iPadOS 12.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.14+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

Creates a new device information instance.

> No longer supported for CoreMIDI

## Declaration

```swift
init(destination midiDestination: MIDIEntityRef, manufacturer: Data, family: Data, model modelNumber: Data, revision revisionLevel: Data)
```

## Parameters

- `midiDestination`: The MIDI destination to use for capability inquiry.
- `manufacturer`: The device manufacturer.
- `family`: The family to which this device belongs.
- `modelNumber`: The device’s model number.
- `revisionLevel`: The version of the device’s model number.

# initWithDestination:manufacturer:family:model:revision: (Objective-C)

**Framework:** Core MIDI  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ (deprecated in 18.0) · iPadOS 12.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.14+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

Creates a new device information instance.

> No longer supported for CoreMIDI

## Declaration

```objectivec
- (instancetype) initWithDestination:(MIDIEntityRef) midiDestination manufacturer:(NSData *) manufacturer family:(NSData *) family model:(NSData *) modelNumber revision:(NSData *) revisionLevel;
```

## Parameters

- `midiDestination`: The MIDI destination to use for capability inquiry.
- `manufacturer`: The device manufacturer.
- `family`: The family to which this device belongs.
- `modelNumber`: The device’s model number.
- `revisionLevel`: The version of the device’s model number.
