> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4rendercommandencoder/setvertexamplificationcount(_:)-85tu1](https://developer.apple.com/documentation/metal/mtl4rendercommandencoder/setvertexamplificationcount(_:)-85tu1)

# setVertexAmplificationCount(\_:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Sets the vertex amplification count and its view mapping for each amplification ID.

## Declaration

```swift
func setVertexAmplificationCount(_ count: Int)
```

## Parameters

- `count`: The number of outputs to create. The maximum value is `2`.

<a id="discussion"></a>

## Discussion

Each view mapping element describes how to route the corresponding amplification ID to a specific viewport and render target array index by using offsets from the base array index provided by the `[[ render_target_array_index ]]` and/or `[[ viewport_array_index ]]` output attributes in the vertex shader. This allows Metal to route each amplified vertex to a different `[[ render_target_array_index ]]` and `[[ viewport_array_index ]]`, even though you can’t directly amplify these attributes.

## See Also

### Configuring vertex amplification

- [setVertexAmplificationCount(\_:)](setvertexamplificationcount%28__%29-911ja.md): Sets the vertex amplification count and its view mapping for each amplification ID.
