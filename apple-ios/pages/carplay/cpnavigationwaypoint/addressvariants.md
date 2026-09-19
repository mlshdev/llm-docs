> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnavigationwaypoint/addressvariants

# addressVariants (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

addressVariants is an array of @c NSString representing variants of the waypoint’s address, arranged from most to least preferred. The variant strings should be provided as localized, displayable content.

## Declaration

```swift
var addressVariants: [String] { get }
```

# addressVariants (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

addressVariants is an array of @c NSString representing variants of the waypoint’s address, arranged from most to least preferred. The variant strings should be provided as localized, displayable content.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSString *> * addressVariants;
```
