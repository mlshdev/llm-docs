> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideoobject/getelementnumbername

# GetElementNumberName

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

Gets the number name for the given element and scope of the video object.

## Declaration

```objectivec
OSSharedPtr<OSString> GetElementNumberName(IOUserVideoObjectPropertyElement in_element, IOUserVideoObjectPropertyScope in_scope);
```

## Parameters

- `in_element`: The element.
- `in_scope`: The scope.

<a id="return-value"></a>

## Return Value

The number name.

<a id="discussion"></a>

## Discussion

The object’s work queue synchronizes access to the value.

## See Also

### Working with elements

- [GetElementCategoryName](getelementcategoryname.md): Beta. Gets the category name for the given element and scope of the video object.
- [SetElementCategoryName](setelementcategoryname.md): Beta. Sets the category name for the given element and scope of the video object.
- [GetElementName](getelementname.md): Beta. Gets the name for the given element and scope of the video object.
- [SetElementName](setelementname.md): Beta. Sets the name for the given element and scope of the video object.
- [SetElementNumberName](setelementnumbername.md): Beta. Sets the number name for the given element of the video object.
