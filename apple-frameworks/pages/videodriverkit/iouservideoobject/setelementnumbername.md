> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideoobject/setelementnumbername](https://developer.apple.com/documentation/videodriverkit/iouservideoobject/setelementnumbername)

# SetElementNumberName

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Sets the number name for the given element of the video object.

## Declaration

```objectivec
kern_return_t SetElementNumberName(IOUserVideoObjectPropertyElement in_element, IOUserVideoObjectPropertyScope in_scope, OSString *in_number_name);
```

## Parameters

- `in_element`: The IOUserVideoObjectPropertyElement
- `in_scope`: The IOUserVideoObjectPropertyScope
- `in_number_name`: OSString number name to set

<a id="discussion"></a>

## Discussion

If the object can change the name dynamically, the object sends a notification to the host to update the object state on success. The object’s work queue synchronizes access to the value.

## See Also

### Working with elements

- [GetElementCategoryName](getelementcategoryname.md): Gets the category name for the given element and scope of the video object.
- [SetElementCategoryName](setelementcategoryname.md): Sets the category name for the given element and scope of the video object.
- [GetElementName](getelementname.md): Gets the name for the given element and scope of the video object.
- [SetElementName](setelementname.md): Sets the name for the given element and scope of the video object.
- [GetElementNumberName](getelementnumbername.md): Gets the number name for the given element and scope of the video object.
