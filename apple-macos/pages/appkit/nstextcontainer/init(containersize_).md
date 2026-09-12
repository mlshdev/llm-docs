> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextcontainer/init(containersize:)](https://developer.apple.com/documentation/appkit/nstextcontainer/init(containersize:))

# init(containerSize:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.0+ (deprecated in 27.0)

Initializes a text container with a specified bounding rectangle.

> Use [init(size:)](init%28size_%29.md) instead.

## Declaration

```swift
convenience init(containerSize aContainerSize: NSSize)
```

## Parameters

- `aContainerSize`: The size of the text container’s bounding rectangle.

<a id="return-value"></a>

## Return Value

The newly initialized text container.

<a id="Discussion"></a>

## Discussion

The new text container must be added to an [NSLayoutManager](../nslayoutmanager.md) object before it can be used. The text container must also have an [NSTextView](../nstextview.md) object set for text to be displayed. This method is the designated initializer for the `NSTextContainer` class.

## See Also

### Deprecated

- [lineFragmentRect(forProposedRect:sweepDirection:movementDirection:remaining:)](linefragmentrect%28forproposedrect_sweepdirection_movementdirection_remaining_%29.md): Deprecated. Calculates and returns the longest rectangle available in the proposed rectangle for displaying text.
- [contains(\_:)](contains%28__%29.md): Deprecated. Queries whether a point lies within the text container’s region or on the region’s edge—not simply within its bounding rectangle.
- [containerSize](containersize.md): Deprecated. The size of the text container’s bounding rectangle.

# initWithContainerSize: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 27.0)

Initializes a text container with a specified bounding rectangle.

> Use [initWithSize:](init%28size_%29.md) instead.

## Declaration

```objectivec
- (instancetype) initWithContainerSize:(NSSize) aContainerSize;
```

## Parameters

- `aContainerSize`: The size of the text container’s bounding rectangle.

<a id="return-value"></a>

## Return Value

The newly initialized text container.

<a id="Discussion"></a>

## Discussion

The new text container must be added to an [NSLayoutManager](../nslayoutmanager.md) object before it can be used. The text container must also have an [NSTextView](../nstextview.md) object set for text to be displayed. This method is the designated initializer for the `NSTextContainer` class.

## See Also

### Deprecated

- [lineFragmentRectForProposedRect:sweepDirection:movementDirection:remainingRect:](linefragmentrect%28forproposedrect_sweepdirection_movementdirection_remaining_%29.md): Deprecated. Calculates and returns the longest rectangle available in the proposed rectangle for displaying text.
- [containsPoint:](contains%28__%29.md): Deprecated. Queries whether a point lies within the text container’s region or on the region’s edge—not simply within its bounding rectangle.
- [containerSize](containersize.md): Deprecated. The size of the text container’s bounding rectangle.
