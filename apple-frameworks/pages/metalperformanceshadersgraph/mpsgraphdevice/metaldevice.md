> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphdevice/metaldevice

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
