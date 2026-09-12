> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextcontainer/init(size:)](https://developer.apple.com/documentation/uikit/nstextcontainer/init(size:))

# init(size:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Initializes a text container with a specified bounding rectangle.

## Declaration

```swift
init(size: CGSize)
```

## Parameters

- `size`: The size of the text container’s bounding rectangle.

<a id="return-value"></a>

## Return Value

The size of the text container’s bounding rectangle.

<a id="Discussion"></a>

## Discussion

The new text container must be added to an [NSLayoutManager](../nslayoutmanager.md) object before it can be used. The text container must also have an associated [NSTextView](https://developer.apple.com/documentation/appkit/nstextview) object for text to be displayed. This method is the designated initializer for the `NSTextContainer` class.

## See Also

### Related Documentation

- [Text Layout Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/TextLayout/TextLayout.html#//apple_ref/doc/uid/10000158i)
- [Cocoa Text Architecture Guide](https://developer.apple.com/library/archive/documentation/TextFonts/Conceptual/CocoaTextArchitecture/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009459)
- [addTextContainer(\_:)](../nslayoutmanager/addtextcontainer%28__%29.md): Appends the specified text container to the series of text containers where the layout manager arranges text.
- [Text System Storage Layer Overview](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/TextStorageLayer/TextStorageLayer.html#//apple_ref/doc/uid/10000087i)

### Creating a text container

- [init(coder:)](init%28coder_%29.md): Creates a text container from data in an unarchiver.

# initWithSize: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Initializes a text container with a specified bounding rectangle.

## Declaration

```objectivec
- (instancetype) initWithSize:(CGSize) size;
```

## Parameters

- `size`: The size of the text container’s bounding rectangle.

<a id="return-value"></a>

## Return Value

The size of the text container’s bounding rectangle.

<a id="Discussion"></a>

## Discussion

The new text container must be added to an [NSLayoutManager](../nslayoutmanager.md) object before it can be used. The text container must also have an associated [NSTextView](https://developer.apple.com/documentation/appkit/nstextview) object for text to be displayed. This method is the designated initializer for the `NSTextContainer` class.

## See Also

### Related Documentation

- [Text Layout Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/TextLayout/TextLayout.html#//apple_ref/doc/uid/10000158i)
- [Cocoa Text Architecture Guide](https://developer.apple.com/library/archive/documentation/TextFonts/Conceptual/CocoaTextArchitecture/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009459)
- [addTextContainer:](../nslayoutmanager/addtextcontainer%28__%29.md): Appends the specified text container to the series of text containers where the layout manager arranges text.
- [Text System Storage Layer Overview](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/TextStorageLayer/TextStorageLayer.html#//apple_ref/doc/uid/10000087i)

### Creating a text container

- [initWithCoder:](init%28coder_%29.md): Creates a text container from data in an unarchiver.
