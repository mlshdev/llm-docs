> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigraphicspdfrenderercontext/beginpage(withbounds:pageinfo:)](https://developer.apple.com/documentation/uikit/uigraphicspdfrenderercontext/beginpage(withbounds:pageinfo:))

# beginPage(withBounds:pageInfo:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Marks the beginning of a new page in the PDF context and configures it using the specified values.

## Declaration

```swift
func beginPage(withBounds bounds: CGRect, pageInfo: [String : Any])
```

## Parameters

- `bounds`: A rectangle that specifies the size and location of the new PDF page. This rectangle corresponds to the media box in PDF terminology.
- `pageInfo`: A dictionary that specifies additional page-related information, such as the boxes that define different parts of the page. For a list of keys you can include in this dictionary, see `Box Keys` in [Auxiliary Dictionary Keys](../../coregraphics/auxiliary-dictionary-keys.md).

<a id="Discussion"></a>

## Discussion

This function ends any previous page before beginning a new one. It sets the media box of the new page to the value in the [kCGPDFContextMediaBox](../../coregraphics/kcgpdfcontextmediabox.md) key of the `pageInfo` dictionary, or to the value in the bounds parameter if the dictionary does not contain the key.

## See Also

### Marking new pages

- [beginPage()](beginpage%28%29.md): Marks the beginning of a new page in the PDF context and configures it using default values.

# beginPageWithBounds:pageInfo: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Marks the beginning of a new page in the PDF context and configures it using the specified values.

## Declaration

```objectivec
- (void) beginPageWithBounds:(CGRect) bounds pageInfo:(NSDictionary<NSString *,id> *) pageInfo;
```

## Parameters

- `bounds`: A rectangle that specifies the size and location of the new PDF page. This rectangle corresponds to the media box in PDF terminology.
- `pageInfo`: A dictionary that specifies additional page-related information, such as the boxes that define different parts of the page. For a list of keys you can include in this dictionary, see `Box Keys` in [Auxiliary Dictionary Keys](../../coregraphics/auxiliary-dictionary-keys.md).

<a id="Discussion"></a>

## Discussion

This function ends any previous page before beginning a new one. It sets the media box of the new page to the value in the [kCGPDFContextMediaBox](../../coregraphics/kcgpdfcontextmediabox.md) key of the `pageInfo` dictionary, or to the value in the bounds parameter if the dictionary does not contain the key.

## See Also

### Marking new pages

- [beginPage](beginpage%28%29.md): Marks the beginning of a new page in the PDF context and configures it using default values.
