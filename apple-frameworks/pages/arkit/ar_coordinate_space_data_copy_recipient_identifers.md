> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/ar_coordinate_space_data_copy_recipient_identifers](https://developer.apple.com/documentation/arkit/ar_coordinate_space_data_copy_recipient_identifers)

# ar_coordinate_space_data_copy_recipient_identifers

**Interface language:** Objective-C

**Framework:** ARKit  
**Kind:** Function  
**Availability:** visionOS 26.0+ (deprecated in 27.0)

Copy the list of participant identifiers of the intended recipient for this data. Data should be broadcast if the list is empty.

## Declaration

```objectivec
extern ar_identifiers_tar_coordinate_space_data_copy_recipient_identifers(ar_coordinate_space_data_t shared_coordinate_space_data);
```

## Parameters

- `shared_coordinate_space_data`: Shared coordinate space data.

<a id="return-value"></a>

## Return Value

List the participant identifiers to which the data should be sent. Data should be broadcast to all participants if the list is empty.

<a id="discussion"></a>

## Discussion

> **Note**

> This type supports ARC. In non-ARC files, use `ar_retain()` and `ar_release()` to retain and release the object.

## See Also

### Coordinate spaces

- [ar_coordinate_space_data_t](ar_coordinate_space_data_t.md): Data for sharing coordinate space information between participants.
- [ar_coordinate_space_data_copy_cfdata](ar_coordinate_space_data_copy_cfdata.md): Copy out a `CFDataRef` that archives the coordinate space data.
- [ar_coordinate_space_data_create_from_cfdata](ar_coordinate_space_data_create_from_cfdata.md): Create and initialize an `ar_coordinate_space_data_t` object from a `CFDataRef`.
- [ar_coordinate_space_data_copy_recipient_identifiers](ar_coordinate_space_data_copy_recipient_identifiers.md): Copy the list of participant identifiers of the intended recipient for this data. Data should be broadcast if the list is empty.
