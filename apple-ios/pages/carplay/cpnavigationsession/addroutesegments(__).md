> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnavigationsession/addroutesegments(_:)

# addRouteSegments(\_:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Use this method to add CPRouteSegments in chronological order to the navigation session. CPRouteSegment objects must be added as soon as they are available.

## Declaration

```swift
func addRouteSegments(_ routeSegments: [CPRouteSegment])
```

# addRouteSegments: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Use this method to add CPRouteSegments in chronological order to the navigation session. CPRouteSegment objects must be added as soon as they are available.

## Declaration

```objectivec
- (void) addRouteSegments:(NSArray<CPRouteSegment *> *) routeSegments;
```
