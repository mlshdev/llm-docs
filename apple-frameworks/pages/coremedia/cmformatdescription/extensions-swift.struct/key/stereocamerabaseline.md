> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmformatdescription/extensions-swift.struct/key/stereocamerabaseline](https://developer.apple.com/documentation/coremedia/cmformatdescription/extensions-swift.struct/key/stereocamerabaseline)

# stereoCameraBaseline

**Framework:** Core Media  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Indicates the distance between centers of the lenses of the camera system.

## Declaration

```swift
@backDeployed(before: macOS 26.0, iOS 26.0, visionOS 26.0)
static var stereoCameraBaseline: CMFormatDescription.Extensions.Key { get }
```

<a id="discussion"></a>

## Discussion

The value is a CFNumber holding an unsigned 32-bit integer that is interpreted in micrometers or thousandths of a millimeter (e.g., 63123 is 63.123 millimeters). This property is optional and should only be specified if the distance is known.
