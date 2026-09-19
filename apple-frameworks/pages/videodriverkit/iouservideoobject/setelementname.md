> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideoobject/setelementname

# SetElementName

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

Sets the name for the given element and scope of the video object.

## Declaration

```objectivec
kern_return_t SetElementName(IOUserVideoObjectPropertyElement in_element, IOUserVideoObjectPropertyScope in_scope, OSString *in_name);
```

## Parameters

- `in_element`: The IOUserVideoObjectPropertyElement.
- `in_scope`: The IOUserVideoObjectPropertyScope.
- `in_name`: An OSString name to set.

<a id="return-value"></a>

## Return Value

A kern_return_t value indicating success or failure.

<a id="discussion"></a>

## Discussion

If the object can change the name dynamically, the object sends a notification to the host to update the object state on success. The object’s work queue synchronizes access to this value.

## See Also

### Working with elements

- [GetElementCategoryName](getelementcategoryname.md): Beta. Gets the category name for the given element and scope of the video object.
- [SetElementCategoryName](setelementcategoryname.md): Beta. Sets the category name for the given element and scope of the video object.
- [GetElementName](getelementname.md): Beta. Gets the name for the given element and scope of the video object.
- [GetElementNumberName](getelementnumbername.md): Beta. Gets the number name for the given element and scope of the video object.
- [SetElementNumberName](setelementnumbername.md): Beta. Sets the number name for the given element of the video object.
