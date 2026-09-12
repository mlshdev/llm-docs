> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midithruconnectionfind(_:_:)](https://developer.apple.com/documentation/coremidi/midithruconnectionfind(_:_:))

# MIDIThruConnectionFind(\_:\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.2+ · visionOS 1.0+

Finds the persistent thru connections for the specified client.

## Declaration

```swift
func MIDIThruConnectionFind(_ inPersistentOwnerID: CFString, _ outConnectionList: UnsafeMutablePointer<Unmanaged<CFData>>) -> OSStatus
```

## Parameters

- `inPersistentOwnerID`: The identifier of the owning object.
- `outConnectionList`: On successful return, a [CFData](../corefoundation/cfdata.md) that contains an array of MIDI thru connections.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

# MIDIThruConnectionFind (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.2+ · visionOS 1.0+

Finds the persistent thru connections for the specified client.

## Declaration

```objectivec
extern OSStatus MIDIThruConnectionFind(CFStringRef inPersistentOwnerID, CFDataRef*outConnectionList);
```

## Parameters

- `inPersistentOwnerID`: The identifier of the owning object.
- `outConnectionList`: On successful return, a [CFDataRef](../corefoundation/cfdata.md) that contains an array of MIDI thru connections.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.
