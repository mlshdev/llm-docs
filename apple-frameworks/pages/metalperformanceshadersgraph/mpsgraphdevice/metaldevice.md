> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphdevice/metaldevice](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphdevice/metaldevice)

# metalDevice (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

If device type is Metal then returns the corresponding MTLDevice else nil.

## Declaration

```swift
var metalDevice: (any MTLDevice)? { get }
```

# metalDevice (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

If device type is Metal then returns the corresponding MTLDevice else nil.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) id<MTLDevice> metalDevice;
```
