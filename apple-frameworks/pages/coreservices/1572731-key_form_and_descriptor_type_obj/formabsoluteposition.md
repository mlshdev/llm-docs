> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1572731-key_form_and_descriptor_type_obj/formabsoluteposition](https://developer.apple.com/documentation/coreservices/1572731-key_form_and_descriptor_type_obj/formabsoluteposition)

# formAbsolutePosition

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```objectivec
formAbsolutePosition = 'indx'
```

<a id="discussion"></a>

## Discussion

An integer or other constant indicating the position of one or more elements in relation to the beginning or end of their container. The key data consists of an integer that specifies either an offset or an ordinal position.

For descriptor type `typeAbsoluteOrdinal`, the data consists of one of the constants `kAEFirst`, `kAEMiddle`, `kAELast`, `kAEAny`, or `kAEAll`, which are described in [AEDisposeToken](../1446783-aedisposetoken.md).

For other descriptor types, the data can be coerced to either a positive integer, indicating the offset of the requested element from the beginning of the container, or a negative integer, indicating its offset from the end of the container.
