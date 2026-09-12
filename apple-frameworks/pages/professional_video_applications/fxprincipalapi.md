> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxprincipalapi](https://developer.apple.com/documentation/professional_video_applications/fxprincipalapi)

# FxPrincipalAPI (Swift)

**Framework:** Professional Video Applications  
**Kind:** Protocol  
**Availability:** FxPlug 4.1+

A protocol that provides an interface that the host application implements to retrieve an XPC proxy object for communicating with its XPC.

## Declaration

```swift
protocol FxPrincipalAPI
```

## Topics

### Getting XPC Proxy Objects

- [servicePrincipal()](fxprincipalapi/serviceprincipal%28%29.md): Retrieves a pointer to the proxy object used for sandboxed out-of-process tasks.

## See Also

### Services

- [FxPrincipal](fxprincipal.md): Singleton object that starts your XPC service running and can return the embedded (in-process) component of your plug-in.
- [FxPrincipalDelegate](fxprincipaldelegate.md): A protocol that provides information about the host application that launched your XPC service.

# FxPrincipalAPI (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Protocol

A protocol that provides an interface that the host application implements to retrieve an XPC proxy object for communicating with its XPC.

## Declaration

```objectivec
@protocol FxPrincipalAPI
```

## Topics

### Getting XPC Proxy Objects

- [servicePrincipal](fxprincipalapi/serviceprincipal%28%29.md): Retrieves a pointer to the proxy object used for sandboxed out-of-process tasks.

## See Also

### Services

- [FxPrincipal](fxprincipal.md): Singleton object that starts your XPC service running and can return the embedded (in-process) component of your plug-in.
- [FxPrincipalDelegate](fxprincipaldelegate.md): A protocol that provides information about the host application that launched your XPC service.
