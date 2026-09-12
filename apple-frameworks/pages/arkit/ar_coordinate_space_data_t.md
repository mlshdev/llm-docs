> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/ar_coordinate_space_data_t](https://developer.apple.com/documentation/arkit/ar_coordinate_space_data_t)

# ar_coordinate_space_data_t

**Interface language:** Objective-C

**Framework:** ARKit  
**Kind:** Type Alias  
**Availability:** visionOS 26.0+

Data for sharing coordinate space information between participants.

## Declaration

```objectivec
typedef NSObject<OS_ar_coordinate_space_data> * ar_coordinate_space_data_t;
```

## See Also

### Coordinate spaces

- [ar_coordinate_space_data_copy_cfdata](ar_coordinate_space_data_copy_cfdata.md): Copy out a `CFDataRef` that archives the coordinate space data.
- [ar_coordinate_space_data_copy_recipient_identifers](ar_coordinate_space_data_copy_recipient_identifers.md): Deprecated. Copy the list of participant identifiers of the intended recipient for this data. Data should be broadcast if the list is empty.
- [ar_coordinate_space_data_create_from_cfdata](ar_coordinate_space_data_create_from_cfdata.md): Create and initialize an `ar_coordinate_space_data_t` object from a `CFDataRef`.
- [ar_coordinate_space_data_copy_recipient_identifiers](ar_coordinate_space_data_copy_recipient_identifiers.md): Copy the list of participant identifiers of the intended recipient for this data. Data should be broadcast if the list is empty.
