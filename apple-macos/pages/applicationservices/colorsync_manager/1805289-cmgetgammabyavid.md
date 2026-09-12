> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/colorsync_manager/1805289-cmgetgammabyavid](https://developer.apple.com/documentation/applicationservices/colorsync_manager/1805289-cmgetgammabyavid)

# CMGetGammaByAVID

**Interface language:** Objective-C

**Framework:** Application Services

Obtains the gamma value for the specified display device.

## Declaration

```objectivec
CMError CMGetGammaByAVID (
   CMDisplayIDType theID,
   CMVideoCardGamma *gamma,
   UInt32 *size
);
```

## Parameters

- `theID`: A Display Manager ID value. You pass the ID value for the display device for which to set the gamma.
- `gamma`:
- `size`:

<a id="return_value"></a>

## Return Value

A `CMError` value. See [Result Codes](../colorsync_manager.md#1670295).

## See Also

### Working With Video Card Lookup Tables

- [CMSetGammaByAVID](1805291-cmsetgammabyavid.md): Sets the gamma for the specified display device.
