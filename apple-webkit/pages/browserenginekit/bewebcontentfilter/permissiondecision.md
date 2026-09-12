> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/bewebcontentfilter/permissiondecision](https://developer.apple.com/documentation/browserenginekit/bewebcontentfilter/permissiondecision)

# BEWebContentFilter.PermissionDecision (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+

## Declaration

```swift
enum PermissionDecision
```

<a id="overview"></a>

## Overview

The outcome of a Permission Request to add URL to allow-list

## Topics

### Enumeration Cases

- [BEWebContentFilter.PermissionDecision.allowed](permissiondecision/allowed.md)
- [BEWebContentFilter.PermissionDecision.denied](permissiondecision/denied.md)
- [BEWebContentFilter.PermissionDecision.error](permissiondecision/error.md)
- [BEWebContentFilter.PermissionDecision.pending](permissiondecision/pending.md)

### Initializers

- [init(rawValue:)](permissiondecision/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# BEWebContentFilterPermissionDecision (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+

## Declaration

```objectivec
enum BEWebContentFilterPermissionDecision : NSInteger;
```

<a id="overview"></a>

## Overview

The outcome of a Permission Request to add URL to allow-list

## Topics

### Enumeration Cases

- [BEWebContentFilterPermissionDecisionAllowed](permissiondecision/allowed.md)
- [BEWebContentFilterPermissionDecisionDenied](permissiondecision/denied.md)
- [BEWebContentFilterPermissionDecisionError](permissiondecision/error.md)
- [BEWebContentFilterPermissionDecisionPending](permissiondecision/pending.md)
