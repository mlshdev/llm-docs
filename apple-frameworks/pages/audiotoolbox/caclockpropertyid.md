> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/caclockpropertyid](https://developer.apple.com/documentation/audiotoolbox/caclockpropertyid)

# CAClockPropertyID (Swift)

**Framework:** Audio Toolbox  
**Kind:** Enumeration  
**Availability:** macOS

## Declaration

```swift
enum CAClockPropertyID
```

## Topics

### Constants

- [CAClockPropertyID.internalTimebase](caclockpropertyid/internaltimebase.md)
- [CAClockPropertyID.midiClockDestinations](caclockpropertyid/midiclockdestinations.md)
- [CAClockPropertyID.mtcDestinations](caclockpropertyid/mtcdestinations.md)
- [CAClockPropertyID.mtcFreewheelTime](caclockpropertyid/mtcfreewheeltime.md)
- [CAClockPropertyID.meterTrack](caclockpropertyid/metertrack.md)
- [CAClockPropertyID.name](caclockpropertyid/name.md)
- [CAClockPropertyID.smpteFormat](caclockpropertyid/smpteformat.md)
- [CAClockPropertyID.smpteOffset](caclockpropertyid/smpteoffset.md)
- [CAClockPropertyID.sendMIDISPP](caclockpropertyid/sendmidispp.md)
- [CAClockPropertyID.syncMode](caclockpropertyid/syncmode.md)
- [CAClockPropertyID.syncSource](caclockpropertyid/syncsource.md)
- [CAClockPropertyID.tempoMap](caclockpropertyid/tempomap.md)
- [CAClockPropertyID.timebaseSource](caclockpropertyid/timebasesource.md)

### Initializers

- [init(rawValue:)](caclockpropertyid/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing Clock Properties

- [CAClockGetProperty(\_:\_:\_:\_:)](caclockgetproperty%28________%29.md)
- [CAClockGetPropertyInfo(\_:\_:\_:\_:)](caclockgetpropertyinfo%28________%29.md)
- [CAClockSetProperty(\_:\_:\_:\_:)](caclocksetproperty%28________%29.md)
- [CAClockSyncMode](caclocksyncmode.md)

# CAClockPropertyID (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration  
**Availability:** macOS

## Declaration

```objectivec
enum CAClockPropertyID : UInt32;
```

## Topics

### Constants

- [kCAClockProperty_InternalTimebase](caclockpropertyid/internaltimebase.md)
- [kCAClockProperty_MIDIClockDestinations](caclockpropertyid/midiclockdestinations.md)
- [kCAClockProperty_MTCDestinations](caclockpropertyid/mtcdestinations.md)
- [kCAClockProperty_MTCFreewheelTime](caclockpropertyid/mtcfreewheeltime.md)
- [kCAClockProperty_MeterTrack](caclockpropertyid/metertrack.md)
- [kCAClockProperty_Name](caclockpropertyid/name.md)
- [kCAClockProperty_SMPTEFormat](caclockpropertyid/smpteformat.md)
- [kCAClockProperty_SMPTEOffset](caclockpropertyid/smpteoffset.md)
- [kCAClockProperty_SendMIDISPP](caclockpropertyid/sendmidispp.md)
- [kCAClockProperty_SyncMode](caclockpropertyid/syncmode.md)
- [kCAClockProperty_SyncSource](caclockpropertyid/syncsource.md)
- [kCAClockProperty_TempoMap](caclockpropertyid/tempomap.md)
- [kCAClockProperty_TimebaseSource](caclockpropertyid/timebasesource.md)

## See Also

### Accessing Clock Properties

- [CAClockGetProperty](caclockgetproperty%28________%29.md)
- [CAClockGetPropertyInfo](caclockgetpropertyinfo%28________%29.md)
- [CAClockSetProperty](caclocksetproperty%28________%29.md)
- [CAClockSyncMode](caclocksyncmode.md)
