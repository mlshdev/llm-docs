> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpnavigationwaypoint/initwithcenterpoint:locationthreshold:namevariants:addressvariants:entrypoints:entrypointscount:timezone:](https://developer.apple.com/documentation/carplay/cpnavigationwaypoint/initwithcenterpoint:locationthreshold:namevariants:addressvariants:entrypoints:entrypointscount:timezone:)

# initWithCenterPoint:locationThreshold:nameVariants:addressVariants:entryPoints:entryPointsCount:timeZone:

**Interface language:** Objective-C

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Initialize a CPNavigationWaypoint object with a center point, location threshold, optional name and name variants, optional long address and short address, optional entry points, and a timezone.

## Declaration

```objectivec
- (instancetype) initWithCenterPoint:(CPLocationCoordinate3D) centerPoint locationThreshold:(NSMeasurement<NSUnitLength *> *) locationThreshold nameVariants:(NSArray<NSString *> *) nameVariants addressVariants:(NSArray<NSString *> *) addressVariants entryPoints:(CPLocationCoordinate3D *) entryPoints entryPointsCount:(NSUInteger) entryPointsCount timeZone:(NSTimeZone *) timeZone;
```
