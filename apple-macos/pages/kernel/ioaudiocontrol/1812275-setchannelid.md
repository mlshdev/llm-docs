> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioaudiocontrol/1812275-setchannelid](https://developer.apple.com/documentation/kernel/ioaudiocontrol/1812275-setchannelid)

# setChannelID

**Interface language:** Objective-C

**Framework:** Kernel

Called at init time to set the channel ID for this IOAudioControl.

## Declaration

```objectivec
virtual void setChannelID(
 UInt32 newChannelID); 
```

## See Also

### Miscellaneous

- [addUserClient](1812069-adduserclient.md): Called on the IOWorkLoop to add a new IOAudioControlUserClient.
- [addUserClientAction](1812079-adduserclientaction.md): IOCommandGate Action which calls addUserClient() while holding the IOCommandGate.
- [clientClosed](1812087-clientclosed.md): Called automatically by the IOAudioControlUserClient when a user client closes its connection to the control.
- [createUserClient(task_t, void \*, UInt32, IOAudioControlUserClient \*\*)](1812095-createuserclient.md): Creates a new IOAudioControlUserClient instance.
- [createUserClient(task_t, void \*, UInt32, IOAudioControlUserClient \*\*, OSDictionary \*)](1812104-createuserclient.md): Creates a new IOAudioControlUserClient instance.
- [detachUserClientsAction](1812113-detachuserclientsaction.md)
- [flushValue](1812123-flushvalue.md): Forces the control to be flushed out to the hardware.
- [free](1812130-free.md): Frees all of the resources allocated by the IOAudioControl.
- [getChannelID](1812135-getchannelid.md): Returns the channel ID for the control.
- [getCommandGate](1812146-getcommandgate.md): Returns the IOCommandGate for this IOAudioControl.
- [getControlID](1812156-getcontrolid.md): Returns the control ID for the control.
- [getIsStarted](1812169-getisstarted.md): Returns true after start() has been called.
- [getValue](1812181-getvalue.md): Returns the current value of the control.
- [getWorkLoop](1812197-getworkloop.md): Returns the IOWorkLoop for the whole audio driver.
- [hardwareValueChanged](1812208-hardwarevaluechanged.md): Updates the value for this control and sends out the value changed notification.
- [init](1812219-init.md): Initializes a newly allocated IOAudioControl with the given attributes.
- [newUserClient](1812229-newuserclient.md): Creates a new user client object for this IOAudioControl instance.
- [performValueChange](1812237-performvaluechange.md): Called by setValue() to make the call to the valueChangeHandler to update the hardware.
- [removeUserClient](1812247-removeuserclient.md): Called on the IOWorkLoop to remove an IOAudioControlUserClient.
- [removeUserClientAction](1812259-removeuserclientaction.md): IOCommandGate Action which calls removeUserClient() while holding the IOCommandGate.
- [sendValueChangeNotification](1812267-sendvaluechangenotification.md): Called when the value has changed for the control.
- [setChannelName](1812281-setchannelname.md): Called at init time to set the channel name for this IOAudioControl.
- [setControlID](1812283-setcontrolid.md): Sets the controlID for this control.
- [setProperties](1812287-setproperties.md): Changes a property of this IOService.
- [setReadOnlyFlag](1812291-setreadonlyflag.md): Call this function to say that a control is read only. This call cannot be undone, so if a control is only temporarily unsetable, do not use this call but instead return an error from the control handler.
- [setSubType(UInt32)](1812293-setsubtype.md): Called at init time to set the control type.
- [setType(UInt32)](1812300-settype.md): Called at init time to set the control type.
- [setUsage](1812305-setusage.md): Called at init time to set the control usage.
- [setValue](1812307-setvalue.md): Sets the value for this control.
- [setValueAction](1812310-setvalueaction.md): IOCommandGate Action which calls setValue() while holding the IOCommandGate.
- [start](1812313-start.md): Starts a newly created IOAudioControl.
- [stop](1812316-stop.md): Stops the control when the provider is going away.
- [updateValue](1812319-updatevalue.md): Called by setValue() in order to update the value and the registry.
- [validateValue](1812322-validatevalue.md): Called by setValue() to verify that the value is valid.
- [withAttributes](1812328-withattributes.md): Static function that allocates a new IOAudioControl with the given attributes.
