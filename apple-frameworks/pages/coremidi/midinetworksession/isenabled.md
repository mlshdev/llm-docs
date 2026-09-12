> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midinetworksession/isenabled](https://developer.apple.com/documentation/coremidi/midinetworksession/isenabled)

# isEnabled (Swift)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

A Boolean value that determines whether the session is enabled.

## Declaration

```swift
var isEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false). Disabled sessions don’t appear on the network and can’t initiate or receive connections.

## See Also

### Configuring a Session

- [default()](default%28%29.md): Returns the default singleton session.
- [connectionPolicy](connectionpolicy.md): The policy that determines who can connect to this session.

# enabled (Objective-C)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

A Boolean value that determines whether the session is enabled.

## Declaration

```objectivec
@property (nonatomic, getter=isEnabled) BOOL enabled;
```

<a id="Discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false). Disabled sessions don’t appear on the network and can’t initiate or receive connections.

## See Also

### Configuring a Session

- [defaultSession](default%28%29.md): Returns the default singleton session.
- [connectionPolicy](connectionpolicy.md): The policy that determines who can connect to this session.
