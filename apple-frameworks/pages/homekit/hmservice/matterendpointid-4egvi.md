> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmservice/matterendpointid-4egvi](https://developer.apple.com/documentation/homekit/hmservice/matterendpointid-4egvi)

# matterEndpointID

**Interface language:** Objective-C

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSNumber * matterEndpointID;
```

<a id="discussion"></a>

## Discussion

The Matter endpoint identifier that this service is mapped to.

This property is nil for HAP accessories, and set to a valid value for Matter devices.
