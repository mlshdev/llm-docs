> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipagecontrol/size(fornumberofpages:)](https://developer.apple.com/documentation/uikit/uipagecontrol/size(fornumberofpages:))

# size(forNumberOfPages:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the size the receiver’s bounds should be to accommodate the given number of pages.

## Declaration

```swift
func size(forNumberOfPages pageCount: Int) -> CGSize
```

## Parameters

- `pageCount`: The number of pages to fit in the receiver’s bounds.

<a id="return-value"></a>

## Return Value

The minimum size required to display dots for the page count.

<a id="Discussion"></a>

## Discussion

Subclasses that customize the appearance of the page control can use this method to resize the page control when the page count changes.

# sizeForNumberOfPages: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the size the receiver’s bounds should be to accommodate the given number of pages.

## Declaration

```objectivec
- (CGSize) sizeForNumberOfPages:(NSInteger) pageCount;
```

## Parameters

- `pageCount`: The number of pages to fit in the receiver’s bounds.

<a id="return-value"></a>

## Return Value

The minimum size required to display dots for the page count.

<a id="Discussion"></a>

## Discussion

Subclasses that customize the appearance of the page control can use this method to resize the page control when the page count changes.
