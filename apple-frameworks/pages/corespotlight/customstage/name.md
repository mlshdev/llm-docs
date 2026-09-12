> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/customstage/name](https://developer.apple.com/documentation/corespotlight/customstage/name)

# name

**Framework:** CoreSpotlight  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The name of the stage as you want it to appear in the pipeline.

## Declaration

```swift
static var name: String { get }
```

<a id="discussion"></a>

## Discussion

Keep stage names simple and descriptive, and don’t use the same stage name for multiple custom stage types.

## See Also

### Getting the stage metadata

- [description](description.md): A human-readable description of what this stage does.
- [inputTypes](inputtypes.md): The data types this stage accepts as input.
- [outputType](outputtype.md): The data type this stage produces as output.
