> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/searchpathdomainmask/localdomainmask](https://developer.apple.com/documentation/foundation/filemanager/searchpathdomainmask/localdomainmask)

# localDomainMask (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The place to install items available to everyone on this machine.

## Declaration

```swift
static var localDomainMask: FileManager.SearchPathDomainMask { get }
```

## See Also

### Specifying Search Path Domains

- [userDomainMask](userdomainmask.md): The user’s home directory—the place to install user’s personal items (`~`).
- [networkDomainMask](networkdomainmask.md): The place to install items available on the network (`/Network`).
- [systemDomainMask](systemdomainmask.md): A directory for system files provided by Apple (`/System`) .
- [allDomainsMask](alldomainsmask.md): All domains.

# NSLocalDomainMask (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The place to install items available to everyone on this machine.

## Declaration

```objectivec
NSLocalDomainMask
```

## See Also

### Specifying Search Path Domains

- [NSUserDomainMask](userdomainmask.md): The user’s home directory—the place to install user’s personal items (`~`).
- [NSNetworkDomainMask](networkdomainmask.md): The place to install items available on the network (`/Network`).
- [NSSystemDomainMask](systemdomainmask.md): A directory for system files provided by Apple (`/System`) .
- [NSAllDomainsMask](alldomainsmask.md): All domains.
