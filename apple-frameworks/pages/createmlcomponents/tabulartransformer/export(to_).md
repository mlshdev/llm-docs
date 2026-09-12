> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/tabulartransformer/export(to:)](https://developer.apple.com/documentation/createmlcomponents/tabulartransformer/export(to:))

# export(to:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Exports this transformer as a CoreML model.

## Declaration

```swift
func export(to url: URL) throws
```

## Parameters

- `url`: The location to write the model into.

<a id="discussion"></a>

## Discussion

> **Note**

> By default this method exports .mlpackage files. You can export a .mlmodel file by specifying that as the URL file extension. But if you specify .mlmodel and the transformer doesn’t support it, this method will throw an error.

## See Also

### Exporting

- [export(to:metadata:)](export%28to_metadata_%29.md): Exports this tabular transformer as a CoreML model with userInfo.
