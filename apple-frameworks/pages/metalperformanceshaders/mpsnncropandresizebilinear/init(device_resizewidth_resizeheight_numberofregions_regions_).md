> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsnncropandresizebilinear/init(device:resizewidth:resizeheight:numberofregions:regions:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsnncropandresizebilinear/init(device:resizewidth:resizeheight:numberofregions:regions:))

# init(device:resizeWidth:resizeHeight:numberOfRegions:regions:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

## Declaration

```swift
init(device: any MTLDevice, resizeWidth: Int, resizeHeight: Int, numberOfRegions: Int, regions: UnsafePointer<MPSRegion>)
```

# initWithDevice:resizeWidth:resizeHeight:numberOfRegions:regions: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

## Declaration

```objectivec
- (instancetype) initWithDevice:(id<MTLDevice>) device resizeWidth:(NSUInteger) resizeWidth resizeHeight:(NSUInteger) resizeHeight numberOfRegions:(NSUInteger) numberOfRegions regions:(const MPSRegion *) regions;
```
