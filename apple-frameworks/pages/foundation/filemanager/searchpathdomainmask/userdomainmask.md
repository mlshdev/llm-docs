> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/searchpathdomainmask/userdomainmask](https://developer.apple.com/documentation/foundation/filemanager/searchpathdomainmask/userdomainmask)

# userDomainMask (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The user’s home directory—the place to install user’s personal items (`~`).

## Declaration

```swift
static var userDomainMask: FileManager.SearchPathDomainMask { get }
```

## See Also

### Specifying Search Path Domains

- [localDomainMask](localdomainmask.md): The place to install items available to everyone on this machine.
- [networkDomainMask](networkdomainmask.md): The place to install items available on the network (`/Network`).
- [systemDomainMask](systemdomainmask.md): A directory for system files provided by Apple (`/System`) .
- [allDomainsMask](alldomainsmask.md): All domains.

# NSUserDomainMask (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The user’s home directory—the place to install user’s personal items (`~`).

## Declaration

```objectivec
NSUserDomainMask
```

## See Also

### Specifying Search Path Domains

- [NSLocalDomainMask](localdomainmask.md): The place to install items available to everyone on this machine.
- [NSNetworkDomainMask](networkdomainmask.md): The place to install items available on the network (`/Network`).
- [NSSystemDomainMask](systemdomainmask.md): A directory for system files provided by Apple (`/System`) .
- [NSAllDomainsMask](alldomainsmask.md): All domains.
