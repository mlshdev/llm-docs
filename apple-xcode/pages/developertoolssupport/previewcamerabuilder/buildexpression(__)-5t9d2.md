> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-d045c48ba442; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/developertoolssupport/previewcamerabuilder/buildexpression(_:)-5t9d2

# buildExpression(\_:)

**Framework:** DeveloperToolsSupport  
**Kind:** Type Method  
**Availability:** visionOS 1.0+

Builds a partial result from an array of cameras.

## Declaration

```swift
static func buildExpression(_ cameras: [PreviewCamera]) -> [PreviewCamera]
```

## See Also

### Building a preview camera

- [buildArray(\_:)](buildarray%28__%29.md): Builds a partial result from an array of partial results.
- [buildExpression(\_:)](buildexpression%28__%29-5okdh.md): Builds a partial result from a single camera.
- [buildPartialBlock(accumulated:next:)](buildpartialblock%28accumulated_next_%29.md): Combines an accumulated component with a new component.
- [buildPartialBlock(first:)](buildpartialblock%28first_%29.md): Builds a partial result component from the first component.
