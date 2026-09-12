> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmaccessory/hapinstanceid-667fy](https://developer.apple.com/documentation/homekit/hmaccessory/hapinstanceid-667fy)

# HAPInstanceID

**Interface language:** Objective-C

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 26.1+ · iPadOS 26.1+ · Mac Catalyst 26.1+ · tvOS 26.1+ · visionOS 26.0+ · watchOS 26.1+

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSNumber * HAPInstanceID;
```

<a id="discussion"></a>

## Discussion

Returns the HAP Accessory Instance ID, or nil if the receiver does not represent a HAP accessory.

Requires vendor-level access to this accessory.
