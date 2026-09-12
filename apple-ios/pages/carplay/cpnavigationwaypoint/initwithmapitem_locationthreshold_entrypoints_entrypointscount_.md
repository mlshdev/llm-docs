> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpnavigationwaypoint/initwithmapitem:locationthreshold:entrypoints:entrypointscount:](https://developer.apple.com/documentation/carplay/cpnavigationwaypoint/initwithmapitem:locationthreshold:entrypoints:entrypointscount:)

# initWithMapItem:locationThreshold:entryPoints:entryPointsCount:

**Interface language:** Objective-C

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Initialize a CPNavigationWaypoint object from an MKMapItem with a location threshold and optional entry points.

## Declaration

```objectivec
- (instancetype) initWithMapItem:(MKMapItem *) mapItem locationThreshold:(NSMeasurement<NSUnitLength *> *) locationThreshold entryPoints:(CPLocationCoordinate3D *) entryPoints entryPointsCount:(NSUInteger) entryPointsCount;
```
