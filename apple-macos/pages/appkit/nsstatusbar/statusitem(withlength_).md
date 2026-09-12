> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstatusbar/statusitem(withlength:)](https://developer.apple.com/documentation/appkit/nsstatusbar/statusitem(withlength:))

# statusItem(withLength:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a newly created status item that has been allotted a specified space within the status bar.

## Declaration

```swift
func statusItem(withLength length: CGFloat) -> NSStatusItem
```

## Parameters

- `length`: A constant that specifies whether the status item is of fixed width, or variable width. The valid constants are described in [Status Bar Item Length](../status-bar-item-length.md).

<a id="return-value"></a>

## Return Value

An [NSStatusItem](../nsstatusitem.md) object.

<a id="Discussion"></a>

## Discussion

The receiver does not retain a reference to the status item, so you need to retain it. Otherwise, the object is removed from the status bar when it is deallocated.

## See Also

### Managing Status items

- [removeStatusItem(\_:)](removestatusitem%28__%29.md): Removes the specified status item from the receiver.

# statusItemWithLength: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a newly created status item that has been allotted a specified space within the status bar.

## Declaration

```objectivec
- (NSStatusItem *) statusItemWithLength:(CGFloat) length;
```

## Parameters

- `length`: A constant that specifies whether the status item is of fixed width, or variable width. The valid constants are described in [Status Bar Item Length](../status-bar-item-length.md).

<a id="return-value"></a>

## Return Value

An [NSStatusItem](../nsstatusitem.md) object.

<a id="Discussion"></a>

## Discussion

The receiver does not retain a reference to the status item, so you need to retain it. Otherwise, the object is removed from the status bar when it is deallocated.

## See Also

### Managing Status items

- [removeStatusItem:](removestatusitem%28__%29.md): Removes the specified status item from the receiver.
