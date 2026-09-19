> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/nsstringfromuioffset

# NSStringFromUIOffset

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 2.0+

Returns a string formatted to contain the data from an offset structure.

## Declaration

```objectivec
extern NSString *NSStringFromUIOffset(UIOffset offset);
```

## Parameters

- `offset`: A UIKit offset data structure.

<a id="return-value"></a>

## Return Value

A string that corresponds to `offset`.

## See Also

### Converting to and from strings

- [UIOffsetFromString](uioffsetfromstring.md): Returns a UIKit offset structure corresponding to the data in a given string.
