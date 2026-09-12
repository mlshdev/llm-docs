> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/pluginnetworkpermissionscope](https://developer.apple.com/documentation/packagedescription/pluginnetworkpermissionscope)

# PluginNetworkPermissionScope

**Framework:** PackageDescription  
**Kind:** Enumeration  
**Availability:** SwiftPM 5.9+

The scope of a network permission.

## Declaration

```swift
enum PluginNetworkPermissionScope
```

<a id="overview"></a>

## Overview

The scope can be none, local connections only, or all connections.

## Topics

### Enumeration Cases

- [PluginNetworkPermissionScope.all(ports:)](pluginnetworkpermissionscope/all%28ports_%29-swift.enum.case.md): Allow local and outgoing network connections; can be limited to a list of allowed ports.
- [PluginNetworkPermissionScope.docker](pluginnetworkpermissionscope/docker.md): Allow connections to Docker through UNIX domain sockets.
- [PluginNetworkPermissionScope.local(ports:)](pluginnetworkpermissionscope/local%28ports_%29-swift.enum.case.md): Allow local network connections; can be limited to a list of allowed ports.
- [PluginNetworkPermissionScope.none](pluginnetworkpermissionscope/none.md): Do not allow network access.
- [PluginNetworkPermissionScope.unixDomainSocket](pluginnetworkpermissionscope/unixdomainsocket.md): Allow connections to any UNIX domain socket.

### Type Methods

- [all(ports:)](pluginnetworkpermissionscope/all%28ports_%29-swift.type.method.md): Allow local and outgoing network connections, limited to a range of allowed ports.
- [local(ports:)](pluginnetworkpermissionscope/local%28ports_%29-swift.type.method.md): Allow local network connections, limited to a range of allowed ports.
