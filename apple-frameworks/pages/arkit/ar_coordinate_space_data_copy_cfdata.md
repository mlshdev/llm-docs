> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/ar_coordinate_space_data_copy_cfdata](https://developer.apple.com/documentation/arkit/ar_coordinate_space_data_copy_cfdata)

# ar_coordinate_space_data_copy_cfdata

**Interface language:** Objective-C

**Framework:** ARKit  
**Kind:** Function  
**Availability:** visionOS 26.0+

Copy out a `CFDataRef` that archives the coordinate space data.

## Declaration

```objectivec
extern CFDataRefar_coordinate_space_data_copy_cfdata(ar_coordinate_space_data_t data);
```

## Parameters

- `data`: Coordinate space data.

<a id="return-value"></a>

## Return Value

The `CFDataRef`. The caller is responsible for calling `CFRelease` on the returned pointer.

## See Also

### Coordinate spaces

- [ar_coordinate_space_data_t](ar_coordinate_space_data_t.md): Data for sharing coordinate space information between participants.
- [ar_coordinate_space_data_copy_recipient_identifers](ar_coordinate_space_data_copy_recipient_identifers.md): Deprecated. Copy the list of participant identifiers of the intended recipient for this data. Data should be broadcast if the list is empty.
- [ar_coordinate_space_data_create_from_cfdata](ar_coordinate_space_data_create_from_cfdata.md): Create and initialize an `ar_coordinate_space_data_t` object from a `CFDataRef`.
- [ar_coordinate_space_data_copy_recipient_identifiers](ar_coordinate_space_data_copy_recipient_identifiers.md): Copy the list of participant identifiers of the intended recipient for this data. Data should be broadcast if the list is empty.
