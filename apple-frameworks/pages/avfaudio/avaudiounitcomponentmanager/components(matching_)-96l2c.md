> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiounitcomponentmanager/components(matching:)-96l2c](https://developer.apple.com/documentation/avfaudio/avaudiounitcomponentmanager/components(matching:)-96l2c)

# components(matching:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Gets an array of audio component objects that match the search predicate.

## Declaration

```swift
func components(matching predicate: NSPredicate) -> [AVAudioUnitComponent]
```

## Parameters

- `predicate`: The search predicate.

<a id="return-value"></a>

## Return Value

An array of `AVAudioComponent` objects that match the predicate.

<a id="Discussion"></a>

## Discussion

You use the audio component’s information or tags to build search criteria, such as `“typeName CONTAINS 'Effect'"` or `“tags IN {'Sampler', 'MIDI'}"`.

## See Also

### Getting matching audio components

- [components(matching:)](components%28matching_%29-9qt94.md): Gets an array of audio component objects that match the description.
- [components(passingTest:)](components%28passingtest_%29.md): Gets an array of audio components that pass the block method.

# componentsMatchingPredicate: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Gets an array of audio component objects that match the search predicate.

## Declaration

```objectivec
- (NSArray<AVAudioUnitComponent *> *) componentsMatchingPredicate:(NSPredicate *) predicate;
```

## Parameters

- `predicate`: The search predicate.

<a id="return-value"></a>

## Return Value

An array of `AVAudioComponent` objects that match the predicate.

<a id="Discussion"></a>

## Discussion

You use the audio component’s information or tags to build search criteria, such as `“typeName CONTAINS 'Effect'"` or `“tags IN {'Sampler', 'MIDI'}"`.

## See Also

### Getting matching audio components

- [componentsMatchingDescription:](components%28matching_%29-9qt94.md): Gets an array of audio component objects that match the description.
- [componentsPassingTest:](components%28passingtest_%29.md): Gets an array of audio components that pass the block method.
