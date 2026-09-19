> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnavigationwaypoint/entrypoints-6kbqa

# entryPoints

**Interface language:** Objective-C

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

entryPoints is an optional array of CPLocationCoordinate3D entry points. These represent alternative access points to reach the waypoint.

## Declaration

```objectivec
@property (nonatomic, readonly) CPLocationCoordinate3D * entryPoints;
```
