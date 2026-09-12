> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsappkitversionnumberwithpatterncolorleakfix](https://developer.apple.com/documentation/appkit/nsappkitversionnumberwithpatterncolorleakfix)

# NSAppKitVersionNumberWithPatternColorLeakFix

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

The specific version of the AppKit framework from OS X 10.1 that correctly autoreleases color objects.

## Declaration

```objectivec
static const NSAppKitVersion NSAppKitVersionNumberWithPatternColorLeakFix;
```

<a id="Discussion"></a>

## Discussion

Developers do not need to use this constant unless they are writing applications for OS X 10.1 and earlier.

The constant represents the specific version of the AppKit framework that introduced the fix for correctly autoreleasing objects returned by the [colorWithPatternImage:](nscolor/init%28patternimage_%29.md) method.

## See Also

### Feature Introductions

- [NSAppKitVersionNumberWithColumnResizingBrowser](nsappkitversionnumberwithcolumnresizingbrowser.md): The specific version of the AppKit framework that introduced support for resizing individual browser columns.
- [NSAppKitVersionNumberWithContinuousScrollingBrowser](nsappkitversionnumberwithcontinuousscrollingbrowser.md): The specific version of the AppKit framework that introduced support the continuous scrolling in a browser view.
- [NSAppKitVersionNumberWithCursorSizeSupport](nsappkitversionnumberwithcursorsizesupport.md): The specific version of the AppKit framework that introduced support for cursors larger than 16 x 16 pixels in size.
- [NSAppKitVersionNumberWithCustomSheetPosition](nsappkitversionnumberwithcustomsheetposition.md): The specific version of the AppKit framework that introduced custom sheet positioning.
- [NSAppKitVersionNumberWithDeferredWindowDisplaySupport](nsappkitversionnumberwithdeferredwindowdisplaysupport.md): The specific version of the AppKit framework that introduced support for deferred window display.
- [NSAppKitVersionNumberWithDirectionalTabs](nsappkitversionnumberwithdirectionaltabs.md): The specific version of the AppKit framework that introduced support for directional tab items.
- [NSAppKitVersionNumberWithDockTilePlugInSupport](nsappkitversionnumberwithdocktilepluginsupport.md): The specific version of the AppKit framework that introduced support for dock tile plug-ins.
