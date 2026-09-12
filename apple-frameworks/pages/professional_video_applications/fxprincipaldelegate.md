> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxprincipaldelegate](https://developer.apple.com/documentation/professional_video_applications/fxprincipaldelegate)

# FxPrincipalDelegate (Swift)

**Framework:** Professional Video Applications  
**Kind:** Protocol  
**Availability:** FxPlug 4.1+

A protocol that provides information about the host application that launched your XPC service.

## Declaration

```swift
protocol FxPrincipalDelegate
```

<a id="overview"></a>

## Overview

When the host application first launches your XPC Service, your XPC calls +[startServicePrincipal(with:)](fxprincipal/startserviceprincipal%28with_%29.md) to get communication with the host application started. Passing in a delegate allows you to know which host application and version launched your XPC service.

## Topics

### Instance Method

- [didEstablishConnection(withHost:version:)](fxprincipaldelegate/didestablishconnection%28withhost_version_%29.md): Notifies your XPC service that a connection was established with the host.

## See Also

### Services

- [FxPrincipal](fxprincipal.md): Singleton object that starts your XPC service running and can return the embedded (in-process) component of your plug-in.
- [FxPrincipalAPI](fxprincipalapi.md): A protocol that provides an interface that the host application implements to retrieve an XPC proxy object for communicating with its XPC.

# FxPrincipalDelegate (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Protocol

A protocol that provides information about the host application that launched your XPC service.

## Declaration

```objectivec
@protocol FxPrincipalDelegate
```

<a id="overview"></a>

## Overview

When the host application first launches your XPC Service, your XPC calls +[startServicePrincipalWithDelegate:](fxprincipal/startserviceprincipal%28with_%29.md) to get communication with the host application started. Passing in a delegate allows you to know which host application and version launched your XPC service.

## Topics

### Instance Method

- [didEstablishConnectionWithHost:version:](fxprincipaldelegate/didestablishconnection%28withhost_version_%29.md): Notifies your XPC service that a connection was established with the host.

## See Also

### Services

- [FxPrincipal](fxprincipal.md): Singleton object that starts your XPC service running and can return the embedded (in-process) component of your plug-in.
- [FxPrincipalAPI](fxprincipalapi.md): A protocol that provides an interface that the host application implements to retrieve an XPC proxy object for communicating with its XPC.
