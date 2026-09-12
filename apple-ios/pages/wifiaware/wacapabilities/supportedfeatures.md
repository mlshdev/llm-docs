> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiaware/wacapabilities/supportedfeatures](https://developer.apple.com/documentation/wifiaware/wacapabilities/supportedfeatures)

# supportedFeatures

**Framework:** Wi-Fi Aware  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A property that returns a set of supported features, or an empty set if the current platform doesn’t support Wi-Fi Aware.

## Declaration

```swift
static var supportedFeatures: Set<WACapabilities.Feature> { get }
```

<a id="discussion"></a>

## Discussion

If the host device doesn’t support Wi-Fi Aware, the system returns an empty set. If a feature is present in the set, it’s supported, which you can test by using the code below:

```swift
let isSupported = WACapabilities.supportedFeatures.contains(feature)
```

## See Also

### Checking features supported by host device

- [WACapabilities.Feature](feature.md): Features that your app’s current host device can support.
