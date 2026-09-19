> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideodriver/propertieschanged

# PropertiesChanged

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

This method informs the host when the state of an driver’s object changes.

## Declaration

```objectivec
kern_return_t PropertiesChanged(IOUserVideoObjectID in_object_id, IOUserVideoObjectPropertySelector *in_properties, uint32_t in_num_properties);
```

## Parameters

- `in_properties`: An array of IOUserVideoObjectPropertySelectors for the changed properties.
- `in_num_properties`: The number of elements in the in_properties array.

<a id="return-value"></a>

## Return Value

A kern_return_t indicating success or failure.

<a id="discussion"></a>

## Discussion

For device objects, this method is only used for state changes that don’t affect IO or the structure of the device.

## See Also

### Communicating with the host

- [IOUserVideoObjectID](../videodriverkit/iouservideoobjectid.md): Beta. A handle for a a specific video object.
- [IOUserVideoObjectPropertySelector](../videodriverkit/iouservideoobjectpropertyselector.md): Beta. A four character code which, along with the scope and element, specifies a specific piece of information about a video object.
