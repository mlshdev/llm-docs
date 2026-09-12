> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/decodingerror/context](https://developer.apple.com/documentation/swift/decodingerror/context)

# DecodingError.Context

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The context in which the error occurred.

## Declaration

```swift
struct Context
```

## Topics

### Initializers

- [init(codingPath:debugDescription:underlyingError:)](context/init%28codingpath_debugdescription_underlyingerror_%29.md): Creates a new context with the given path of coding keys and a description of what went wrong.

### Instance Properties

- [codingPath](context/codingpath.md): The path of coding keys taken to get to the point of the failing decode call.
- [debugDescription](context/debugdescription.md): A description of what went wrong, for debugging purposes.
- [underlyingError](context/underlyingerror.md): The underlying error which caused this error, if any.

## Relationships

### Conforms To

- [Sendable](../sendable.md)
- [SendableMetatype](../sendablemetatype.md)
