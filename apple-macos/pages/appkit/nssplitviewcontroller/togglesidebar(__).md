> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitviewcontroller/togglesidebar(_:)](https://developer.apple.com/documentation/appkit/nssplitviewcontroller/togglesidebar(_:))

# toggleSidebar(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Collapses or expands the first sidebar in the split view controller using an animation.

## Declaration

```swift
@IBAction func toggleSidebar(_ sender: Any?)
```

<a id="discussion"></a>

## Discussion

If the split view controller doesn’t contain a sidebar, calling this method does nothing.

## See Also

### Managing Sidebars

- [minimumThicknessForInlineSidebars](minimumthicknessforinlinesidebars.md): The minimum thickness for a sidebar before it automatically collapses.
- [automaticDimension](automaticdimension.md): The default value to apply to a dimension.

# toggleSidebar: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Collapses or expands the first sidebar in the split view controller using an animation.

## Declaration

```objectivec
- (void) toggleSidebar:(id) sender;
```

<a id="discussion"></a>

## Discussion

If the split view controller doesn’t contain a sidebar, calling this method does nothing.

## See Also

### Managing Sidebars

- [minimumThicknessForInlineSidebars](minimumthicknessforinlinesidebars.md): The minimum thickness for a sidebar before it automatically collapses.
- [NSSplitViewControllerAutomaticDimension](automaticdimension.md): The default value to apply to a dimension.
