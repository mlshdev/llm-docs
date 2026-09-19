> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnowplayingsportseventstatus/eventstatusimage

# eventStatusImage (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

An optional event status image for this event, if it applies to this event. For example, a baseball game could display a representation of the bases and outs, indicating how many bases are loaded and the number of outs in the current inning.

## Declaration

```swift
@NSCopying var eventStatusImage: UIImage? { get }
```

# eventStatusImage (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

An optional event status image for this event, if it applies to this event. For example, a baseball game could display a representation of the bases and outs, indicating how many bases are loaded and the number of outs in the current inning.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) UIImage * eventStatusImage;
```
