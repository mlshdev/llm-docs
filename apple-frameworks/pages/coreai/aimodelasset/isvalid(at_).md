> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/aimodelasset/isvalid(at:)](https://developer.apple.com/documentation/coreai/aimodelasset/isvalid(at:))

# isValid(at:)

**Framework:** Core AI  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns a Boolean value that indicates whether the URL contains a valid model asset.

## Declaration

```swift
static func isValid(at url: URL) -> Bool
```

## Parameters

- `url`: The file URL to validate.

<a id="return-value"></a>

## Return Value

`true` if the URL points to a valid model asset; otherwise, `false`.

<a id="discussion"></a>

## Discussion

This checks that:

- the URL is a file URL
- the extension is one of the known model asset extensions
- the model contains either a source program or a derived artifact

## See Also

### Loading an asset

- [init(contentsOf:)](init%28contentsof_%29.md): Creates a model asset from the contents of the specified URL.
