> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/init(frame:collectionviewlayout:)](https://developer.apple.com/documentation/uikit/uicollectionview/init(frame:collectionviewlayout:))

# init(frame:collectionViewLayout:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates a collection view object with the specified frame and layout.

## Declaration

```swift
init(frame: CGRect, collectionViewLayout layout: UICollectionViewLayout)
```

## Parameters

- `frame`: The frame rectangle for the collection view, measured in points. The origin of the frame is relative to the superview in which you plan to add it. This frame is passed to the superclass during initialization.
- `layout`: The layout object to use for organizing items. The collection view stores a strong reference to the specified object. Must not be `nil`.

<a id="return-value"></a>

## Return Value

An initialized collection view object, or `nil` if the object couldn’t be created.

<a id="Discussion"></a>

## Discussion

Use this method when initializing a collection view object programmatically.

This method is the designated initializer.

## See Also

### Creating a collection view

- [init(coder:)](init%28coder_%29.md): Creates a collection view object from data in a given unarchiver.

# initWithFrame:collectionViewLayout: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates a collection view object with the specified frame and layout.

## Declaration

```objectivec
- (instancetype) initWithFrame:(CGRect) frame collectionViewLayout:(UICollectionViewLayout *) layout;
```

## Parameters

- `frame`: The frame rectangle for the collection view, measured in points. The origin of the frame is relative to the superview in which you plan to add it. This frame is passed to the superclass during initialization.
- `layout`: The layout object to use for organizing items. The collection view stores a strong reference to the specified object. Must not be `nil`.

<a id="return-value"></a>

## Return Value

An initialized collection view object, or `nil` if the object couldn’t be created.

<a id="Discussion"></a>

## Discussion

Use this method when initializing a collection view object programmatically.

This method is the designated initializer.

## See Also

### Creating a collection view

- [initWithCoder:](init%28coder_%29.md): Creates a collection view object from data in a given unarchiver.
