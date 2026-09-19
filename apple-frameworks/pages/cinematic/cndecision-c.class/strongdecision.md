> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cinematic/cndecision-c.class/strongdecision

# strongDecision

**Interface language:** Objective-C

**Framework:** Cinematic  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

A flag representing whether this is a strong decision.

## Declaration

```objectivec
@property (readonly, getter=isStrongDecision) BOOL strongDecision;
```

<a id="Discussion"></a>

## Discussion

A strong decision keeps focus for as long as possible on the detected subject.
