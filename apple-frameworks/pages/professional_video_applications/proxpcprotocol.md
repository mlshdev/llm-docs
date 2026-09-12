> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/proxpcprotocol](https://developer.apple.com/documentation/professional_video_applications/proxpcprotocol)

# PROXPCProtocol (Swift)

**Framework:** Professional Video Applications  
**Kind:** Protocol

## Declaration

```swift
protocol PROXPCProtocol : FxXPCProtocol
```

<a id="overview"></a>

## Overview

The protocol used by PluginManager plug-ins that also handle dynamic registration.

The plug-in should never directly use this protocol. It’s called by the host application only. Plug-ins should, however, put this protocol name as the value for the Protocl key in the PluginKit section of their Info.plist file.

## Topics

### Instance Methods

- [dynamicRegistrationEndpoint(forProcessID:version:reply:)](proxpcprotocol/dynamicregistrationendpoint%28forprocessid_version_reply_%29.md)
- [newConnection(forProcessID:minimumVersion:maximumVersion:hostCapabilities:reply:)](proxpcprotocol/newconnection%28forprocessid_minimumversion_maximumversion_hostcapabilities_reply_%29.md)

## Relationships

### Inherits From

- [FxXPCProtocol](fxxpcprotocol.md)

### Conforming Types

- [FxPrincipal](fxprincipal.md)

## See Also

### Protocols

- [FxXPCProtocol](fxxpcprotocol.md)
- [PROAPIAccessing](proapiaccessing.md)
- [PROAPIObject](proapiobject.md)
- [PROPlugInRegistering](propluginregistering.md)

# PROXPCProtocol (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Protocol

## Declaration

```objectivec
@protocol PROXPCProtocol <FxXPCProtocol>
```

<a id="overview"></a>

## Overview

The protocol used by PluginManager plug-ins that also handle dynamic registration.

The plug-in should never directly use this protocol. It’s called by the host application only. Plug-ins should, however, put this protocol name as the value for the Protocl key in the PluginKit section of their Info.plist file.

## Topics

### Instance Methods

- [dynamicRegistrationEndpointForProcessID:version:reply:](proxpcprotocol/dynamicregistrationendpoint%28forprocessid_version_reply_%29.md)
- [newConnectionForProcessID:minimumVersion:maximumVersion:hostCapabilities:reply:](proxpcprotocol/newconnection%28forprocessid_minimumversion_maximumversion_hostcapabilities_reply_%29.md)

## Relationships

### Inherits From

- [FxXPCProtocol](fxxpcprotocol.md)

### Conforming Types

- [FxPrincipal](fxprincipal.md)

## See Also

### Protocols

- [FxXPCProtocol](fxxpcprotocol.md)
- [PROAPIAccessing](proapiaccessing.md)
- [PROAPIObject](proapiobject.md)
- [PROPlugInRegistering](propluginregistering.md)
