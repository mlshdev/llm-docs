> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstabview/tabviewitem(at:)-8gnqw](https://developer.apple.com/documentation/appkit/nstabview/tabviewitem(at:)-8gnqw)

# tabViewItem(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the tab view item at the specified point.

## Declaration

```swift
func tabViewItem(at point: NSPoint) -> NSTabViewItem?
```

## Parameters

- `point`: The hit point.

<a id="return-value"></a>

## Return Value

The tab view item under the hit point, or `nil` if no tab view item is under that location.

<a id="Discussion"></a>

## Discussion

You can use this method to find a tab view item based on a user’s mouse click.

# tabViewItemAtPoint: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the tab view item at the specified point.

## Declaration

```objectivec
- (NSTabViewItem *) tabViewItemAtPoint:(NSPoint) point;
```

## Parameters

- `point`: The hit point.

<a id="return-value"></a>

## Return Value

The tab view item under the hit point, or `nil` if no tab view item is under that location.

<a id="Discussion"></a>

## Discussion

You can use this method to find a tab view item based on a user’s mouse click.
