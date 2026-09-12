> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/temporaltransformer/export(to:metadata:)](https://developer.apple.com/documentation/createmlcomponents/temporaltransformer/export(to:metadata:))

# export(to:metadata:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Exports this temporal transformer as a CoreML model with user-supplied metadata.

## Declaration

```swift
func export(to url: URL, metadata: ModelMetadata) throws
```

## Parameters

- `url`: The location to write the model into.
- `metadata`: Contextual user-provided information.

<a id="discussion"></a>

## Discussion

> **Note**

> By default this method exports .mlpackage files. You can export a .mlmodel file by specifying that as the URL file extension. But if you specify .mlmodel and the transformer doesn’t support it, this method will throw an error.

## See Also

### Exporting

- [export(to:)](export%28to_%29.md): Exports this temporal transformer as a CoreML model.
