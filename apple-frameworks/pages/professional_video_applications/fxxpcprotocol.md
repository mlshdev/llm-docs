> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxxpcprotocol](https://developer.apple.com/documentation/professional_video_applications/fxxpcprotocol)

# FxXPCProtocol (Swift)

**Framework:** Professional Video Applications  
**Kind:** Protocol

## Declaration

```swift
protocol FxXPCProtocol
```

<a id="overview"></a>

## Overview

The protocol used by all FxPlug 4 plug-ins to initiate contact with the host application.

The plug-in should never use this protocol. It’s called by the host application only.

## Topics

### Instance Methods

- [createNewConnection(forProcessID:minimumVersion:maximumVersion:hostCapabilities:reply:)](fxxpcprotocol/createnewconnection%28forprocessid_minimumversion_maximumversion_hostcapabilities_reply_%29.md)
- [viewServiceListenerEndPoint(\_:)](fxxpcprotocol/viewservicelistenerendpoint%28__%29.md)

## Relationships

### Inherited By

- [PROXPCProtocol](proxpcprotocol.md)

### Conforming Types

- [FxPrincipal](fxprincipal.md)

## See Also

### Protocols

- [PROAPIAccessing](proapiaccessing.md)
- [PROAPIObject](proapiobject.md)
- [PROPlugInRegistering](propluginregistering.md)
- [PROXPCProtocol](proxpcprotocol.md)

# FxXPCProtocol (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Protocol

## Declaration

```objectivec
@protocol FxXPCProtocol
```

<a id="overview"></a>

## Overview

The protocol used by all FxPlug 4 plug-ins to initiate contact with the host application.

The plug-in should never use this protocol. It’s called by the host application only.

## Topics

### Instance Methods

- [createNewConnectionForProcessID:minimumVersion:maximumVersion:hostCapabilities:reply:](fxxpcprotocol/createnewconnection%28forprocessid_minimumversion_maximumversion_hostcapabilities_reply_%29.md)
- [viewServiceListenerEndPoint:](fxxpcprotocol/viewservicelistenerendpoint%28__%29.md)

## Relationships

### Inherited By

- [PROXPCProtocol](proxpcprotocol.md)

## See Also

### Protocols

- [PROAPIAccessing](proapiaccessing.md)
- [PROAPIObject](proapiobject.md)
- [PROPlugInRegistering](propluginregistering.md)
- [PROXPCProtocol](proxpcprotocol.md)
