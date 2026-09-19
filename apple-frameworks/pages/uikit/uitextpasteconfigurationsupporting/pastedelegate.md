> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uitextpasteconfigurationsupporting/pastedelegate

# pasteDelegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The text paste delegate that handles pasting and dropping of text, using item providers.

## Declaration

```swift
weak var pasteDelegate: (any UITextPasteDelegate)? { get set }
```

# pasteDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The text paste delegate that handles pasting and dropping of text, using item providers.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<UITextPasteDelegate> pasteDelegate;
```
