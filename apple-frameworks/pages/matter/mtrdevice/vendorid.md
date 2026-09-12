> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrdevice/vendorid](https://developer.apple.com/documentation/matter/mtrdevice/vendorid)

# vendorID (Swift)

**Framework:** Matter  
**Kind:** Instance Property  
**Availability:** iOS 18.3+ · iPadOS 18.3+ · Mac Catalyst 18.3+ · macOS 15.3+ · tvOS 18.3+ · visionOS 2.3+ · watchOS 11.3+

The Vendor Identifier associated with the device.

## Declaration

```swift
@NSCopying var vendorID: NSNumber? { get }
```

<a id="discussion"></a>

## Discussion

A non-nil value if the vendor identifier has been determined from the device, nil if unknown.

# vendorID (Objective-C)

**Framework:** Matter  
**Kind:** Instance Property  
**Availability:** iOS 18.3+ · iPadOS 18.3+ · Mac Catalyst 18.3+ · macOS 15.3+ · tvOS 18.3+ · visionOS 2.3+ · watchOS 11.3+

The Vendor Identifier associated with the device.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSNumber * vendorID;
```

<a id="discussion"></a>

## Discussion

A non-nil value if the vendor identifier has been determined from the device, nil if unknown.
