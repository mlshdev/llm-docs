> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/compressorextensionencoder/statusmessage()](https://developer.apple.com/documentation/professional_video_applications/compressorextensionencoder/statusmessage())

# statusMessage() (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** ProVideo Encoder Extensions 1.0+

Returns the status of an encoding job.

## Declaration

```swift
func statusMessage() -> String!
```

<a id="return-value"></a>

## Return Value

A string indicating the status of an encoding job, or `null` if there is no update about the encoding process.

<a id="discussion"></a>

## Discussion

The following code shows an example of an encoder status message:

```objc
message = [video_encoder_extension localizedStringForKey:@"AudioEncodingInProgress"];

```

## See Also

### Providing Updates of the Encoding Process

- [percentDone()](percentdone%28%29.md): Returns the completion percentage of an encoding job.

# statusMessage (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Returns the status of an encoding job.

## Declaration

```objectivec
- (NSString *) statusMessage;
```

<a id="return-value"></a>

## Return Value

A string indicating the status of an encoding job, or `null` if there is no update about the encoding process.

<a id="discussion"></a>

## Discussion

The following code shows an example of an encoder status message:

```objc
message = [video_encoder_extension localizedStringForKey:@"AudioEncodingInProgress"];

```

## See Also

### Providing Updates of the Encoding Process

- [percentDone](percentdone%28%29.md): Returns the completion percentage of an encoding job.
