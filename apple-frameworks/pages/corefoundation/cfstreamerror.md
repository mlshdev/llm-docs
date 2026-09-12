> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstreamerror](https://developer.apple.com/documentation/corefoundation/cfstreamerror)

# CFStreamError (Swift)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The structure returned by [CFReadStreamGetError(\_:)](cfreadstreamgeterror%28__%29.md) and [CFWriteStreamGetError(\_:)](cfwritestreamgeterror%28__%29.md).

## Declaration

```swift
struct CFStreamError
```

## Topics

### Initializers

- [init()](cfstreamerror/init%28%29.md)
- [init(domain:error:)](cfstreamerror/init%28domain_error_%29.md)

### Instance Properties

- [domain](cfstreamerror/domain.md): Deprecated. The error domain that should be used to interpret the error. See [CFStreamErrorDomain](cfstreamerrordomain.md) for possible values.
- [error](cfstreamerror/error.md): The error code.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Data Types

- [CFStreamClientContext](cfstreamclientcontext.md): A structure that contains program-defined data and callbacks with which you can configure a stream’s client behavior.

# CFStreamError (Objective-C)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The structure returned by [CFReadStreamGetError](cfreadstreamgeterror%28__%29.md) and [CFWriteStreamGetError](cfwritestreamgeterror%28__%29.md).

## Declaration

```objectivec
typedef struct { ... } CFStreamError;
```

## Topics

### Instance Properties

- [domain](cfstreamerror/domain.md): Deprecated. The error domain that should be used to interpret the error. See [CFStreamErrorDomain](cfstreamerrordomain.md) for possible values.
- [error](cfstreamerror/error.md): The error code.

## See Also

### Data Types

- [CFStreamClientContext](cfstreamclientcontext.md): A structure that contains program-defined data and callbacks with which you can configure a stream’s client behavior.
