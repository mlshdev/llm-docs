> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsappleeventdescriptor/sendoptions](https://developer.apple.com/documentation/foundation/nsappleeventdescriptor/sendoptions)

# NSAppleEventDescriptor.SendOptions (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** macOS 10.11+

## Declaration

```swift
struct SendOptions
```

## Topics

### Constants

- [alwaysInteract](sendoptions/alwaysinteract.md): Server should always interact with user where appropriate.
- [canInteract](sendoptions/caninteract.md): Server may try to interact with user.
- [canSwitchLayer](sendoptions/canswitchlayer.md): Interaction may switch layer.
- [defaultOptions](sendoptions/defaultoptions.md): The default options: wait for reply and allow interaction.
- [dontAnnotate](sendoptions/dontannotate.md): Don’t automatically add any sandbox or other annotations to the event.
- [dontExecute](sendoptions/dontexecute.md): Don’t execute this event; used for recording.
- [dontRecord](sendoptions/dontrecord.md): Don’t record this event.
- [neverInteract](sendoptions/neverinteract.md): Server should not interact with user.
- [noReply](sendoptions/noreply.md): Sender doesn’t want a reply to event.
- [queueReply](sendoptions/queuereply.md): Sender wants a reply but won’t wait.
- [waitForReply](sendoptions/waitforreply.md): Sender wants a reply and will wait.

### Initializers

- [init(rawValue:)](sendoptions/init%28rawvalue_%29.md)

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

# NSAppleEventSendOptions (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** macOS 10.11+

## Declaration

```objectivec
enum NSAppleEventSendOptions : NSUInteger;
```

## Topics

### Constants

- [NSAppleEventSendAlwaysInteract](sendoptions/alwaysinteract.md): Server should always interact with user where appropriate.
- [NSAppleEventSendCanInteract](sendoptions/caninteract.md): Server may try to interact with user.
- [NSAppleEventSendCanSwitchLayer](sendoptions/canswitchlayer.md): Interaction may switch layer.
- [NSAppleEventSendDefaultOptions](sendoptions/defaultoptions.md): The default options: wait for reply and allow interaction.
- [NSAppleEventSendDontAnnotate](sendoptions/dontannotate.md): Don’t automatically add any sandbox or other annotations to the event.
- [NSAppleEventSendDontExecute](sendoptions/dontexecute.md): Don’t execute this event; used for recording.
- [NSAppleEventSendDontRecord](sendoptions/dontrecord.md): Don’t record this event.
- [NSAppleEventSendNeverInteract](sendoptions/neverinteract.md): Server should not interact with user.
- [NSAppleEventSendNoReply](sendoptions/noreply.md): Sender doesn’t want a reply to event.
- [NSAppleEventSendQueueReply](sendoptions/queuereply.md): Sender wants a reply but won’t wait.
- [NSAppleEventSendWaitForReply](sendoptions/waitforreply.md): Sender wants a reply and will wait.
