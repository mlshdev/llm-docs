> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/benetworkingprocess](https://developer.apple.com/documentation/browserenginekit/benetworkingprocess)

# BENetworkingProcess

**Interface language:** Objective-C

**Framework:** BrowserEngineKit  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS 14.3+

An object that represents a networking extension process.

## Declaration

```objectivec
@interface BENetworkingProcess : NSObject
```

<a id="overview"></a>

## Overview

A browser app can have one or more networking extensions, each of which need a separate bundle identifier. The app can launch only one instance of each networking extension.

## Topics

### Creating and invalidating extension processes

- [networkProcessWithBundleID:interruptionHandler:completion:](benetworkingprocess/networkprocesswithbundleid_interruptionhandler_completion_.md): Launches a networking extension process asynchronously.
- [networkProcessWithInterruptionHandler:completion:](benetworkingprocess/networkprocesswithinterruptionhandler_completion_.md): Launches a networking extension process asynchronously.
- [invalidate](benetworkingprocess/invalidate.md): Stops the networking process.

### Creating XPC connections

- [makeLibXPCConnectionError:](benetworkingprocess/makelibxpcconnectionerror_.md): Creates a new XPC connection to the extension process.

### Coordinating processes

- [grantCapability:error:](benetworkingprocess/grantcapability_error_.md): Grants the specified capability to the process.
- [grantCapability:error:invalidationHandler:](benetworkingprocess/grantcapability_error_invalidationhandler_.md): Grants the specified capability to the process and observes an invalidation closure.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [BEExtensionProcess](beextensionprocess.md)

## See Also

### Host app representations

- [BEWebContentProcess](bewebcontentprocess.md): A class that processes webpage content in an app extension.
- [BERenderingProcess](berenderingprocess.md): An object that represents a running browser rendering extension process.
