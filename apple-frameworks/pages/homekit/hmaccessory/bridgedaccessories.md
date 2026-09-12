> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmaccessory/bridgedaccessories](https://developer.apple.com/documentation/homekit/hmaccessory/bridgedaccessories)

# bridgedAccessories (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
var bridgedAccessories: [HMAccessory] { get }
```

<a id="discussion"></a>

## Discussion

If the receiver represents a bridge, an array of the accessories behind the bridge, otherwise empty.

# bridgedAccessories (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<HMAccessory *> * bridgedAccessories;
```

<a id="discussion"></a>

## Discussion

If the receiver represents a bridge, an array of the accessories behind the bridge, otherwise empty.
