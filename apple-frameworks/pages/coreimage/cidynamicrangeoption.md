> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cidynamicrangeoption](https://developer.apple.com/documentation/coreimage/cidynamicrangeoption)

# CIDynamicRangeOption (Swift)

**Framework:** Core Image  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

An enum string type that your code can use to select different System Tone Mapping modes.

## Declaration

```swift
struct CIDynamicRangeOption
```

<a id="overview"></a>

## Overview

These options are consistent with the analogous options available in Core Graphics, Core Animation, AppKit, UIKit, and SwiftUI, In Core Image, this option can be set on the `CISystemToneMap` filter.

## Topics

### Enumeration Cases

- [standard](cidynamicrangeoption/standard.md): Use Standard dynamic range.
- [constrainedHigh](cidynamicrangeoption/constrainedhigh.md): Use extended dynamic range, but brightness is modulated to optimize for co-existence with other composited content.
- [high](cidynamicrangeoption/high.md): Use High dynamic range.

### Initializers

- [init(rawValue:)](cidynamicrangeoption/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# CIDynamicRangeOption (Objective-C)

**Framework:** Core Image  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

An enum string type that your code can use to select different System Tone Mapping modes.

## Declaration

```objectivec
typedef NSString * CIDynamicRangeOption;
```

<a id="overview"></a>

## Overview

These options are consistent with the analogous options available in Core Graphics, Core Animation, AppKit, UIKit, and SwiftUI, In Core Image, this option can be set on the `CISystemToneMap` filter.

## Topics

### Enumeration Cases

- [kCIDynamicRangeStandard](cidynamicrangeoption/standard.md): Use Standard dynamic range.
- [kCIDynamicRangeConstrainedHigh](cidynamicrangeoption/constrainedhigh.md): Use extended dynamic range, but brightness is modulated to optimize for co-existence with other composited content.
- [kCIDynamicRangeHigh](cidynamicrangeoption/high.md): Use High dynamic range.
