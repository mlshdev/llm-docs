> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssegmentedcontrol/menu(forsegment:)](https://developer.apple.com/documentation/appkit/nssegmentedcontrol/menu(forsegment:))

# menu(forSegment:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the menu for the specified segment.

## Declaration

```swift
func menu(forSegment segment: Int) -> NSMenu?
```

## Parameters

- `segment`: The index of the segment whose menu you want to get. This method raises an exception ([rangeException](https://developer.apple.com/documentation/foundation/nsexceptionname/rangeexception)) if the index is out of bounds.

<a id="return-value"></a>

## Return Value

The menu associated with the segment; otherwise, `nil`.

## See Also

### Configuring a segment menu

- [setMenu(\_:forSegment:)](setmenu%28__forsegment_%29.md): Sets the menu for the specified segment.
- [setShowsMenuIndicator(\_:forSegment:)](setshowsmenuindicator%28__forsegment_%29.md)
- [showsMenuIndicator(forSegment:)](showsmenuindicator%28forsegment_%29.md)
- [isSpringLoaded](isspringloaded.md): A Boolean value that indicates whether spring loading is enabled for the control.

# menuForSegment: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the menu for the specified segment.

## Declaration

```objectivec
- (NSMenu *) menuForSegment:(NSInteger) segment;
```

## Parameters

- `segment`: The index of the segment whose menu you want to get. This method raises an exception ([NSRangeException](https://developer.apple.com/documentation/foundation/nsexceptionname/rangeexception)) if the index is out of bounds.

<a id="return-value"></a>

## Return Value

The menu associated with the segment; otherwise, `nil`.

## See Also

### Configuring a segment menu

- [setMenu:forSegment:](setmenu%28__forsegment_%29.md): Sets the menu for the specified segment.
- [setShowsMenuIndicator:forSegment:](setshowsmenuindicator%28__forsegment_%29.md)
- [showsMenuIndicatorForSegment:](showsmenuindicator%28forsegment_%29.md)
- [springLoaded](isspringloaded.md): A Boolean value that indicates whether spring loading is enabled for the control.
