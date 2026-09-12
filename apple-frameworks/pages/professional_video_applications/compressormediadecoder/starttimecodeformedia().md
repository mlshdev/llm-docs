> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/compressormediadecoder/starttimecodeformedia()](https://developer.apple.com/documentation/professional_video_applications/compressormediadecoder/starttimecodeformedia())

# startTimeCodeForMedia() (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** ProVideo Encoder Extensions 1.0+

Returns the source media timecode details.

## Declaration

```swift
func startTimeCodeForMedia() -> [AnyHashable : Any]!
```

<a id="return-value"></a>

## Return Value

A dictionary with key-value pairs specifying the source media timecode information.

<a id="discussion"></a>

## Discussion

Use this timecode information if you plan to encode the source media timecode. The dictionary has the following keys:

- **`hours`, `minutes`, `seconds`, `frames`**: Integer
- **`frameRate`**: Double
- **`isDrop`**: Bool
- **`reelName`**: NSString

## See Also

### Getting Decoding Attributes

- [decodingAttributes()](decodingattributes%28%29.md): Returns a set of video attributes of the decoded source media file.

# startTimeCodeForMedia (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Returns the source media timecode details.

## Declaration

```objectivec
- (NSDictionary *) startTimeCodeForMedia;
```

<a id="return-value"></a>

## Return Value

A dictionary with key-value pairs specifying the source media timecode information.

<a id="discussion"></a>

## Discussion

Use this timecode information if you plan to encode the source media timecode. The dictionary has the following keys:

- **`hours`, `minutes`, `seconds`, `frames`**: Integer
- **`frameRate`**: Double
- **`isDrop`**: Bool
- **`reelName`**: NSString

## See Also

### Getting Decoding Attributes

- [decodingAttributes](decodingattributes%28%29.md): Returns a set of video attributes of the decoded source media file.
