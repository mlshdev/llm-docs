> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/colorsync_manager/1805291-cmsetgammabyavid](https://developer.apple.com/documentation/applicationservices/colorsync_manager/1805291-cmsetgammabyavid)

# CMSetGammaByAVID

**Interface language:** Objective-C

**Framework:** Application Services

Sets the gamma for the specified display device.

## Declaration

```objectivec
CMError CMSetGammaByAVID (
   CMDisplayIDType theID,
   CMVideoCardGamma *gamma
);
```

## Parameters

- `theID`: A Display Manager ID value. You pass the ID value for the display device for which to set the gamma.
- `gamma`: A pointer to the gamma value to which you want to set the display device.

<a id="return_value"></a>

## Return Value

A `CMError` value. See [Result Codes](../colorsync_manager.md#1670295).

## See Also

### Working With Video Card Lookup Tables

- [CMGetGammaByAVID](1805289-cmgetgammabyavid.md): Obtains the gamma value for the specified display device.
