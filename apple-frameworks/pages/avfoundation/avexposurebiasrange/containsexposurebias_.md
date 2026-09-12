> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avexposurebiasrange/containsexposurebias:](https://developer.apple.com/documentation/avfoundation/avexposurebiasrange/containsexposurebias:)

# containsExposureBias:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

Determines whether the range contains the specified exposure bias.

## Declaration

```objectivec
- (BOOL) containsExposureBias:(float) exposureBias;
```

## Parameters

- `exposureBias`: The exposure bias to test, in EV units.

<a id="return-value"></a>

## Return Value

`true` if the range contains the exposure bias; otherwise, `false`.

## See Also

### Inspecting the exposure bias range

- [minExposureBias](minexposurebias.md): The minimum exposure bias in EV units that this range supports.
- [maxExposureBias](maxexposurebias.md): The maximum exposure bias in EV units that this range supports.
