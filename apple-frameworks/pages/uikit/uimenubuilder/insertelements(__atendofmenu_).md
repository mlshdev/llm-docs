> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uimenubuilder/insertelements(_:atendofmenu:)

# insertElements(\_:atEndOfMenu:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

Insert elements at the end of an identified parent menu.

## Declaration

```swift
func insertElements(_ childElements: [UIMenuElement], atEndOfMenu parentIdentifier: UIMenu.Identifier)
```

## Parameters

- `childElements`: The child elements to insert.
- `parentIdentifier`: The identifier of the parent menu to insert elements at the end of.

# insertElements:atEndOfMenuForIdentifier: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

Insert elements at the end of an identified parent menu.

## Declaration

```objectivec
- (void) insertElements:(NSArray<UIMenuElement *> *) childElements atEndOfMenuForIdentifier:(UIMenuIdentifier) parentIdentifier;
```

## Parameters

- `childElements`: The child elements to insert.
- `parentIdentifier`: The identifier of the parent menu to insert elements at the end of.
