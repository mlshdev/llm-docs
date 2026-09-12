> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwpath/linkquality-swift.enum](https://developer.apple.com/documentation/network/nwpath/linkquality-swift.enum)

# NWPath.LinkQuality

**Framework:** Network  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Represents the link quality measurement of the link layer network attachment

## Declaration

```swift
enum LinkQuality
```

<a id="overview"></a>

## Overview

Use this value to tune initial values for algorithms that can scale with the capabilities of the network. Do not use this value to gate connection attempts or to override adjustments that would be made based on actual network performance.

## Topics

### Enumeration Cases

- [NWPath.LinkQuality.good](linkquality-swift.enum/good.md): Link quality is good
- [NWPath.LinkQuality.minimal](linkquality-swift.enum/minimal.md): Link quality is minimal
- [NWPath.LinkQuality.moderate](linkquality-swift.enum/moderate.md): Link quality is moderate
- [NWPath.LinkQuality.unknown](linkquality-swift.enum/unknown.md): No link quality measurement is available

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
