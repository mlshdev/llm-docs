> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutmanager/typesetterbehavior-swift.enum](https://developer.apple.com/documentation/appkit/nslayoutmanager/typesetterbehavior-swift.enum)

# NSLayoutManager.TypesetterBehavior (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants that determine the layout manager’s behavior during layout.

## Declaration

```swift
enum TypesetterBehavior
```

<a id="overview"></a>

## Overview

These constants define the behavior of `NSLayoutManager` and `NSTypesetter` when laying out lines. They are used by [typesetterBehavior](typesetterbehavior-swift.property.md) to control the compatibility level of the typesetter.

## Topics

### Behaviors

- [NSLayoutManager.TypesetterBehavior.latestBehavior](typesetterbehavior-swift.enum/latestbehavior.md): The current typesetter behavior in the current operating system.
- [NSLayoutManager.TypesetterBehavior.originalBehavior](typesetterbehavior-swift.enum/originalbehavior.md): The original typesetter behavior, as shipped with macOS 10.1 and earlier.
- [NSLayoutManager.TypesetterBehavior.behavior_10_2_WithCompatibility](typesetterbehavior-swift.enum/behavior_10_2_withcompatibility.md): The macOS 10.2 typesetting behavior that is still compatible with the original typesetter behavior.
- [NSLayoutManager.TypesetterBehavior.behavior_10_2](typesetterbehavior-swift.enum/behavior_10_2.md): The typesetter behavior introduced in macOS 10.2.
- [NSLayoutManager.TypesetterBehavior.behavior_10_3](typesetterbehavior-swift.enum/behavior_10_3.md): The typesetter behavior introduced in macOS 10.3.
- [NSLayoutManager.TypesetterBehavior.behavior_10_4](typesetterbehavior-swift.enum/behavior_10_4.md): The typesetter behavior introduced in macOS 10.4.

### Initializers

- [init(rawValue:)](typesetterbehavior-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing the typesetter

- [typesetter](typesetter.md): The current typesetter.
- [typesetterBehavior](typesetterbehavior-swift.property.md): The default typesetter behavior.
- [defaultLineHeight(for:)](defaultlineheight%28for_%29.md): Returns the default line height for a line of text that uses a specified font.
- [defaultBaselineOffset(for:)](defaultbaselineoffset%28for_%29.md): Returns the default baseline offset that the layout manager’s typesetter uses for the specified font.

# NSTypesetterBehavior (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants that determine the layout manager’s behavior during layout.

## Declaration

```objectivec
enum NSTypesetterBehavior : NSInteger;
```

<a id="overview"></a>

## Overview

These constants define the behavior of `NSLayoutManager` and `NSTypesetter` when laying out lines. They are used by [typesetterBehavior](typesetterbehavior-swift.property.md) to control the compatibility level of the typesetter.

## Topics

### Behaviors

- [NSTypesetterLatestBehavior](typesetterbehavior-swift.enum/latestbehavior.md): The current typesetter behavior in the current operating system.
- [NSTypesetterOriginalBehavior](typesetterbehavior-swift.enum/originalbehavior.md): The original typesetter behavior, as shipped with macOS 10.1 and earlier.
- [NSTypesetterBehavior_10_2_WithCompatibility](typesetterbehavior-swift.enum/behavior_10_2_withcompatibility.md): The macOS 10.2 typesetting behavior that is still compatible with the original typesetter behavior.
- [NSTypesetterBehavior_10_2](typesetterbehavior-swift.enum/behavior_10_2.md): The typesetter behavior introduced in macOS 10.2.
- [NSTypesetterBehavior_10_3](typesetterbehavior-swift.enum/behavior_10_3.md): The typesetter behavior introduced in macOS 10.3.
- [NSTypesetterBehavior_10_4](typesetterbehavior-swift.enum/behavior_10_4.md): The typesetter behavior introduced in macOS 10.4.

## See Also

### Managing the typesetter

- [typesetter](typesetter.md): The current typesetter.
- [typesetterBehavior](typesetterbehavior-swift.property.md): The default typesetter behavior.
- [defaultLineHeightForFont:](defaultlineheight%28for_%29.md): Returns the default line height for a line of text that uses a specified font.
- [defaultBaselineOffsetForFont:](defaultbaselineoffset%28for_%29.md): Returns the default baseline offset that the layout manager’s typesetter uses for the specified font.
