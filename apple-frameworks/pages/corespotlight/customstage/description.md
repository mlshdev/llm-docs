> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/customstage/description](https://developer.apple.com/documentation/corespotlight/customstage/description)

# description

**Framework:** CoreSpotlight  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A human-readable description of what this stage does.

## Declaration

```swift
static var description: String { get }
```

## Mentioned In

- [Making your indexed content available to Foundation Models](../making-your-indexed-content-available-to-foundation-models.md)

<a id="discussion"></a>

## Discussion

The model uses the value in this property as instructions on how to use the stage.

## See Also

### Getting the stage metadata

- [name](name.md): The name of the stage as you want it to appear in the pipeline.
- [inputTypes](inputtypes.md): The data types this stage accepts as input.
- [outputType](outputtype.md): The data type this stage produces as output.
