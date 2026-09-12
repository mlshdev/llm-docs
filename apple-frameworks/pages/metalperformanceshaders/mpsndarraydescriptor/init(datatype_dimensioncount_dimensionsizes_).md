> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsndarraydescriptor/init(datatype:dimensioncount:dimensionsizes:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsndarraydescriptor/init(datatype:dimensioncount:dimensionsizes:))

# init(dataType:dimensionCount:dimensionSizes:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
convenience init(dataType: MPSDataType, dimensionCount numberOfDimensions: Int, dimensionSizes: UnsafeMutablePointer<Int>)
```

# descriptorWithDataType:dimensionCount:dimensionSizes: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
+ (instancetype) descriptorWithDataType:(MPSDataType) dataType dimensionCount:(NSUInteger) numberOfDimensions dimensionSizes:(NSUInteger *) dimensionSizes;
```
