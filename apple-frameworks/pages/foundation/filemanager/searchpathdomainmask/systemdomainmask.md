> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/searchpathdomainmask/systemdomainmask](https://developer.apple.com/documentation/foundation/filemanager/searchpathdomainmask/systemdomainmask)

# systemDomainMask (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A directory for system files provided by Apple (`/System`) .

## Declaration

```swift
static var systemDomainMask: FileManager.SearchPathDomainMask { get }
```

<a id="Discussion"></a>

## Discussion

This directory can’t be modified.

## See Also

### Specifying Search Path Domains

- [userDomainMask](userdomainmask.md): The user’s home directory—the place to install user’s personal items (`~`).
- [localDomainMask](localdomainmask.md): The place to install items available to everyone on this machine.
- [networkDomainMask](networkdomainmask.md): The place to install items available on the network (`/Network`).
- [allDomainsMask](alldomainsmask.md): All domains.

# NSSystemDomainMask (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A directory for system files provided by Apple (`/System`) .

## Declaration

```objectivec
NSSystemDomainMask
```

<a id="Discussion"></a>

## Discussion

This directory can’t be modified.

## See Also

### Specifying Search Path Domains

- [NSUserDomainMask](userdomainmask.md): The user’s home directory—the place to install user’s personal items (`~`).
- [NSLocalDomainMask](localdomainmask.md): The place to install items available to everyone on this machine.
- [NSNetworkDomainMask](networkdomainmask.md): The place to install items available on the network (`/Network`).
- [NSAllDomainsMask](alldomainsmask.md): All domains.
