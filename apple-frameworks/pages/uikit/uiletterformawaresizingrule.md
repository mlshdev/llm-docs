> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiletterformawaresizingrule](https://developer.apple.com/documentation/uikit/uiletterformawaresizingrule)

# UILetterformAwareSizingRule (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

Constants that specify typographic bounds-sizing behavior to handle text in fonts with oversize characters.

## Declaration

```swift
enum UILetterformAwareSizingRule
```

<a id="overview"></a>

## Overview

For more information on typographic bounds sizing behavior, see [UILetterformAwareAdjusting](uiletterformawareadjusting.md).

## Topics

### Setting bounds-sizing behavior

- [UILetterformAwareSizingRule.oversize](uiletterformawaresizingrule/oversize.md): Bounds-sizing behavior that displays oversize characters fully but may negatively impact typographic alignment.
- [UILetterformAwareSizingRule.typographic](uiletterformawaresizingrule/typographic.md): Standard typographic bounds-sizing behavior, which may clip oversize characters.

### Initializers

- [init(rawValue:)](uiletterformawaresizingrule/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Specifying text-sizing behavior

- [sizingRule](uiletterformawareadjusting/sizingrule.md): The typographic bounds-sizing behavior that handles text with fonts that contain oversize characters.

# UILetterformAwareSizingRule (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

Constants that specify typographic bounds-sizing behavior to handle text in fonts with oversize characters.

## Declaration

```objectivec
enum UILetterformAwareSizingRule : NSInteger;
```

<a id="overview"></a>

## Overview

For more information on typographic bounds sizing behavior, see [UILetterformAwareAdjusting](uiletterformawareadjusting.md).

## Topics

### Setting bounds-sizing behavior

- [UILetterformAwareSizingRuleOversize](uiletterformawaresizingrule/oversize.md): Bounds-sizing behavior that displays oversize characters fully but may negatively impact typographic alignment.
- [UILetterformAwareSizingRuleTypographic](uiletterformawaresizingrule/typographic.md): Standard typographic bounds-sizing behavior, which may clip oversize characters.

## See Also

### Specifying text-sizing behavior

- [sizingRule](uiletterformawareadjusting/sizingrule.md): The typographic bounds-sizing behavior that handles text with fonts that contain oversize characters.
