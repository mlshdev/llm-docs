> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimenubuilder/replace(menu:with:)-8mwou](https://developer.apple.com/documentation/uikit/uimenubuilder/replace(menu:with:)-8mwou)

# replace(menu:with:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

Replace an identified menu with menu elements.

## Declaration

```swift
func replace(menu replacedIdentifier: UIMenu.Identifier, with replacementElements: [UIMenuElement])
```

## Parameters

- `replacedIdentifier`: The identifier of the menu to be replaced.
- `replacementElements`: The replacement elements.

# replaceMenuForIdentifier:withElements: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

Replace an identified menu with menu elements.

## Declaration

```objectivec
- (void) replaceMenuForIdentifier:(UIMenuIdentifier) replacedIdentifier withElements:(NSArray<UIMenuElement *> *) replacementElements;
```

## Parameters

- `replacedIdentifier`: The identifier of the menu to be replaced.
- `replacementElements`: The replacement elements.
