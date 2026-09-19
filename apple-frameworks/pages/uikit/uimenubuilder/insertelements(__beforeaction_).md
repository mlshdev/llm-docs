> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uimenubuilder/insertelements(_:beforeaction:)

# insertElements(\_:beforeAction:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

Insert elements before an identified action.

## Declaration

```swift
func insertElements(_ insertedElements: [UIMenuElement], beforeAction siblingIdentifier: UIAction.Identifier)
```

## Parameters

- `insertedElements`: The elements to insert.
- `siblingIdentifier`: The identifier of the action to insert elements before.

# insertElements:beforeActionForIdentifier: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

Insert elements before an identified action.

## Declaration

```objectivec
- (void) insertElements:(NSArray<UIMenuElement *> *) insertedElements beforeActionForIdentifier:(UIActionIdentifier) siblingIdentifier;
```

## Parameters

- `insertedElements`: The elements to insert.
- `siblingIdentifier`: The identifier of the action to insert elements before.
