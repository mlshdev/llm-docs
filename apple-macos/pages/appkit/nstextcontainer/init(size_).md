> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextcontainer/init(size:)](https://developer.apple.com/documentation/appkit/nstextcontainer/init(size:))

# init(size:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.11+

Initializes a text container with a specified bounding rectangle.

## Declaration

```swift
init(size: CGSize)
```

## Parameters

- `size`: The size of the text container’s bounding rectangle.

<a id="Discussion"></a>

## Discussion

The new text container must be added to an [NSLayoutManager](../nslayoutmanager.md) object before it can be used. The text container must also have an associated [NSTextView](../nstextview.md) object for text to be displayed. This method is the designated initializer for the `NSTextContainer` class.

## See Also

### Creating a text container

- [init(coder:)](init%28coder_%29.md): Creates a text container from data in an unarchiver.

# initWithSize: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Initializes a text container with a specified bounding rectangle.

## Declaration

```objectivec
- (instancetype) initWithSize:(CGSize) size;
```

## Parameters

- `size`: The size of the text container’s bounding rectangle.

<a id="Discussion"></a>

## Discussion

The new text container must be added to an [NSLayoutManager](../nslayoutmanager.md) object before it can be used. The text container must also have an associated [NSTextView](../nstextview.md) object for text to be displayed. This method is the designated initializer for the `NSTextContainer` class.

## See Also

### Creating a text container

- [initWithCoder:](init%28coder_%29.md): Creates a text container from data in an unarchiver.
