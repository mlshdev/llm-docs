> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/kmidinoconnection](https://developer.apple.com/documentation/coremidi/kmidinoconnection)

# kMIDINoConnection (Swift)

**Framework:** Core MIDI  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The connection you’re trying to close doesn’t exist.

## Declaration

```swift
var kMIDINoConnection: OSStatus { get }
```

## See Also

### Error Codes

- [kMIDIInvalidClient](kmidiinvalidclient.md): The client is invalid.
- [kMIDIInvalidPort](kmidiinvalidport.md): The port is invalid.
- [kMIDIWrongEndpointType](kmidiwrongendpointtype.md): A function received a source endpoint when it required a destination endpoint, or vice versa.
- [kMIDIUnknownEndpoint](kmidiunknownendpoint.md): The system doesn’t recognize the endpoint.
- [kMIDIUnknownProperty](kmidiunknownproperty.md): The property you’re trying to query isn’t set on the object.
- [kMIDIWrongPropertyType](kmidiwrongpropertytype.md): The value you assigned to the property is the wrong type.
- [kMIDINoCurrentSetup](kmidinocurrentsetup.md): A MIDI setup object doesn’t currently exist.
- [kMIDIMessageSendErr](kmidimessagesenderr.md): The communication with the MIDI server failed.
- [kMIDIServerStartErr](kmidiserverstarterr.md): The system can’t start the MIDI server.
- [kMIDISetupFormatErr](kmidisetupformaterr.md): The system can’t read the saved state.
- [kMIDIWrongThread](kmidiwrongthread.md): A driver is calling a non-I/O function in the server from a thread other than the server’s main thread.
- [kMIDIObjectNotFound](kmidiobjectnotfound.md): The requested object doesn’t exist.
- [kMIDIIDNotUnique](kmidiidnotunique.md): The identifier you’re trying to set isn’t unique.
- [kMIDINotPermitted](kmidinotpermitted.md): The process doesn’t have privileges for the requested operation.
- [kMIDIUnknownError](kmidiunknownerror.md): The system can’t perform the requested operation.

# kMIDINoConnection (Objective-C)

**Framework:** Core MIDI  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The connection you’re trying to close doesn’t exist.

## Declaration

```objectivec
kMIDINoConnection
```

## See Also

### Error Codes

- [kMIDIInvalidClient](kmidiinvalidclient.md): The client is invalid.
- [kMIDIInvalidPort](kmidiinvalidport.md): The port is invalid.
- [kMIDIWrongEndpointType](kmidiwrongendpointtype.md): A function received a source endpoint when it required a destination endpoint, or vice versa.
- [kMIDIUnknownEndpoint](kmidiunknownendpoint.md): The system doesn’t recognize the endpoint.
- [kMIDIUnknownProperty](kmidiunknownproperty.md): The property you’re trying to query isn’t set on the object.
- [kMIDIWrongPropertyType](kmidiwrongpropertytype.md): The value you assigned to the property is the wrong type.
- [kMIDINoCurrentSetup](kmidinocurrentsetup.md): A MIDI setup object doesn’t currently exist.
- [kMIDIMessageSendErr](kmidimessagesenderr.md): The communication with the MIDI server failed.
- [kMIDIServerStartErr](kmidiserverstarterr.md): The system can’t start the MIDI server.
- [kMIDISetupFormatErr](kmidisetupformaterr.md): The system can’t read the saved state.
- [kMIDIWrongThread](kmidiwrongthread.md): A driver is calling a non-I/O function in the server from a thread other than the server’s main thread.
- [kMIDIObjectNotFound](kmidiobjectnotfound.md): The requested object doesn’t exist.
- [kMIDIIDNotUnique](kmidiidnotunique.md): The identifier you’re trying to set isn’t unique.
- [kMIDINotPermitted](kmidinotpermitted.md): The process doesn’t have privileges for the requested operation.
- [kMIDIUnknownError](kmidiunknownerror.md): The system can’t perform the requested operation.
