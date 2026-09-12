> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimemakefromdictionary(_:)](https://developer.apple.com/documentation/coremedia/cmtimemakefromdictionary(_:))

# CMTimeMakeFromDictionary(\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a time from a dictionary representation of its fields.

## Declaration

```swift
func CMTimeMakeFromDictionary(_ dictionaryRepresentation: CFDictionary?) -> CMTime
```

## Parameters

- `dictionaryRepresentation`: A dictionary created from a call to [CMTimeCopyAsDictionary(\_:allocator:)](cmtimecopyasdictionary%28__allocator_%29.md).

<a id="return-value"></a>

## Return Value

A time structure.

<a id="Discussion"></a>

## Discussion

For keys in the dictionary, see [Dictionary Keys](cmtime-dictionary-keys.md).

## See Also

### Creating a Time

- [CMTimeMake(value:timescale:)](cmtimemake%28value_timescale_%29.md): Creates a time with a value and timescale.
- [CMTimeMakeWithEpoch(value:timescale:epoch:)](cmtimemakewithepoch%28value_timescale_epoch_%29.md): Creates a time with a value, timescale, and epoch.
- [CMTimeMakeWithSeconds(\_:preferredTimescale:)](cmtimemakewithseconds%28__preferredtimescale_%29.md): Creates a time that represents a number of seconds in a preferred timescale.

# CMTimeMakeFromDictionary (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a time from a dictionary representation of its fields.

## Declaration

```objectivec
extern CMTime CMTimeMakeFromDictionary(CFDictionaryRef dictionaryRepresentation);
```

## Parameters

- `dictionaryRepresentation`: A dictionary created from a call to [CMTimeCopyAsDictionary](cmtimecopyasdictionary%28__allocator_%29.md).

<a id="return-value"></a>

## Return Value

A time structure.

<a id="Discussion"></a>

## Discussion

For keys in the dictionary, see [Dictionary Keys](cmtime-dictionary-keys.md).

## See Also

### Creating a Time

- [CMTimeMake](cmtimemake%28value_timescale_%29.md): Creates a time with a value and timescale.
- [CMTimeMakeWithEpoch](cmtimemakewithepoch%28value_timescale_epoch_%29.md): Creates a time with a value, timescale, and epoch.
- [CMTimeMakeWithSeconds](cmtimemakewithseconds%28__preferredtimescale_%29.md): Creates a time that represents a number of seconds in a preferred timescale.
