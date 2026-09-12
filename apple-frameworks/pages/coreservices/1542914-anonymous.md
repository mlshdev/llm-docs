> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1542914-anonymous](https://developer.apple.com/documentation/coreservices/1542914-anonymous)

# Anonymous

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [kAEAlwaysInteract](1542914-anonymous/kaealwaysinteract.md)
- [kAECanInteract](1542914-anonymous/kaecaninteract.md)
- [kAECanSwitchLayer](1542914-anonymous/kaecanswitchlayer.md)
- [kAEDoNotAutomaticallyAddAnnotationsToEvent](1542914-anonymous/kaedonotautomaticallyaddannotationstoevent.md)
- [kAEDontExecute](1542914-anonymous/kaedontexecute.md)
- [kAEDontReconnect](1542914-anonymous/kaedontreconnect.md)
- [kAEDontRecord](1542914-anonymous/kaedontrecord.md)
- [kAENeverInteract](1542914-anonymous/kaeneverinteract.md)
- [kAENoReply](1542914-anonymous/kaenoreply.md): The reply preference—your application does not want a reply Apple event. If you set the bit specified by this constant, the server processes the Apple event as soon as it has the opportunity.
- [kAEProcessNonReplyEvents](1542914-anonymous/kaeprocessnonreplyevents.md): Allow processing of non-reply Apple events while awaiting a synchronous Apple event reply (you specified `kAEWaitReply` for the reply preference).
- [kAEQueueReply](1542914-anonymous/kaequeuereply.md): The reply preference—your application wants a reply Apple event. If you set the bit specified by this constant, the reply appears in your event queue as soon as the server has the opportunity to process and respond to your Apple event.
- [kAEWaitReply](1542914-anonymous/kaewaitreply.md)
- [kAEWantReceipt](1542914-anonymous/kaewantreceipt.md)
