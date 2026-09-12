> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrdevicecontroller/devices](https://developer.apple.com/documentation/matter/mtrdevicecontroller/devices)

# devices (Swift)

**Framework:** Matter  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Returns the list of MTRDevice instances that this controller has loaded into memory. Returns an empty array if no devices are in memory.

## Declaration

```swift
var devices: [MTRDevice] { get }
```

# devices (Objective-C)

**Framework:** Matter  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Returns the list of MTRDevice instances that this controller has loaded into memory. Returns an empty array if no devices are in memory.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<MTRDevice *> * devices;
```
