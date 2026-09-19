> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uitabbar/iscustomizing

# isCustomizing (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+

A Boolean value indicating whether the user is currently customizing the tab bar.

## Declaration

```swift
var isCustomizing: Bool { get }
```

## See Also

### Supporting user customization of tab bars

- [beginCustomizingItems(\_:)](begincustomizingitems%28__%29.md): Presents a standard interface that lets the user customize the contents of the tab bar.
- [endCustomizing(animated:)](endcustomizing%28animated_%29.md): Dismisses the standard interface used to customize the tab bar.

# customizing (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+

A Boolean value indicating whether the user is currently customizing the tab bar.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isCustomizing) BOOL customizing;
```

## See Also

### Supporting user customization of tab bars

- [beginCustomizingItems:](begincustomizingitems%28__%29.md): Presents a standard interface that lets the user customize the contents of the tab bar.
- [endCustomizingAnimated:](endcustomizing%28animated_%29.md): Dismisses the standard interface used to customize the tab bar.
