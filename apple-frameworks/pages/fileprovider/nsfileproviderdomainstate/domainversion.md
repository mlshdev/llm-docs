> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderdomainstate/domainversion](https://developer.apple.com/documentation/fileprovider/nsfileproviderdomainstate/domainversion)

# domainVersion (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.3+ · visionOS 1.0+

An opaque object that uniquely identifies the domain’s version.

## Declaration

```swift
var domainVersion: NSFileProviderDomainVersion { get }
```

## See Also

### Accessing State Data

- [userInfo](userinfo.md): Global state information about the current domain version.

# domainVersion (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.3+ · visionOS 1.0+

An opaque object that uniquely identifies the domain’s version.

## Declaration

```objectivec
@property (nonatomic, readonly) NSFileProviderDomainVersion * domainVersion;
```

## See Also

### Accessing State Data

- [userInfo](userinfo.md): Global state information about the current domain version.
