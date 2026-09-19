> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/videodriverkit/iouservideoobjectpropertyelementmain

# IOUserVideoObjectPropertyElementMain

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Global Variable  
**Availability:** DriverKit 27.0+ beta

The value for properties that apply to the main element or to the entire scope.

## Declaration

```objectivec
constexpr const IOUserVideoObjectPropertyElement IOUserVideoObjectPropertyElementMain;
```

<a id="discussion"></a>

## Discussion

This value is used with [IOUserVideoObjectPropertyElement](iouservideoobjectpropertyelement.md).

## See Also

### Working with object properties

- [IOUserVideoObjectPropertyElement](iouservideoobjectpropertyelement.md): Beta. An integer that identifies, along with the property selector and scope, a specific piece of information about a video object.
- [IOUserVideoObjectPropertyScope](iouservideoobjectpropertyscope.md): Beta. A four character code which, along with the selector and element, identifies a specific piece of information about a video object.
- [IOUserVideoObjectPropertySelector](iouservideoobjectpropertyselector.md): Beta. A four character code which, along with the scope and element, specifies a specific piece of information about a video object.
