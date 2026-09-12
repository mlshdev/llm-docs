> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/compressormediadecoder/decodingattributes()](https://developer.apple.com/documentation/professional_video_applications/compressormediadecoder/decodingattributes())

# decodingAttributes() (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** ProVideo Encoder Extensions 1.0+

Returns a set of video attributes of the decoded source media file.

## Declaration

```swift
func decodingAttributes() -> [AnyHashable : Any]!
```

<a id="return-value"></a>

## Return Value

A dictionary with key-value pairs specifying the attributes of the decoded video.

<a id="discussion"></a>

## Discussion

The decoding attribute dictionary contains the following keys:

- **`width`**: int32_t
- **`height`**: int32_t
- **`pixelType`**: OSType
- **`pixelAspectRatio`**: Double
- **`frameRate`**: Double
- **`source-start-time-code`**: Dictionary with the following keys:

`rate` (Double)

`frameNumber` (int)

`isDropFrame` (Boolean)

- **`segment-start-time-code`**: Dictionary with the following keys:

`rate` (Double)

`frameNumber` (int)

`isDropFrame` (Boolean)

- **`segment-type`**: String with one of the following values: “only”, “first”, “middle”, “last”
- **`decoding-color-primaries`**: NCLC integer values
- **`decoding-color-transfer`**: NCLC integer values
- **`decoding-color-matrix`**: NCLC integer values

## See Also

### Getting Decoding Attributes

- [startTimeCodeForMedia()](starttimecodeformedia%28%29.md): Returns the source media timecode details.

# decodingAttributes (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Returns a set of video attributes of the decoded source media file.

## Declaration

```objectivec
- (NSDictionary *) decodingAttributes;
```

<a id="return-value"></a>

## Return Value

A dictionary with key-value pairs specifying the attributes of the decoded video.

<a id="discussion"></a>

## Discussion

The decoding attribute dictionary contains the following keys:

- **`width`**: int32_t
- **`height`**: int32_t
- **`pixelType`**: OSType
- **`pixelAspectRatio`**: Double
- **`frameRate`**: Double
- **`source-start-time-code`**: Dictionary with the following keys:

`rate` (Double)

`frameNumber` (int)

`isDropFrame` (Boolean)

- **`segment-start-time-code`**: Dictionary with the following keys:

`rate` (Double)

`frameNumber` (int)

`isDropFrame` (Boolean)

- **`segment-type`**: String with one of the following values: “only”, “first”, “middle”, “last”
- **`decoding-color-primaries`**: NCLC integer values
- **`decoding-color-transfer`**: NCLC integer values
- **`decoding-color-matrix`**: NCLC integer values

## See Also

### Getting Decoding Attributes

- [startTimeCodeForMedia](starttimecodeformedia%28%29.md): Returns the source media timecode details.
