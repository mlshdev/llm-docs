> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/adattributionkit/postback/issupported](https://developer.apple.com/documentation/adattributionkit/postback/issupported)

# isSupported

**Framework:** AdAttributionKit  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+

A Boolean value that indicates whether the framework supports postbacks on a person’s device.

## Declaration

```swift
static var isSupported: Bool { get }
```

<a id="return-value"></a>

## Return Value

`true` if the current device supports postbacks; otherwise, `false`.

<a id="discussion"></a>

## Discussion

Check this value to ensure the current device supports postbacks before calling methods on a `Postback`.
