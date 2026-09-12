> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideoobject/setelementname](https://developer.apple.com/documentation/videodriverkit/iouservideoobject/setelementname)

# SetElementName

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

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

- [GetElementCategoryName](getelementcategoryname.md): Gets the category name for the given element and scope of the video object.
- [SetElementCategoryName](setelementcategoryname.md): Sets the category name for the given element and scope of the video object.
- [GetElementName](getelementname.md): Gets the name for the given element and scope of the video object.
- [GetElementNumberName](getelementnumbername.md): Gets the number name for the given element and scope of the video object.
- [SetElementNumberName](setelementnumbername.md): Sets the number name for the given element of the video object.
