> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsappleeventdescriptor/sendoptions/waitforreply](https://developer.apple.com/documentation/foundation/nsappleeventdescriptor/sendoptions/waitforreply)

# waitForReply (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** macOS 10.11+

Sender wants a reply and will wait.

## Declaration

```swift
static var waitForReply: NSAppleEventDescriptor.SendOptions { get }
```

## See Also

### Constants

- [alwaysInteract](alwaysinteract.md): Server should always interact with user where appropriate.
- [canInteract](caninteract.md): Server may try to interact with user.
- [canSwitchLayer](canswitchlayer.md): Interaction may switch layer.
- [defaultOptions](defaultoptions.md): The default options: wait for reply and allow interaction.
- [dontAnnotate](dontannotate.md): Don’t automatically add any sandbox or other annotations to the event.
- [dontExecute](dontexecute.md): Don’t execute this event; used for recording.
- [dontRecord](dontrecord.md): Don’t record this event.
- [neverInteract](neverinteract.md): Server should not interact with user.
- [noReply](noreply.md): Sender doesn’t want a reply to event.
- [queueReply](queuereply.md): Sender wants a reply but won’t wait.

# NSAppleEventSendWaitForReply (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** macOS 10.11+

Sender wants a reply and will wait.

## Declaration

```objectivec
NSAppleEventSendWaitForReply
```

## See Also

### Constants

- [NSAppleEventSendAlwaysInteract](alwaysinteract.md): Server should always interact with user where appropriate.
- [NSAppleEventSendCanInteract](caninteract.md): Server may try to interact with user.
- [NSAppleEventSendCanSwitchLayer](canswitchlayer.md): Interaction may switch layer.
- [NSAppleEventSendDefaultOptions](defaultoptions.md): The default options: wait for reply and allow interaction.
- [NSAppleEventSendDontAnnotate](dontannotate.md): Don’t automatically add any sandbox or other annotations to the event.
- [NSAppleEventSendDontExecute](dontexecute.md): Don’t execute this event; used for recording.
- [NSAppleEventSendDontRecord](dontrecord.md): Don’t record this event.
- [NSAppleEventSendNeverInteract](neverinteract.md): Server should not interact with user.
- [NSAppleEventSendNoReply](noreply.md): Sender doesn’t want a reply to event.
- [NSAppleEventSendQueueReply](queuereply.md): Sender wants a reply but won’t wait.
