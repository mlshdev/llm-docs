> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scntransformconstraint/positionconstraint(inworldspace:with:)](https://developer.apple.com/documentation/scenekit/scntransformconstraint/positionconstraint(inworldspace:with:))

# positionConstraint(inWorldSpace:with:) (Swift)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

## Declaration

```swift
class func positionConstraint(inWorldSpace world: Bool, with block: @escaping (SCNNode, SCNVector3) -> SCNVector3) -> Self
```

# positionConstraintInWorldSpace:withBlock: (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

## Declaration

```objectivec
+ (instancetype) positionConstraintInWorldSpace:(BOOL) world withBlock:(SCNVector3 (^)(SCNNode *node, SCNVector3 position)) block;
```
