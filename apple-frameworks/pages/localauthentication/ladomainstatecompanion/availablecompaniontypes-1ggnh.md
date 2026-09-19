> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/localauthentication/ladomainstatecompanion/availablecompaniontypes-1ggnh

# availableCompanionTypes

**Interface language:** Objective-C

**Framework:** Local Authentication  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+

Indicates types of companions paired with the device. The elements are NSNumber-wrapped instances of @c `LACompanionType`.

## Declaration

```objectivec
@property (nonatomic, readonly) NSSet<NSNumber *> * availableCompanionTypes;
```
