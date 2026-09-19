> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/system/mach/sendonceright

# Mach.SendOnceRight

**Framework:** System  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.0+ · watchOS 10.4+

The MachPortRight type used to manage a send-once right.

## Declaration

```swift
@frozen struct SendOnceRight
```

<a id="overview"></a>

## Overview

Send-once rights are the most restrictive type of Mach port rights. They cannot create other rights, and are consumed upon use.

Upon destruction a send-once notification will be sent to the receiving end.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [MachPortRight](../machportright.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
