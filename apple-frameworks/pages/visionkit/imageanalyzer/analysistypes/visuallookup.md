> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalyzer/analysistypes/visuallookup](https://developer.apple.com/documentation/visionkit/imageanalyzer/analysistypes/visuallookup)

# visualLookUp

**Framework:** VisionKit  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 17.0+ · macOS 13.0+ · visionOS 1.0+

An option that analyzes an image for subjects that the framework can look up for more information.

## Declaration

```swift
static let visualLookUp: ImageAnalyzer.AnalysisTypes
```

<a id="discussion"></a>

## Discussion

When the framework recognizes a particular type of subject in an image, it offers an interface for people to learn more about the subject. For example, if an image contains a rose, the framework recognizes a plant and enables people to tap the plant which presents a sheet with a list of additional resources on the specific type of plant — in this case, a rose.

For more information about subjects in images, see [ImageAnalysisInteraction.Subject](../../imageanalysisinteraction/subject.md).

## See Also

### Specifying types to find

- [machineReadableCode](machinereadablecode.md): An option that analyzes an image for machine-readable codes, such as QR codes.
- [text](text.md): An option that analyzes an image for text.
