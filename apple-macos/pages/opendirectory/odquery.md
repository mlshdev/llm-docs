> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/opendirectory/odquery](https://developer.apple.com/documentation/opendirectory/odquery)

# ODQuery (Swift)

**Framework:** Open Directory  
**Kind:** Class  
**Availability:** Mac Catalyst · macOS

An `ODQuery` object serves as a Cocoa wrapper for an Open Directory query.

## Declaration

```swift
class ODQuery
```

## Topics

### Creating and Initializing a Query

- [init(node:forRecordTypes:attribute:matchType:queryValues:returnAttributes:maximumResults:)](odquery/init%28node_forrecordtypes_attribute_matchtype_queryvalues_returnattributes_maximumresults_%29.md): Creates a query object with provided parameters.

### Managing Asynchronous Queries

- [delegate](odquery/delegate.md): The query’s delegate.
- [operationQueue](odquery/operationqueue.md): The queue on which asynchronous results are delivered to the delegate.
- [schedule(in:forMode:)](odquery/schedule%28in_formode_%29.md): Retrieves results from a query asynchronously by scheduling the query in a run loop.
- [remove(from:forMode:)](odquery/remove%28from_formode_%29.md): Removes the query from a specified run loop.
- [synchronize()](odquery/synchronize%28%29.md): Restarts a query, disposing of any results it has obtained.

### Managing Synchronous Queries

- [resultsAllowingPartial(\_:)](odquery/resultsallowingpartial%28__%29.md): Returns results from a query synchronously.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
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
- [ODQueryRef](odqueryref.md): An Open Directory query type.
- [ODRecord](odrecord.md): An `ODRecord` object serves as a Cocoa wrapper for an Open Directory record.
- [ODRecordMap](odrecordmap.md)
- [ODRecordRef](odrecordref.md): An Open Directory record type.
- [ODSession](odsession.md): An `ODSession` object serves as a Cocoa wrapper for an Open Directory session.
- [ODSessionRef](odsessionref.md): An Open Directory session type.

# ODQuery (Objective-C)

**Framework:** Open Directory  
**Kind:** Class  
**Availability:** Mac Catalyst · macOS

An `ODQuery` object serves as a Cocoa wrapper for an Open Directory query.

## Declaration

```objectivec
@interface ODQuery : NSObject
```

## Topics

### Creating and Initializing a Query

- [initWithNode:forRecordTypes:attribute:matchType:queryValues:returnAttributes:maximumResults:error:](odquery/init%28node_forrecordtypes_attribute_matchtype_queryvalues_returnattributes_maximumresults_%29.md): Creates a query object with provided parameters.
- [queryWithNode:forRecordTypes:attribute:matchType:queryValues:returnAttributes:maximumResults:error:](odquery/querywithnode_forrecordtypes_attribute_matchtype_queryvalues_returnattributes_maximumresults_error_.md): Returns an autoreleased query object created with provided parameters.

### Managing Asynchronous Queries

- [delegate](odquery/delegate.md): The query’s delegate.
- [operationQueue](odquery/operationqueue.md): The queue on which asynchronous results are delivered to the delegate.
- [scheduleInRunLoop:forMode:](odquery/schedule%28in_formode_%29.md): Retrieves results from a query asynchronously by scheduling the query in a run loop.
- [removeFromRunLoop:forMode:](odquery/remove%28from_formode_%29.md): Removes the query from a specified run loop.
- [synchronize](odquery/synchronize%28%29.md): Restarts a query, disposing of any results it has obtained.

### Managing Synchronous Queries

- [resultsAllowingPartial:error:](odquery/resultsallowingpartial%28__%29.md): Returns results from a query synchronously.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Classes

- [ODAttributeMap](odattributemap.md)
- [ODConfiguration](odconfiguration.md)
- [ODContext](odcontext.md): An Open Directory context type.
- [ODMappings](odmappings.md)
- [ODModuleEntry](odmoduleentry.md)
- [ODNode](odnode.md): An `ODNode` object serves as a Cocoa wrapper for an Open Directory node.
- [ODNodeRef](odnoderef.md): An Open Directory node type.
- [ODQueryRef](odqueryref.md): An Open Directory query type.
- [ODRecord](odrecord.md): An `ODRecord` object serves as a Cocoa wrapper for an Open Directory record.
- [ODRecordMap](odrecordmap.md)
- [ODRecordRef](odrecordref.md): An Open Directory record type.
- [ODSession](odsession.md): An `ODSession` object serves as a Cocoa wrapper for an Open Directory session.
- [ODSessionRef](odsessionref.md): An Open Directory session type.
