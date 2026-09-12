> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmnetworkconfigurationprofile/isnetworkaccessrestricted](https://developer.apple.com/documentation/homekit/hmnetworkconfigurationprofile/isnetworkaccessrestricted)

# isNetworkAccessRestricted (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An indication of whether the accessory’s access to the network is restricted.

## Declaration

```swift
var isNetworkAccessRestricted: Bool { get }
```

<a id="Discussion"></a>

## Discussion

When the value is `true`, the accessory experiences restricted network access. When the value is `false`, the accessory’s access to the network isn’t restricted.

# networkAccessRestricted (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An indication of whether the accessory’s access to the network is restricted.

## Declaration

```objectivec
@property (nonatomic, assign, readonly, getter=isNetworkAccessRestricted) BOOL networkAccessRestricted;
```

<a id="Discussion"></a>

## Discussion

When the value is `true`, the accessory experiences restricted network access. When the value is `false`, the accessory’s access to the network isn’t restricted.
