> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midinetworksession/default()](https://developer.apple.com/documentation/coremidi/midinetworksession/default())

# default() (Swift)

**Framework:** Core MIDI  
**Kind:** Type Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Returns the default singleton session.

## Declaration

```swift
class func `default`() -> MIDINetworkSession
```

<a id="return-value"></a>

## Return Value

The default session.

## See Also

### Configuring a Session

- [isEnabled](isenabled.md): A Boolean value that determines whether the session is enabled.
- [connectionPolicy](connectionpolicy.md): The policy that determines who can connect to this session.

# defaultSession (Objective-C)

**Framework:** Core MIDI  
**Kind:** Type Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Returns the default singleton session.

## Declaration

```objectivec
+ (MIDINetworkSession *) defaultSession;
```

<a id="return-value"></a>

## Return Value

The default session.

## See Also

### Configuring a Session

- [enabled](isenabled.md): A Boolean value that determines whether the session is enabled.
- [connectionPolicy](connectionpolicy.md): The policy that determines who can connect to this session.
