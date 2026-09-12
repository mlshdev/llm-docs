> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimenubuilder/insertelements(_:atstartofmenu:)](https://developer.apple.com/documentation/uikit/uimenubuilder/insertelements(_:atstartofmenu:))

# insertElements(\_:atStartOfMenu:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

Insert elements at the start of an identified parent menu.

## Declaration

```swift
func insertElements(_ childElements: [UIMenuElement], atStartOfMenu parentIdentifier: UIMenu.Identifier)
```

## Parameters

- `childElements`: The child elements to insert.
- `parentIdentifier`: The identifier of the parent menu to insert elements at the start of.

# insertElements:atStartOfMenuForIdentifier: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

Insert elements at the start of an identified parent menu.

## Declaration

```objectivec
- (void) insertElements:(NSArray<UIMenuElement *> *) childElements atStartOfMenuForIdentifier:(UIMenuIdentifier) parentIdentifier;
```

## Parameters

- `childElements`: The child elements to insert.
- `parentIdentifier`: The identifier of the parent menu to insert elements at the start of.
