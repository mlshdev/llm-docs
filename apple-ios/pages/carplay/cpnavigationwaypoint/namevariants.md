> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnavigationwaypoint/namevariants

# nameVariants (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

nameVariants is an array of @c NSString representing variants of the waypoint’s display name, arranged from most to least preferred. The variant strings should be provided as localized, displayable content.

## Declaration

```swift
var nameVariants: [String] { get }
```

# nameVariants (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

nameVariants is an array of @c NSString representing variants of the waypoint’s display name, arranged from most to least preferred. The variant strings should be provided as localized, displayable content.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSString *> * nameVariants;
```
