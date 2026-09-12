> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/3753260-iomainport](https://developer.apple.com/documentation/iokit/3753260-iomainport)

# IOMainPort(\_:\_:) (Swift)

**Framework:** IOKit  
**Kind:** Function  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

## Declaration

```swift
func IOMainPort(_ bootstrapPort: mach_port_t, _ mainPort: UnsafeMutablePointer<mach_port_t>!) -> kern_return_t
```

# IOMainPort (Objective-C)

**Framework:** IOKit  
**Kind:** Function  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

## Declaration

```objectivec
kern_return_t IOMainPort(mach_port_t bootstrapPort, mach_port_t *mainPort);
```
