> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cinematic/cnscriptchanges/userdecisions

# userDecisions

**Interface language:** Objective-C

**Framework:** Cinematic  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

All active user decisions, including those made at recording time, unless removed.

## Declaration

```objectivec
@property (readonly) NSArray<CNDecision *> * userDecisions;
```
