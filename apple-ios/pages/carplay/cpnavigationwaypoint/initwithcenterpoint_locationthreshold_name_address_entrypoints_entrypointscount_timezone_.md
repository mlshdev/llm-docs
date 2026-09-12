> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpnavigationwaypoint/initwithcenterpoint:locationthreshold:name:address:entrypoints:entrypointscount:timezone:](https://developer.apple.com/documentation/carplay/cpnavigationwaypoint/initwithcenterpoint:locationthreshold:name:address:entrypoints:entrypointscount:timezone:)

# initWithCenterPoint:locationThreshold:name:address:entryPoints:entryPointsCount:timeZone:

**Interface language:** Objective-C

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ (deprecated in 27.0) · iPadOS 26.4+ (deprecated in 27.0) · Mac Catalyst 26.4+ (deprecated in 27.0)

Initialize a CPNavigationWaypoint object with a center point, location threshold, optional name and address, optional entry points, and a timezone.

## Declaration

```objectivec
- (instancetype) initWithCenterPoint:(CPLocationCoordinate3D) centerPoint locationThreshold:(NSMeasurement<NSUnitLength *> *) locationThreshold name:(NSString *) name address:(NSString *) address entryPoints:(CPLocationCoordinate3D *) entryPoints entryPointsCount:(NSUInteger) entryPointsCount timeZone:(NSTimeZone *) timeZone;
```
