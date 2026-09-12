> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiounitcomponentmanager/components(matching:)-9qt94](https://developer.apple.com/documentation/avfaudio/avaudiounitcomponentmanager/components(matching:)-9qt94)

# components(matching:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Gets an array of audio component objects that match the description.

## Declaration

```swift
func components(matching desc: AudioComponentDescription) -> [AVAudioUnitComponent]
```

<a id="return-value"></a>

## Return Value

An array of `AVAudioComponent` objects that match the `description`.

<a id="discussion"></a>

## Discussion

- desc: The [AudioComponentDescription](../../audiotoolbox/audiocomponentdescription.md) structure to match. The method uses the `type`, `subtype` and `manufacturer` fields to search for matching audio units. A value of `0` for any of these fields is a wildcard and returns the first match the method finds.

## See Also

### Getting matching audio components

- [components(matching:)](components%28matching_%29-96l2c.md): Gets an array of audio component objects that match the search predicate.
- [components(passingTest:)](components%28passingtest_%29.md): Gets an array of audio components that pass the block method.

# componentsMatchingDescription: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Gets an array of audio component objects that match the description.

## Declaration

```objectivec
- (NSArray<AVAudioUnitComponent *> *) componentsMatchingDescription:(AudioComponentDescription) desc;
```

<a id="return-value"></a>

## Return Value

An array of `AVAudioComponent` objects that match the `description`.

<a id="discussion"></a>

## Discussion

- desc: The [AudioComponentDescription](../../audiotoolbox/audiocomponentdescription.md) structure to match. The method uses the `type`, `subtype` and `manufacturer` fields to search for matching audio units. A value of `0` for any of these fields is a wildcard and returns the first match the method finds.

## See Also

### Getting matching audio components

- [componentsMatchingPredicate:](components%28matching_%29-96l2c.md): Gets an array of audio component objects that match the search predicate.
- [componentsPassingTest:](components%28passingtest_%29.md): Gets an array of audio components that pass the block method.
