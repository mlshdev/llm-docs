> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/customstage/inputtypes](https://developer.apple.com/documentation/corespotlight/customstage/inputtypes)

# inputTypes

**Framework:** CoreSpotlight  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The data types this stage accepts as input.

## Declaration

```swift
static var inputTypes: [SearchPipelineDataType] { get }
```

<a id="discussion"></a>

## Discussion

Specify at least one input type for your stage. For each input type you specify, implement the corresponding `execute` method that accepts the input type.

The model considers your stage’s input types, output type, and other factors when determining whether to include the stage in a pipeline. When constructing the pipeline, the system maps the output from one stage to the input of the next.

## See Also

### Getting the stage metadata

- [name](name.md): The name of the stage as you want it to appear in the pipeline.
- [description](description.md): A human-readable description of what this stage does.
- [outputType](outputtype.md): The data type this stage produces as output.
