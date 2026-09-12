> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/beextensionprocess](https://developer.apple.com/documentation/browserenginekit/beextensionprocess)

# BEExtensionProcess (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · macOS 26.0+

A common protocol that creates XPC connections for an extension process.

## Declaration

```swift
protocol BEExtensionProcess : NSObjectProtocol
```

<a id="overview"></a>

## Overview

This protocol is common across extension processes for networking ([BENetworkingProcess](benetworkingprocess.md)), rendering ([BERenderingProcess](berenderingprocess.md)), and web content ([BEWebContentProcess](bewebcontentprocess.md)).

Create an XPC connection for an extension process with the [makeLibXPCConnectionError()](beextensionprocess/makelibxpcconnectionerror%28%29.md) method. Stop an extension process with [invalidate()](beextensionprocess/invalidate%28%29.md).

## Topics

Managing extension connections

- [invalidate()](beextensionprocess/invalidate%28%29.md): Stops the extension process.
- [makeLibXPCConnectionError()](beextensionprocess/makelibxpcconnectionerror%28%29.md): Creates a new libXPC connection to the extension process.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Essentials

- [Managing the browser extension life cycle](managing-the-browser-extension-lifecycle.md): Coordinate helper processes to efficiently support your browser app.
- [Using XPC to communicate with browser extensions](using-xpc-to-communicate-with-browser-extensions.md): Build interprocess communication between your host app and extensions.

# BEExtensionProcess (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · macOS 26.0+

A common protocol that creates XPC connections for an extension process.

## Declaration

```objectivec
@protocol BEExtensionProcess <NSObject>
```

<a id="overview"></a>

## Overview

This protocol is common across extension processes for networking ([BENetworkingProcess](benetworkingprocess.md)), rendering ([BERenderingProcess](berenderingprocess.md)), and web content ([BEWebContentProcess](bewebcontentprocess.md)).

Create an XPC connection for an extension process with the [makeLibXPCConnectionError:](beextensionprocess/makelibxpcconnectionerror%28%29.md) method. Stop an extension process with [invalidate](beextensionprocess/invalidate%28%29.md).

## Topics

Managing extension connections

- [invalidate](beextensionprocess/invalidate%28%29.md): Stops the extension process.
- [makeLibXPCConnectionError:](beextensionprocess/makelibxpcconnectionerror%28%29.md): Creates a new libXPC connection to the extension process.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [BENetworkingProcess](benetworkingprocess.md)
- [BERenderingProcess](berenderingprocess.md)
- [BEWebContentProcess](bewebcontentprocess.md)

## See Also

### Essentials

- [Managing the browser extension life cycle](managing-the-browser-extension-lifecycle.md): Coordinate helper processes to efficiently support your browser app.
- [Using XPC to communicate with browser extensions](using-xpc-to-communicate-with-browser-extensions.md): Build interprocess communication between your host app and extensions.
