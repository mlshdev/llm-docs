> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mattersupport/matteradddevicerequest/shouldscannetworks](https://developer.apple.com/documentation/mattersupport/matteradddevicerequest/shouldscannetworks)

# shouldScanNetworks

**Framework:** MatterSupport  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 14.0+ · visionOS

A flag that indicates whether to receive network scan results.

## Declaration

```swift
var shouldScanNetworks: Bool
```

<a id="discussion"></a>

## Discussion

The app receives the network scan results, or an empty list if no scan occurred. Even if the property is set to `true`, the scan may not occur if the accessory doesn’t support scanning.

## See Also

### Performing the request

- [perform()](perform%28%29.md): Launch the user interface to set up a Matter device in the ecosystem.
