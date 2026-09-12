> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdlayer/importcontents(from:)-2ipug](https://developer.apple.com/documentation/usdkit/usdlayer/importcontents(from:)-2ipug)

# importContents(from:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Replaces the layer’s contents with the layer file at the given path.

## Declaration

```swift
func importContents(from path: FilePath) throws
```

## Parameters

- `path`: The path of the layer file to read.

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if the file cannot be read or parsed.

## See Also

### Exporting and importing

- [export(to:)](export%28to_%29-7vouy.md): Writes the layer’s contents to a file at the given URL.
- [export(to:)](export%28to_%29-5hboj.md): Writes the layer’s contents to a file at the given path.
- [importContents(from:)](importcontents%28from_%29-99hnf.md): Replaces the layer’s contents with the USDA string.
