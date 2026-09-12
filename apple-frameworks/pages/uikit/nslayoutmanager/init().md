> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nslayoutmanager/init()](https://developer.apple.com/documentation/uikit/nslayoutmanager/init())

# init() (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Initializes a newly created layout manager object.

## Declaration

```swift
init()
```

<a id="Discussion"></a>

## Discussion

This method is the designated initializer for the `NSLayoutManager` class. Returns an initialized object.

## See Also

### Related Documentation

- [Text Layout Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/TextLayout/TextLayout.html#//apple_ref/doc/uid/10000158i)
- [Cocoa Text Architecture Guide](https://developer.apple.com/library/archive/documentation/TextFonts/Conceptual/CocoaTextArchitecture/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009459)
- [addTextContainer(\_:)](addtextcontainer%28__%29.md): Appends the specified text container to the series of text containers where the layout manager arranges text.
- [addLayoutManager(\_:)](../nstextstorage/addlayoutmanager%28__%29.md): Adds a layout manager to the text storage object’s set of layout managers.

### Creating a layout manager

- [init(coder:)](init%28coder_%29.md): Creates a layout manager from data in an unarchiver.

# init (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Initializes a newly created layout manager object.

## Declaration

```objectivec
- (instancetype) init;
```

<a id="Discussion"></a>

## Discussion

This method is the designated initializer for the `NSLayoutManager` class. Returns an initialized object.

## See Also

### Related Documentation

- [Text Layout Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/TextLayout/TextLayout.html#//apple_ref/doc/uid/10000158i)
- [Cocoa Text Architecture Guide](https://developer.apple.com/library/archive/documentation/TextFonts/Conceptual/CocoaTextArchitecture/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009459)
- [addTextContainer:](addtextcontainer%28__%29.md): Appends the specified text container to the series of text containers where the layout manager arranges text.
- [addLayoutManager:](../nstextstorage/addlayoutmanager%28__%29.md): Adds a layout manager to the text storage object’s set of layout managers.

### Creating a layout manager

- [initWithCoder:](init%28coder_%29.md): Creates a layout manager from data in an unarchiver.
