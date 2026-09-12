> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scnetworkreachabilitycontext](https://developer.apple.com/documentation/systemconfiguration/scnetworkreachabilitycontext)

# SCNetworkReachabilityContext (Swift)

**Framework:** System Configuration  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Structure containing user-specified data and callbacks used with [SCNetworkReachabilitySetCallback(\_:\_:\_:)](scnetworkreachabilitysetcallback%28______%29.md).

## Declaration

```swift
struct SCNetworkReachabilityContext
```

## Topics

### Initializers

- [init()](scnetworkreachabilitycontext/init%28%29.md): Creates a network reachability context.
- [init(version:info:retain:release:copyDescription:)](scnetworkreachabilitycontext/init%28version_info_retain_release_copydescription_%29.md): Creates a network reachability context with the specified values.

### Instance Properties

- [copyDescription](scnetworkreachabilitycontext/copydescription.md): The callback used to provide a description of the `info` field.
- [info](scnetworkreachabilitycontext/info.md): A C pointer to a user-specified block of data.
- [release](scnetworkreachabilitycontext/release.md): The callback used to remove a retain previously added for the info field. If this parameter is not a pointer to a function of the correct prototype, the behavior is undefined. The value can be `NULL`.
- [retain](scnetworkreachabilitycontext/retain.md): The callback used to add a retain for the info field. If this parameter is not a pointer to a function of the correct prototype, the behavior is undefined. The value can be `NULL`.
- [version](scnetworkreachabilitycontext/version.md): The version number of the structure type being passed in as a parameter to an `SCDynamicStore` creation function. This structure is version `0`.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Data Types

- [SCNetworkReachability](scnetworkreachability.md): The handle to a network address or name.

# SCNetworkReachabilityContext (Objective-C)

**Framework:** System Configuration  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Structure containing user-specified data and callbacks used with [SCNetworkReachabilitySetCallback](scnetworkreachabilitysetcallback%28______%29.md).

## Declaration

```objectivec
typedef struct { ... } SCNetworkReachabilityContext;
```

## Topics

### Instance Properties

- [copyDescription](scnetworkreachabilitycontext/copydescription.md): The callback used to provide a description of the `info` field.
- [info](scnetworkreachabilitycontext/info.md): A C pointer to a user-specified block of data.
- [release](scnetworkreachabilitycontext/release.md): The callback used to remove a retain previously added for the info field. If this parameter is not a pointer to a function of the correct prototype, the behavior is undefined. The value can be `NULL`.
- [retain](scnetworkreachabilitycontext/retain.md): The callback used to add a retain for the info field. If this parameter is not a pointer to a function of the correct prototype, the behavior is undefined. The value can be `NULL`.
- [version](scnetworkreachabilitycontext/version.md): The version number of the structure type being passed in as a parameter to an `SCDynamicStore` creation function. This structure is version `0`.

## See Also

### Data Types

- [SCNetworkReachabilityRef](scnetworkreachability.md): The handle to a network address or name.
