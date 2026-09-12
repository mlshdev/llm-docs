> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrserverattribute/newfeaturemapattribute(withinitialvalue:)](https://developer.apple.com/documentation/matter/mtrserverattribute/newfeaturemapattribute(withinitialvalue:))

# newFeatureMapAttribute(withInitialValue:) (Swift)

**Framework:** Matter  
**Kind:** Type Method  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

Create an attribute description for a FeatureMap attribute with the provided value (expected to be an unsigned integer representing the value of the bitmap). This will automatically set requiredPrivilege to the right value for FeatureMap.

## Declaration

```swift
class func newFeatureMapAttribute(withInitialValue value: NSNumber) -> Self
```

# newFeatureMapAttributeWithInitialValue: (Objective-C)

**Framework:** Matter  
**Kind:** Type Method  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

Create an attribute description for a FeatureMap attribute with the provided value (expected to be an unsigned integer representing the value of the bitmap). This will automatically set requiredPrivilege to the right value for FeatureMap.

## Declaration

```objectivec
+ (MTRServerAttribute *) newFeatureMapAttributeWithInitialValue:(NSNumber *) value;
```
