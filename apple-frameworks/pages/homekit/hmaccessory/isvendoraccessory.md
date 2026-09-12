> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmaccessory/isvendoraccessory](https://developer.apple.com/documentation/homekit/hmaccessory/isvendoraccessory)

# isVendorAccessory (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 26.1+ · iPadOS 26.1+ · Mac Catalyst 26.1+ · tvOS 26.1+ · visionOS 26.0+ · watchOS 26.1+

## Declaration

```swift
var isVendorAccessory: Bool { get }
```

<a id="discussion"></a>

## Discussion

Returns YES if the current process is entitled to vendor-level access to this accessory.

# vendorAccessory (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 26.1+ · iPadOS 26.1+ · Mac Catalyst 26.1+ · tvOS 26.1+ · visionOS 26.0+ · watchOS 26.1+

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isVendorAccessory) BOOL vendorAccessory;
```

<a id="discussion"></a>

## Discussion

Returns YES if the current process is entitled to vendor-level access to this accessory.
