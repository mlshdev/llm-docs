> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioaudiocontrol](https://developer.apple.com/documentation/kernel/ioaudiocontrol)

# IOAudioControl

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Class  
**Availability:** macOS 10.1+

Represents any controllable attribute of an IOAudioDevice.

## Declaration

```objectivec
class IOAudioControl : IOService
```

<a id="overview"></a>

## Overview

An IOAudioControl instance may belong to one IOAudioPort. Additionally, it may associated with an IOAudioEngine as a default control for that IOAudioEngine.

When its value changes, it sends a notification to the CoreAudio.framework (HAL). It also makes a call to the ValueChangeHandler.

The base IOAudioControl class contains a type, a value and a channel ID representing the channel(s) which the control acts on. It may also contain a readable format for the name of the channel as well as a control ID that can be used to identify unique controls. Additionally it may contain a subType and a usage. Each type has its own set of possible subTypes. There currently four different control types defined: kIOAudioControlTypeLevel, kIOAudioControlTypeToggle, kIOAudioControlTypeSelector. Each one is represented by a subclass of IOAudioControl: IOAudioLevelControl, IOAudioToggleControl, IOAudioSelectorControl. The level control defines a range of allowed values and has a defined subtype of kIOAudioLevelControlSubTypeVolume used to define a volume control. The toggle control allows for a boolean value and has a defined subtype kIOAudioToggleControlSubTypeMute for a mute control. The selector control has a list of allowed selections with a value and description for each allowed selection and has the following sub types: kIOAudioSelectorControlSubTypeOutput for an output selector and kIOAudioSelectorControlSubTypeInput for an input selector. See the subclass documentation for a more complete description of each

There are enums for default channel ID values and common channel names in IOAudioTypes.h. The channel ID values are prefixed with 'kIOAudioControlChannelID' and the common channel names are prefixed with 'kIOAudioControlChannelName'. All of the attributes of the IOAudioControl are stored in the registry. The key used for each attribute is defined in IOAudioTypes.h with the define matching the following pattern: 'kIOAudioControl\<attribute name\>Key'. For example: kIOAudioControlChannelIDKey.

In addition to the existing defined control types, drivers can define their own as well for other purposes.

Changes to the IOAudioControl's value made by the CoreAudio.framework are done through the IORegistry. When the CoreAudio.framework initiates a value change, the control receives a setProperties() message. The setProperties() implementation looks for the property 'IOAudioControlValue' and if present, calls setValue() on the driver's IOWorkLoop with the new value. The setValue() function first checks to see if the new value is different. If so, it calls performValueChange() to call through to the driver to make the change in the hardware. If that call succeeds the value is changed and the new value is set in the registry. Additionally notifications are sent to all clients that have registered for them.

## Topics

### Miscellaneous

- [addUserClient](ioaudiocontrol/1812069-adduserclient.md): Called on the IOWorkLoop to add a new IOAudioControlUserClient.
- [addUserClientAction](ioaudiocontrol/1812079-adduserclientaction.md): IOCommandGate Action which calls addUserClient() while holding the IOCommandGate.
- [clientClosed](ioaudiocontrol/1812087-clientclosed.md): Called automatically by the IOAudioControlUserClient when a user client closes its connection to the control.
- [createUserClient(task_t, void \*, UInt32, IOAudioControlUserClient \*\*)](ioaudiocontrol/1812095-createuserclient.md): Creates a new IOAudioControlUserClient instance.
- [createUserClient(task_t, void \*, UInt32, IOAudioControlUserClient \*\*, OSDictionary \*)](ioaudiocontrol/1812104-createuserclient.md): Creates a new IOAudioControlUserClient instance.
- [detachUserClientsAction](ioaudiocontrol/1812113-detachuserclientsaction.md)
- [flushValue](ioaudiocontrol/1812123-flushvalue.md): Forces the control to be flushed out to the hardware.
- [free](ioaudiocontrol/1812130-free.md): Frees all of the resources allocated by the IOAudioControl.
- [getChannelID](ioaudiocontrol/1812135-getchannelid.md): Returns the channel ID for the control.
- [getCommandGate](ioaudiocontrol/1812146-getcommandgate.md): Returns the IOCommandGate for this IOAudioControl.
- [getControlID](ioaudiocontrol/1812156-getcontrolid.md): Returns the control ID for the control.
- [getIsStarted](ioaudiocontrol/1812169-getisstarted.md): Returns true after start() has been called.
- [getValue](ioaudiocontrol/1812181-getvalue.md): Returns the current value of the control.
- [getWorkLoop](ioaudiocontrol/1812197-getworkloop.md): Returns the IOWorkLoop for the whole audio driver.
- [hardwareValueChanged](ioaudiocontrol/1812208-hardwarevaluechanged.md): Updates the value for this control and sends out the value changed notification.
- [init](ioaudiocontrol/1812219-init.md): Initializes a newly allocated IOAudioControl with the given attributes.
- [newUserClient](ioaudiocontrol/1812229-newuserclient.md): Creates a new user client object for this IOAudioControl instance.
- [performValueChange](ioaudiocontrol/1812237-performvaluechange.md): Called by setValue() to make the call to the valueChangeHandler to update the hardware.
- [removeUserClient](ioaudiocontrol/1812247-removeuserclient.md): Called on the IOWorkLoop to remove an IOAudioControlUserClient.
- [removeUserClientAction](ioaudiocontrol/1812259-removeuserclientaction.md): IOCommandGate Action which calls removeUserClient() while holding the IOCommandGate.
- [sendValueChangeNotification](ioaudiocontrol/1812267-sendvaluechangenotification.md): Called when the value has changed for the control.
- [setChannelID](ioaudiocontrol/1812275-setchannelid.md): Called at init time to set the channel ID for this IOAudioControl.
- [setChannelName](ioaudiocontrol/1812281-setchannelname.md): Called at init time to set the channel name for this IOAudioControl.
- [setControlID](ioaudiocontrol/1812283-setcontrolid.md): Sets the controlID for this control.
- [setProperties](ioaudiocontrol/1812287-setproperties.md): Changes a property of this IOService.
- [setReadOnlyFlag](ioaudiocontrol/1812291-setreadonlyflag.md): Call this function to say that a control is read only. This call cannot be undone, so if a control is only temporarily unsetable, do not use this call but instead return an error from the control handler.
- [setSubType(UInt32)](ioaudiocontrol/1812293-setsubtype.md): Called at init time to set the control type.
- [setType(UInt32)](ioaudiocontrol/1812300-settype.md): Called at init time to set the control type.
- [setUsage](ioaudiocontrol/1812305-setusage.md): Called at init time to set the control usage.
- [setValue](ioaudiocontrol/1812307-setvalue.md): Sets the value for this control.
- [setValueAction](ioaudiocontrol/1812310-setvalueaction.md): IOCommandGate Action which calls setValue() while holding the IOCommandGate.
- [start](ioaudiocontrol/1812313-start.md): Starts a newly created IOAudioControl.
- [stop](ioaudiocontrol/1812316-stop.md): Stops the control when the provider is going away.
- [updateValue](ioaudiocontrol/1812319-updatevalue.md): Called by setValue() in order to update the value and the registry.
- [validateValue](ioaudiocontrol/1812322-validatevalue.md): Called by setValue() to verify that the value is valid.
- [withAttributes](ioaudiocontrol/1812328-withattributes.md): Static function that allocates a new IOAudioControl with the given attributes.

### Callbacks

- [IntValueChangeHandler](ioaudiocontrol/intvaluechangehandler.md): Handler function used to make a notification when a value is to be changed.

### Instance Variables

- [workLoop](ioaudiocontrol/workloop.md)
- [userClients](ioaudiocontrol/userclients.md)
- [isStarted](ioaudiocontrol/isstarted.md)
- [controlID](ioaudiocontrol/controlid.md)
- [commandGate](ioaudiocontrol/commandgate.md)
- [channelID](ioaudiocontrol/channelid.md)

### Instance Methods

- [addUserClient](ioaudiocontrol/1485871-adduserclient.md): Deprecated.
- [attachAndStart](ioaudiocontrol/1485811-attachandstart.md): Deprecated.
- [clientClosed](ioaudiocontrol/1485815-clientclosed.md): Deprecated.
- [createUserClient](ioaudiocontrol/1485832-createuserclient.md): Deprecated.
- [createUserClient](ioaudiocontrol/3516514-createuserclient.md): Deprecated.
- [detachUserClients](ioaudiocontrol/1485893-detachuserclients.md): Deprecated.
- [flushValue](ioaudiocontrol/1485879-flushvalue.md): Deprecated.
- [free](ioaudiocontrol/1485856-free.md): Deprecated.
- [getChannelID](ioaudiocontrol/1485850-getchannelid.md): Deprecated.
- [getCommandGate](ioaudiocontrol/1485859-getcommandgate.md): Deprecated.
- [getControlID](ioaudiocontrol/1485824-getcontrolid.md): Deprecated.
- [getDataBytes](ioaudiocontrol/1485848-getdatabytes.md): Deprecated.
- [getDataLength](ioaudiocontrol/1485904-getdatalength.md): Deprecated.
- [getIntValue](ioaudiocontrol/1485853-getintvalue.md): Deprecated.
- [getIsStarted](ioaudiocontrol/1485813-getisstarted.md): Deprecated.
- [getMetaClass](ioaudiocontrol/1485887-getmetaclass.md)
- [getSubType](ioaudiocontrol/1485910-getsubtype.md): Deprecated.
- [getType](ioaudiocontrol/1485908-gettype.md): Deprecated.
- [getUsage](ioaudiocontrol/1485873-getusage.md): Deprecated.
- [getValue](ioaudiocontrol/1485838-getvalue.md): Deprecated.
- [getWorkLoop](ioaudiocontrol/1485912-getworkloop.md): Deprecated.
- [hardwareValueChanged](ioaudiocontrol/1485883-hardwarevaluechanged.md): Deprecated.
- [init](ioaudiocontrol/1485826-init.md): Deprecated.
- [newUserClient](ioaudiocontrol/1485889-newuserclient.md): Deprecated.
- [newUserClient](ioaudiocontrol/3516515-newuserclient.md): Deprecated.
- [performValueChange](ioaudiocontrol/1485899-performvaluechange.md): Deprecated.
- [removeUserClient](ioaudiocontrol/1485809-removeuserclient.md): Deprecated.
- [sendChangeNotification](ioaudiocontrol/1485830-sendchangenotification.md): Deprecated.
- [sendQueuedNotifications](ioaudiocontrol/1485918-sendqueuednotifications.md): Deprecated.
- [sendValueChangeNotification](ioaudiocontrol/1485819-sendvaluechangenotification.md): Deprecated.
- [setChannelID](ioaudiocontrol/1485917-setchannelid.md): Deprecated.
- [setChannelName](ioaudiocontrol/1485865-setchannelname.md): Deprecated.
- [setChannelNumber](ioaudiocontrol/1485861-setchannelnumber.md): Deprecated.
- [setControlID](ioaudiocontrol/1485846-setcontrolid.md): Deprecated.
- [setCoreAudioPropertyID](ioaudiocontrol/1485844-setcoreaudiopropertyid.md): Deprecated.
- [setProperties](ioaudiocontrol/1485840-setproperties.md): Deprecated.
- [setReadOnlyFlag](ioaudiocontrol/1485875-setreadonlyflag.md): Deprecated.
- [setSubType](ioaudiocontrol/1485916-setsubtype.md): Deprecated.
- [setType](ioaudiocontrol/1485897-settype.md): Deprecated.
- [setUsage](ioaudiocontrol/1485816-setusage.md): Deprecated.
- [setValue](ioaudiocontrol/1485842-setvalue.md): Deprecated.
- [setValue](ioaudiocontrol/3516516-setvalue.md): Deprecated.
- [setValueChangeHandler](ioaudiocontrol/1485869-setvaluechangehandler.md): Deprecated.
- [setValueChangeHandler](ioaudiocontrol/3516517-setvaluechangehandler.md): Deprecated.
- [setValueChangeHandler](ioaudiocontrol/3516518-setvaluechangehandler.md): Deprecated.
- [setValueChangeTarget](ioaudiocontrol/1485876-setvaluechangetarget.md): Deprecated.
- [setWorkLoop](ioaudiocontrol/1485901-setworkloop.md): Deprecated.
- [start](ioaudiocontrol/1485891-start.md): Deprecated.
- [stop](ioaudiocontrol/1485836-stop.md): Deprecated.
- [updateValue](ioaudiocontrol/1485881-updatevalue.md): Deprecated.
- [validateValue](ioaudiocontrol/1485914-validatevalue.md): Deprecated.

### Type Methods

- [addUserClientAction](ioaudiocontrol/1485863-adduserclientaction.md): Deprecated.
- [detachUserClientsAction](ioaudiocontrol/1485822-detachuserclientsaction.md): Deprecated.
- [removeUserClientAction](ioaudiocontrol/1485895-removeuserclientaction.md): Deprecated.
- [setCommandGateUsage](ioaudiocontrol/1485867-setcommandgateusage.md): Deprecated.
- [setValueAction](ioaudiocontrol/1485834-setvalueaction.md): Deprecated.
- [withAttributes](ioaudiocontrol/1485828-withattributes.md): Deprecated.

## Relationships

### Inherits From

- [IOService](ioservice.md)

## See Also

### Interfaces

- [IOAudioLevelControl](ioaudiolevelcontrol.md)
- [IOAudioSelectorControl](ioaudioselectorcontrol.md)
- [IOAudioToggleControl](ioaudiotogglecontrol.md)
- [IOAudioEngine](ioaudioengine.md): Abstract base class for a single audio audio / I/O engine.
- [IOAudioStream](ioaudiostream.md): This class wraps a single sample buffer in an audio driver.
- [IOAudioPort](ioaudioport.md): Represents a logical or physical port or functional unit in an audio device.
