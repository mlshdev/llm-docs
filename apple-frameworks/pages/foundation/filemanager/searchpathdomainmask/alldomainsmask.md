> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/searchpathdomainmask/alldomainsmask](https://developer.apple.com/documentation/foundation/filemanager/searchpathdomainmask/alldomainsmask)

# allDomainsMask (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

All domains.

## Declaration

```swift
static var allDomainsMask: FileManager.SearchPathDomainMask { get }
```

<a id="Discussion"></a>

## Discussion

Includes all of the above and future items.

## See Also

### Specifying Search Path Domains

- [userDomainMask](userdomainmask.md): The user’s home directory—the place to install user’s personal items (`~`).
- [localDomainMask](localdomainmask.md): The place to install items available to everyone on this machine.
- [networkDomainMask](networkdomainmask.md): The place to install items available on the network (`/Network`).
- [systemDomainMask](systemdomainmask.md): A directory for system files provided by Apple (`/System`) .

# NSAllDomainsMask (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

All domains.

## Declaration

```objectivec
NSAllDomainsMask
```

<a id="Discussion"></a>

## Discussion

Includes all of the above and future items.

## See Also

### Specifying Search Path Domains

- [NSUserDomainMask](userdomainmask.md): The user’s home directory—the place to install user’s personal items (`~`).
- [NSLocalDomainMask](localdomainmask.md): The place to install items available to everyone on this machine.
- [NSNetworkDomainMask](networkdomainmask.md): The place to install items available on the network (`/Network`).
- [NSSystemDomainMask](systemdomainmask.md): A directory for system files provided by Apple (`/System`) .
