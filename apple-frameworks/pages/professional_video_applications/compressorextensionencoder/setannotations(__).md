> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/compressorextensionencoder/setannotations(_:)](https://developer.apple.com/documentation/professional_video_applications/compressorextensionencoder/setannotations(_:))

# setAnnotations(\_:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** ProVideo Encoder Extensions 1.0+

Adds annotations to an encoded media file.

## Declaration

```swift
func setAnnotations(_ annotations: [AnyHashable : Any]!)
```

## Parameters

- `annotations`: A dictionary of source media annotations.

## See Also

### Setting Encoding Values

- [setSettings(\_:)](setsettings%28__%29.md): Sets the current encoding settings based on the given setting values.
- [setChapters(\_:)](setchapters%28__%29.md): Sets chapter markers of an encoded file from the contents of the input dictionary.

# setAnnotations: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Adds annotations to an encoded media file.

## Declaration

```objectivec
- (void) setAnnotations:(NSDictionary *) annotations;
```

## Parameters

- `annotations`: A dictionary of source media annotations.

## See Also

### Setting Encoding Values

- [setSettings:](setsettings%28__%29.md): Sets the current encoding settings based on the given setting values.
- [setChapters:](setchapters%28__%29.md): Sets chapter markers of an encoded file from the contents of the input dictionary.
