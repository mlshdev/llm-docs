> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremedia/kcmmemorypooloption_ageoutperiod

# kCMMemoryPoolOption_AgeOutPeriod (Swift)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

The period of time before the pool recycles its memory.

## Declaration

```swift
let kCMMemoryPoolOption_AgeOutPeriod: CFString
```

<a id="Discussion"></a>

## Discussion

Pass a value for this option to the [CMMemoryPoolCreate(options:)](cmmemorypoolcreate%28options_%29.md) function.

# kCMMemoryPoolOption_AgeOutPeriod (Objective-C)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

The period of time before the pool recycles its memory.

## Declaration

```objectivec
extern CFStringRef const kCMMemoryPoolOption_AgeOutPeriod;
```

<a id="Discussion"></a>

## Discussion

Pass a value for this option to the [CMMemoryPoolCreate](cmmemorypoolcreate%28options_%29.md) function.
