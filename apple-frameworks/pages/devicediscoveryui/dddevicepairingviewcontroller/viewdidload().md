> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicediscoveryui/dddevicepairingviewcontroller/viewdidload()

# viewDidLoad()

**Framework:** DeviceDiscoveryUI  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Configures the view after the framework loads the view controller’s view into memory.

## Declaration

```swift
@MainActor @preconcurrency override final func viewDidLoad()
```

<a id="discussion"></a>

## Discussion

You can override this method to perform tasks to immediately follow the setting of the view property.
