> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextdirection](https://developer.apple.com/documentation/uikit/uitextdirection)

# UITextDirection (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The direction of the text.

## Declaration

```swift
struct UITextDirection
```

<a id="overview"></a>

## Overview

This parameter is used in methods declared by the [UITextInputTokenizer](uitextinputtokenizer.md) protocol. This general direction type subsumes constants of the [UITextStorageDirection](uitextstoragedirection.md) and [UITextLayoutDirection](uitextlayoutdirection.md) types.

## Topics

### Text direction types

- [layout(\_:)](uitextdirection/layout%28__%29.md): Specifies the direction of text layout.
- [storage(\_:)](uitextdirection/storage%28__%29.md): Specifies the direction of text storage.

### Initializers

- [init(rawValue:)](uitextdirection/init%28rawvalue_%29.md): Creates a text direction with the specified raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [UITextStorageDirection](uitextstoragedirection.md): The direction of text storage.
- [UITextLayoutDirection](uitextlayoutdirection.md): The direction of text layout.

# UITextDirection (Objective-C)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The direction of the text.

## Declaration

```objectivec
typedef NSInteger UITextDirection;
```

<a id="overview"></a>

## Overview

This parameter is used in methods declared by the [UITextInputTokenizer](uitextinputtokenizer.md) protocol. This general direction type subsumes constants of the [UITextStorageDirection](uitextstoragedirection.md) and [UITextLayoutDirection](uitextlayoutdirection.md) types.

## See Also

### Constants

- [UITextStorageDirection](uitextstoragedirection.md): The direction of text storage.
- [UITextLayoutDirection](uitextlayoutdirection.md): The direction of text layout.
