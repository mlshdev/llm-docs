> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/compressorextensionencoder/setchapters(_:)](https://developer.apple.com/documentation/professional_video_applications/compressorextensionencoder/setchapters(_:))

# setChapters(\_:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** ProVideo Encoder Extensions 1.0+

Sets chapter markers of an encoded file from the contents of the input dictionary.

## Declaration

```swift
func setChapters(_ chapters: [[AnyHashable : Any]]!)
```

## Parameters

- `chapters`: An array of source media chapter markers.

## See Also

### Setting Encoding Values

- [setSettings(\_:)](setsettings%28__%29.md): Sets the current encoding settings based on the given setting values.
- [setAnnotations(\_:)](setannotations%28__%29.md): Adds annotations to an encoded media file.

# setChapters: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Sets chapter markers of an encoded file from the contents of the input dictionary.

## Declaration

```objectivec
- (void) setChapters:(NSArray<NSDictionary *> *) chapters;
```

## Parameters

- `chapters`: An array of source media chapter markers.

## See Also

### Setting Encoding Values

- [setSettings:](setsettings%28__%29.md): Sets the current encoding settings based on the given setting values.
- [setAnnotations:](setannotations%28__%29.md): Adds annotations to an encoded media file.
