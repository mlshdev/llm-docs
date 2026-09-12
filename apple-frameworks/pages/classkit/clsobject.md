> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clsobject](https://developer.apple.com/documentation/classkit/clsobject)

# CLSObject (Swift)

**Framework:** ClassKit  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 11.3+ · macOS 11.0+ · visionOS 1.0+

The abstract base class for objects managed by ClassKit.

## Declaration

```swift
class CLSObject
```

## Topics

### Accessing Object Information

- [dateCreated](clsobject/datecreated.md): The date on which the object was created.
- [dateLastModified](clsobject/datelastmodified.md): The date on which the object was last modified.

### Initializers

- [init(coder:)](clsobject/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [CLSActivity](clsactivity.md)
- [CLSActivityItem](clsactivityitem.md)
- [CLSContext](clscontext.md)
- [CLSProgressReportingCapability](clsprogressreportingcapability.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Creating contexts

- [init(type:identifier:title:)](clscontext/init%28type_identifier_title_%29.md): Initializes a new context.

# CLSObject (Objective-C)

**Framework:** ClassKit  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The abstract base class for objects managed by ClassKit.

## Declaration

```objectivec
@interface CLSObject : NSObject
```

## Topics

### Accessing Object Information

- [dateCreated](clsobject/datecreated.md): The date on which the object was created.
- [dateLastModified](clsobject/datelastmodified.md): The date on which the object was last modified.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [CLSActivity](clsactivity.md)
- [CLSActivityItem](clsactivityitem.md)
- [CLSContext](clscontext.md)
- [CLSProgressReportingCapability](clsprogressreportingcapability.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Creating contexts

- [initWithType:identifier:title:](clscontext/init%28type_identifier_title_%29.md): Initializes a new context.
