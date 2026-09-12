> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/opendirectory/odsession](https://developer.apple.com/documentation/opendirectory/odsession)

# ODSession (Swift)

**Framework:** Open Directory  
**Kind:** Class  
**Availability:** Mac Catalyst · macOS

An `ODSession` object serves as a Cocoa wrapper for an Open Directory session.

## Declaration

```swift
class ODSession
```

## Topics

### Creating and Accessing Sessions

- [default()](odsession/default%28%29.md): Returns a shared instance of the local session.
- [init(options:)](odsession/init%28options_%29.md): Creates a session object directed over proxy to another host.

### Accessing Node Information

- [nodeNames()](odsession/nodenames%28%29.md): Returns the node names that are registered with this session.

### Constants

- [ODSession Option Keys](odsession-option-keys.md): Option keys used when creating a session directed over a proxy.

### Instance Properties

- [configurationTemplateNames](odsession/configurationtemplatenames.md)
- [mappingTemplateNames](odsession/mappingtemplatenames.md)

### Instance Methods

- [add(\_:authorization:)](odsession/add%28__authorization_%29.md)
- [configuration(forNodename:)](odsession/configuration%28fornodename_%29.md)
- [configurationAuthorizationAllowingUserInteraction(\_:)](odsession/configurationauthorizationallowinguserinteraction%28__%29.md)
- [delete(\_:authorization:)](odsession/delete%28__authorization_%29.md)
- [deleteConfiguration(withNodename:authorization:)](odsession/deleteconfiguration%28withnodename_authorization_%29.md)

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
- [ODConfiguration](odconfiguration.md)
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
- [ODSessionRef](odsessionref.md): An Open Directory session type.

# ODSession (Objective-C)

**Framework:** Open Directory  
**Kind:** Class  
**Availability:** Mac Catalyst · macOS

An `ODSession` object serves as a Cocoa wrapper for an Open Directory session.

## Declaration

```objectivec
@interface ODSession : NSObject
```

## Topics

### Creating and Accessing Sessions

- [defaultSession](odsession/default%28%29.md): Returns a shared instance of the local session.
- [initWithOptions:error:](odsession/init%28options_%29.md): Creates a session object directed over proxy to another host.
- [sessionWithOptions:error:](odsession/sessionwithoptions_error_.md): Returns an autoreleased session object directed over proxy to another host.

### Accessing Node Information

- [nodeNamesAndReturnError:](odsession/nodenames%28%29.md): Returns the node names that are registered with this session.

### Constants

- [ODSession Option Keys](odsession-option-keys.md): Option keys used when creating a session directed over a proxy.

### Instance Properties

- [configurationTemplateNames](odsession/configurationtemplatenames.md)
- [mappingTemplateNames](odsession/mappingtemplatenames.md)

### Instance Methods

- [addConfiguration:authorization:error:](odsession/add%28__authorization_%29.md)
- [configurationForNodename:](odsession/configuration%28fornodename_%29.md)
- [configurationAuthorizationAllowingUserInteraction:error:](odsession/configurationauthorizationallowinguserinteraction%28__%29.md)
- [deleteConfiguration:authorization:error:](odsession/delete%28__authorization_%29.md)
- [deleteConfigurationWithNodename:authorization:error:](odsession/deleteconfiguration%28withnodename_authorization_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Classes

- [ODAttributeMap](odattributemap.md)
- [ODConfiguration](odconfiguration.md)
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
- [ODSessionRef](odsessionref.md): An Open Directory session type.
