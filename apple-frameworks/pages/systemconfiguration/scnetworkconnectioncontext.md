> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scnetworkconnectioncontext](https://developer.apple.com/documentation/systemconfiguration/scnetworkconnectioncontext)

# SCNetworkConnectionContext (Swift)

**Framework:** System Configuration  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A structure containing user-specified data and callbacks for a network connection.

## Declaration

```swift
struct SCNetworkConnectionContext
```

## Topics

### Initializers

- [init()](scnetworkconnectioncontext/init%28%29.md): Creates a network connection context.
- [init(version:info:retain:release:copyDescription:)](scnetworkconnectioncontext/init%28version_info_retain_release_copydescription_%29.md): Creates a network connection context with the specified values.

### Instance Properties

- [copyDescription](scnetworkconnectioncontext/copydescription.md): The callback used to provide a description of the `info` field.
- [info](scnetworkconnectioncontext/info.md): A C pointer to a user-specified block of data.
- [release](scnetworkconnectioncontext/release.md): The calllback used to remove a retain previously added for the info field. If this parameter is not a pointer to a function of the correct prototype, the behavior is undefined. The value may be `NULL`.
- [retain](scnetworkconnectioncontext/retain.md): The callback used to add a retain for the info field. If this parameter is not a pointer to a function of the correct prototype, the behavior is undefined. The value may be `NULL`.
- [version](scnetworkconnectioncontext/version.md): The version number of the structure type being passed in as a parameter to the [SCNetworkConnectionCreateWithServiceID(\_:\_:\_:\_:)](scnetworkconnectioncreatewithserviceid%28________%29.md) function. This structure is version `0`.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Data Types

- [SCNetworkConnection](scnetworkconnection.md): The handle to manage a connection-oriented service.
- [SCNetworkConnectionCallBack](scnetworkconnectioncallback.md): The type of callback function used when a status event is delivered.

# SCNetworkConnectionContext (Objective-C)

**Framework:** System Configuration  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A structure containing user-specified data and callbacks for a network connection.

## Declaration

```objectivec
typedef struct { ... } SCNetworkConnectionContext;
```

## Topics

### Instance Properties

- [copyDescription](scnetworkconnectioncontext/copydescription.md): The callback used to provide a description of the `info` field.
- [info](scnetworkconnectioncontext/info.md): A C pointer to a user-specified block of data.
- [release](scnetworkconnectioncontext/release.md): The calllback used to remove a retain previously added for the info field. If this parameter is not a pointer to a function of the correct prototype, the behavior is undefined. The value may be `NULL`.
- [retain](scnetworkconnectioncontext/retain.md): The callback used to add a retain for the info field. If this parameter is not a pointer to a function of the correct prototype, the behavior is undefined. The value may be `NULL`.
- [version](scnetworkconnectioncontext/version.md): The version number of the structure type being passed in as a parameter to the [SCNetworkConnectionCreateWithServiceID](scnetworkconnectioncreatewithserviceid%28________%29.md) function. This structure is version `0`.

## See Also

### Data Types

- [SCNetworkConnectionRef](scnetworkconnection.md): The handle to manage a connection-oriented service.
- [SCNetworkConnectionCallBack](scnetworkconnectioncallback.md): The type of callback function used when a status event is delivered.
