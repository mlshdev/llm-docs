> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uimenubuilder/insertelements(_:beforemenu:)

# insertElements(\_:beforeMenu:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

Insert elements before an identified menu.

## Declaration

```swift
func insertElements(_ insertedElements: [UIMenuElement], beforeMenu siblingIdentifier: UIMenu.Identifier)
```

## Parameters

- `insertedElements`: The elements to insert.
- `siblingIdentifier`: The identifier of the menu to insert elements before.

# insertElements:beforeMenuForIdentifier: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

Insert elements before an identified menu.

## Declaration

```objectivec
- (void) insertElements:(NSArray<UIMenuElement *> *) insertedElements beforeMenuForIdentifier:(UIMenuIdentifier) siblingIdentifier;
```

## Parameters

- `insertedElements`: The elements to insert.
- `siblingIdentifier`: The identifier of the menu to insert elements before.
