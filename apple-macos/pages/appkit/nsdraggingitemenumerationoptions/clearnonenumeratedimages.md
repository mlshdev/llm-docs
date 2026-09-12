> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdraggingitemenumerationoptions/clearnonenumeratedimages](https://developer.apple.com/documentation/appkit/nsdraggingitemenumerationoptions/clearnonenumeratedimages)

# clearNonenumeratedImages (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.7+

A constant that indicates the enumeration clears the image components provider for all dragging items that don’t meet the classes and search options criteria.

## Declaration

```swift
static var clearNonenumeratedImages: NSDraggingItemEnumerationOptions { get }
```

<a id="Discussion"></a>

## Discussion

Specify this option when you enumerate dragging items to hide the drag image for nonvalid items for this destination. The enumeration sets the [imageComponentsProvider](../nsdraggingitem/imagecomponentsprovider.md) to `nil` for all dragging items that don’t meet the classes and search options criteria.

## See Also

### Constants

- [concurrent](concurrent.md): A constant that indicates the enumeration processes dragging items concurrently.

# NSDraggingItemEnumerationClearNonenumeratedImages (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.7+

A constant that indicates the enumeration clears the image components provider for all dragging items that don’t meet the classes and search options criteria.

## Declaration

```objectivec
NSDraggingItemEnumerationClearNonenumeratedImages
```

<a id="Discussion"></a>

## Discussion

Specify this option when you enumerate dragging items to hide the drag image for nonvalid items for this destination. The enumeration sets the [imageComponentsProvider](../nsdraggingitem/imagecomponentsprovider.md) to `nil` for all dragging items that don’t meet the classes and search options criteria.

## See Also

### Constants

- [NSDraggingItemEnumerationConcurrent](concurrent.md): A constant that indicates the enumeration processes dragging items concurrently.
