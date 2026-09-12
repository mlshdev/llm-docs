> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipreviewparameters/init(textlinerects:)](https://developer.apple.com/documentation/uikit/uipreviewparameters/init(textlinerects:))

# init(textLineRects:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 17.0+ · visionOS 1.0+

Creates a preview parameters object with information about the text you want to preview.

## Declaration

```swift
convenience init(textLineRects: [NSValue])
```

## Parameters

- `textLineRects`: An array of text line rectangles in the coordinate system of the view being animated. UIKit clips the previewed content using the specified rectangles. Wrap each [CGRect](../../corefoundation/cgrect.md) in an [NSValue](../../foundation/nsvalue.md) object. If you specify an empty array, UIKit shows the entire view.

<a id="return-value"></a>

## Return Value

A new preview parameters object for a view containing text.

## See Also

### Creating preview parameters

- [init()](init%28%29.md): Creates a default set of preview parameters.

# initWithTextLineRects: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 17.0+ · visionOS 1.0+

Creates a preview parameters object with information about the text you want to preview.

## Declaration

```objectivec
- (instancetype) initWithTextLineRects:(NSArray<NSValue *> *) textLineRects;
```

## Parameters

- `textLineRects`: An array of text line rectangles in the coordinate system of the view being animated. UIKit clips the previewed content using the specified rectangles. Wrap each [CGRect](../../corefoundation/cgrect.md) in an [NSValue](../../foundation/nsvalue.md) object. If you specify an empty array, UIKit shows the entire view.

<a id="return-value"></a>

## Return Value

A new preview parameters object for a view containing text.

## See Also

### Creating preview parameters

- [init](init%28%29.md): Creates a default set of preview parameters.
