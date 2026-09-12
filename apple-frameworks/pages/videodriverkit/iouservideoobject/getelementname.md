> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideoobject/getelementname](https://developer.apple.com/documentation/videodriverkit/iouservideoobject/getelementname)

# GetElementName

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Gets the name for the given element and scope of the video object.

## Declaration

```objectivec
OSSharedPtr<OSString> GetElementName(IOUserVideoObjectPropertyElement in_element, IOUserVideoObjectPropertyScope in_scope);
```

## Parameters

- `in_element`: The element.
- `in_scope`: The scope.

<a id="return-value"></a>

## Return Value

The element name.

<a id="discussion"></a>

## Discussion

The object’s work queue synchronizes access to the value.

## See Also

### Working with elements

- [GetElementCategoryName](getelementcategoryname.md): Gets the category name for the given element and scope of the video object.
- [SetElementCategoryName](setelementcategoryname.md): Sets the category name for the given element and scope of the video object.
- [SetElementName](setelementname.md): Sets the name for the given element and scope of the video object.
- [GetElementNumberName](getelementnumbername.md): Gets the number name for the given element and scope of the video object.
- [SetElementNumberName](setelementnumbername.md): Sets the number name for the given element of the video object.
