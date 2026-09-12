> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/opendirectory/odconfiguration](https://developer.apple.com/documentation/opendirectory/odconfiguration)

# ODConfiguration (Swift)

**Framework:** Open Directory  
**Kind:** Class  
**Availability:** Mac Catalyst · macOS 10.9+

## Declaration

```swift
class ODConfiguration
```

## Topics

### Instance Properties

- [authenticationModuleEntries](odconfiguration/authenticationmoduleentries-swift.property.md)
- [comment](odconfiguration/comment-swift.property.md)
- [connectionIdleTimeoutInSeconds](odconfiguration/connectionidletimeoutinseconds-swift.property.md)
- [connectionSetupTimeoutInSeconds](odconfiguration/connectionsetuptimeoutinseconds-swift.property.md)
- [defaultMappings](odconfiguration/defaultmappings-swift.property.md)
- [defaultModuleEntries](odconfiguration/defaultmoduleentries-swift.property.md)
- [discoveryModuleEntries](odconfiguration/discoverymoduleentries-swift.property.md)
- [generalModuleEntries](odconfiguration/generalmoduleentries-swift.property.md)
- [hideRegistration](odconfiguration/hideregistration-swift.property.md)
- [manInTheMiddleProtection](odconfiguration/maninthemiddleprotection-swift.property.md)
- [nodeName](odconfiguration/nodename-swift.property.md)
- [packetEncryption](odconfiguration/packetencryption-swift.property.md)
- [packetSigning](odconfiguration/packetsigning-swift.property.md)
- [preferredDestinationHostName](odconfiguration/preferreddestinationhostname-swift.property.md)
- [preferredDestinationHostPort](odconfiguration/preferreddestinationhostport-swift.property.md)
- [queryTimeoutInSeconds](odconfiguration/querytimeoutinseconds-swift.property.md)
- [templateName](odconfiguration/templatename-swift.property.md)
- [trustAccount](odconfiguration/trustaccount-swift.property.md)
- [trustKerberosPrincipal](odconfiguration/trustkerberosprincipal-swift.property.md)
- [trustMetaAccount](odconfiguration/trustmetaaccount-swift.property.md)
- [trustType](odconfiguration/trusttype-swift.property.md)
- [trustUsesKerberosKeytab](odconfiguration/trustuseskerberoskeytab-swift.property.md)
- [trustUsesMutualAuthentication](odconfiguration/trustusesmutualauthentication-swift.property.md)
- [trustUsesSystemKeychain](odconfiguration/trustusessystemkeychain-swift.property.md)
- [virtualSubnodes](odconfiguration/virtualsubnodes-swift.property.md)

### Instance Methods

- [addTrustType(\_:trustAccount:trustPassword:username:password:joinExisting:)](odconfiguration/addtrusttype%28__trustaccount_trustpassword_username_password_joinexisting_%29.md)
- [removeTrust(usingUsername:password:deleteTrustAccount:)](odconfiguration/removetrust%28usingusername_password_deletetrustaccount_%29.md)
- [save(using:)](odconfiguration/save%28using_%29.md)

### Type Methods

- [suggestedTrustAccount(\_:)](odconfiguration/suggestedtrustaccount%28__%29.md)
- [suggestedTrustPassword(\_:)](odconfiguration/suggestedtrustpassword%28__%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Classes

- [ODAttributeMap](odattributemap.md)
- [ODContext](odcontext.md): An Open Directory context type.
- [ODMappings](odmappings.md)
- [ODModuleEntry](odmoduleentry.md)
- [ODNode](odnode.md): An `ODNode` object serves as a Cocoa wrapper for an Open Directory node.
- [ODNodeRef](odnoderef.md): An Open Directory node type.
- [ODQuery](odquery.md): An `ODQuery` object serves as a Cocoa wrapper for an Open Directory query.
- [ODQueryRef](odqueryref.md): An Open Directory query type.
- [ODRecord](odrecord.md): An `ODRecord` object serves as a Cocoa wrapper for an Open Directory record.
- [ODRecordMap](odrecordmap.md)
- [ODRecordRef](odrecordref.md): An Open Directory record type.
- [ODSession](odsession.md): An `ODSession` object serves as a Cocoa wrapper for an Open Directory session.
- [ODSessionRef](odsessionref.md): An Open Directory session type.

# ODConfiguration (Objective-C)

**Framework:** Open Directory  
**Kind:** Class  
**Availability:** Mac Catalyst · macOS 10.9+

## Declaration

```objectivec
@interface ODConfiguration : NSObject
```

## Topics

### Instance Variables

- [authenticationModuleEntries](odconfiguration/authenticationmoduleentries-c.ivar.md)
- [comment](odconfiguration/comment-c.ivar.md)
- [connectionIdleTimeoutInSeconds](odconfiguration/connectionidletimeoutinseconds-c.ivar.md)
- [connectionSetupTimeoutInSeconds](odconfiguration/connectionsetuptimeoutinseconds-c.ivar.md)
- [defaultMappings](odconfiguration/defaultmappings-c.ivar.md)
- [defaultModuleEntries](odconfiguration/defaultmoduleentries-c.ivar.md)
- [discoveryModuleEntries](odconfiguration/discoverymoduleentries-c.ivar.md)
- [generalModuleEntries](odconfiguration/generalmoduleentries-c.ivar.md)
- [hideRegistration](odconfiguration/hideregistration-c.ivar.md)
- [manInTheMiddleProtection](odconfiguration/maninthemiddleprotection-c.ivar.md)
- [nodeName](odconfiguration/nodename-c.ivar.md)
- [packetEncryption](odconfiguration/packetencryption-c.ivar.md)
- [packetSigning](odconfiguration/packetsigning-c.ivar.md)
- [preferredDestinationHostName](odconfiguration/preferreddestinationhostname-c.ivar.md)
- [preferredDestinationHostPort](odconfiguration/preferreddestinationhostport-c.ivar.md)
- [queryTimeoutInSeconds](odconfiguration/querytimeoutinseconds-c.ivar.md)
- [session](odconfiguration/session.md)
- [templateName](odconfiguration/templatename-c.ivar.md)
- [trustAccount](odconfiguration/trustaccount-c.ivar.md)
- [trustKerberosPrincipal](odconfiguration/trustkerberosprincipal-c.ivar.md)
- [trustMetaAccount](odconfiguration/trustmetaaccount-c.ivar.md)
- [trustType](odconfiguration/trusttype-c.ivar.md)
- [trustUsesKerberosKeytab](odconfiguration/trustuseskerberoskeytab-c.ivar.md)
- [trustUsesMutualAuthentication](odconfiguration/trustusesmutualauthentication-c.ivar.md)
- [trustUsesSystemKeychain](odconfiguration/trustusessystemkeychain-c.ivar.md)
- [virtualSubnodes](odconfiguration/virtualsubnodes-c.ivar.md)

### Instance Properties

- [authenticationModuleEntries](odconfiguration/authenticationmoduleentries-swift.property.md)
- [comment](odconfiguration/comment-swift.property.md)
- [connectionIdleTimeoutInSeconds](odconfiguration/connectionidletimeoutinseconds-swift.property.md)
- [connectionSetupTimeoutInSeconds](odconfiguration/connectionsetuptimeoutinseconds-swift.property.md)
- [defaultMappings](odconfiguration/defaultmappings-swift.property.md)
- [defaultModuleEntries](odconfiguration/defaultmoduleentries-swift.property.md)
- [discoveryModuleEntries](odconfiguration/discoverymoduleentries-swift.property.md)
- [generalModuleEntries](odconfiguration/generalmoduleentries-swift.property.md)
- [hideRegistration](odconfiguration/hideregistration-swift.property.md)
- [manInTheMiddleProtection](odconfiguration/maninthemiddleprotection-swift.property.md)
- [nodeName](odconfiguration/nodename-swift.property.md)
- [packetEncryption](odconfiguration/packetencryption-swift.property.md)
- [packetSigning](odconfiguration/packetsigning-swift.property.md)
- [preferredDestinationHostName](odconfiguration/preferreddestinationhostname-swift.property.md)
- [preferredDestinationHostPort](odconfiguration/preferreddestinationhostport-swift.property.md)
- [queryTimeoutInSeconds](odconfiguration/querytimeoutinseconds-swift.property.md)
- [templateName](odconfiguration/templatename-swift.property.md)
- [trustAccount](odconfiguration/trustaccount-swift.property.md)
- [trustKerberosPrincipal](odconfiguration/trustkerberosprincipal-swift.property.md)
- [trustMetaAccount](odconfiguration/trustmetaaccount-swift.property.md)
- [trustType](odconfiguration/trusttype-swift.property.md)
- [trustUsesKerberosKeytab](odconfiguration/trustuseskerberoskeytab-swift.property.md)
- [trustUsesMutualAuthentication](odconfiguration/trustusesmutualauthentication-swift.property.md)
- [trustUsesSystemKeychain](odconfiguration/trustusessystemkeychain-swift.property.md)
- [virtualSubnodes](odconfiguration/virtualsubnodes-swift.property.md)

### Instance Methods

- [addTrustType:trustAccount:trustPassword:username:password:joinExisting:error:](odconfiguration/addtrusttype%28__trustaccount_trustpassword_username_password_joinexisting_%29.md)
- [removeTrustUsingUsername:password:deleteTrustAccount:error:](odconfiguration/removetrust%28usingusername_password_deletetrustaccount_%29.md)
- [saveUsingAuthorization:error:](odconfiguration/save%28using_%29.md)

### Type Methods

- [configuration](odconfiguration/configuration.md)
- [suggestedTrustAccount:](odconfiguration/suggestedtrustaccount%28__%29.md)
- [suggestedTrustPassword:](odconfiguration/suggestedtrustpassword%28__%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Classes

- [ODAttributeMap](odattributemap.md)
- [ODContext](odcontext.md): An Open Directory context type.
- [ODMappings](odmappings.md)
- [ODModuleEntry](odmoduleentry.md)
- [ODNode](odnode.md): An `ODNode` object serves as a Cocoa wrapper for an Open Directory node.
- [ODNodeRef](odnoderef.md): An Open Directory node type.
- [ODQuery](odquery.md): An `ODQuery` object serves as a Cocoa wrapper for an Open Directory query.
- [ODQueryRef](odqueryref.md): An Open Directory query type.
- [ODRecord](odrecord.md): An `ODRecord` object serves as a Cocoa wrapper for an Open Directory record.
- [ODRecordMap](odrecordmap.md)
- [ODRecordRef](odrecordref.md): An Open Directory record type.
- [ODSession](odsession.md): An `ODSession` object serves as a Cocoa wrapper for an Open Directory session.
- [ODSessionRef](odsessionref.md): An Open Directory session type.
