> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/visualfidelitydata/devicefitstatus](https://developer.apple.com/documentation/arkit/visualfidelitydata/devicefitstatus)

# deviceFitStatus

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** visionOS 27.0+

The device fit validation status.

## Declaration

```swift
var deviceFitStatus: DeviceFitStatus { get }
```

<a id="discussion"></a>

## Discussion

Indicates whether the user’s eyes are properly positioned within the optimal device fit range, or provides directional feedback if positioned outside.

Note: Returns `.unknown` if the provider was created without requesting device fit updates, or when the status cannot be determined.
