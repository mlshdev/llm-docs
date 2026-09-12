> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmformatdescription/matchestaggedbuffergroup(_:)](https://developer.apple.com/documentation/coremedia/cmformatdescription/matchestaggedbuffergroup(_:))

# matchesTaggedBufferGroup(\_:)

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Whether the format description matches a set of tagged buffers.

## Declaration

```swift
func matchesTaggedBufferGroup(_ taggedBuffers: [CMTaggedBuffer]) -> Bool
```

## Parameters

- `taggedBuffers`: An array of tagged buffers to match tags against this media description.

<a id="return-value"></a>

## Return Value

Returns `true` if the description contains a tag collection matching the tags of the buffer group, `false` otherwise.

## See Also

### Inspecting Format Descriptions

- [audioFormatList](audioformatlist.md): The audio format list items that describe the audio formats.
- [audioStreamBasicDescription](audiostreambasicdescription.md): The audio stream description.
- [audioChannelLayout](audiochannellayout.md): The audio channel layout.
- [dimensions](dimensions.md): The encoded pixels not including the pixel aspect ratio or clean aperture tags.
- [extensions](extensions-swift.property.md): A dictionary that contains all of the extensions.
- [frameDuration](frameduration.md): The duration of each frame.
- [frameQuanta](framequanta.md): The frames per second for the time code, or the frame per tick for counter mode.
- [identifiers](identifiers.md): An array of metadata identifiers.
- [magicCookie](magiccookie.md): A copy of the magic cookie, if any.
- [mediaSubType](mediasubtype-swift.property.md): The media subtype.
- [mediaType](mediatype-swift.property.md): The media type.
- [mostCompatibleFormat](mostcompatibleformat.md): The most compatible audio format list item.
- [nalUnitHeaderLength](nalunitheaderlength.md): The size, in bytes, of the unit length field in an AVC or HEVC video sample or parameter set sample.
- [parameterSets](parametersets.md): The parameter sets that an H.264 or HEVC format contains.
- [richestDecodableFormat](richestdecodableformat.md): The audio format list item the system validates.
