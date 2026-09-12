> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdlayer/importcontents(from:)-99hnf](https://developer.apple.com/documentation/usdkit/usdlayer/importcontents(from:)-99hnf)

# importContents(from:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Replaces the layer’s contents with the USDA string.

## Declaration

```swift
func importContents(from string: String) throws
```

## Parameters

- `string`: The USDA source to import.

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if the string cannot be parsed.

## See Also

### Exporting and importing

- [export(to:)](export%28to_%29-7vouy.md): Writes the layer’s contents to a file at the given URL.
- [export(to:)](export%28to_%29-5hboj.md): Writes the layer’s contents to a file at the given path.
- [importContents(from:)](importcontents%28from_%29-2ipug.md): Replaces the layer’s contents with the layer file at the given path.
