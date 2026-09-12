> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicolor/prominence-swift.enum](https://developer.apple.com/documentation/uikit/uicolor/prominence-swift.enum)

# UIColor.Prominence (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

A type that indicates the prominence of a color in the interface.

## Declaration

```swift
enum Prominence
```

<a id="overview"></a>

## Overview

Interface elements, such as text labels, can have a different level of prominence in the UI. For example, a title label appears more prominently than a subtitle or caption. When you specify a label’s color, you can pass one of the [UIColor.Prominence](prominence-swift.enum.md) constants to [withProminence(\_:)](withprominence%28__%29.md) to communicate how prominently to display that color in the UI.

The following code creates a label with a secondary, vibrant red color:

```swift
let label = UILabel()
label.preferredVibrancy = .automatic
label.textColor = .systemRed.withProminence(.secondary) 
```

## Topics

### Constants

- [UIColor.Prominence.primary](prominence-swift.enum/primary.md): A color with a primary prominence, the most prominent in the interface.
- [UIColor.Prominence.secondary](prominence-swift.enum/secondary.md): A color with a secondary prominence.
- [UIColor.Prominence.tertiary](prominence-swift.enum/tertiary.md): A color with a tertiary prominence.
- [UIColor.Prominence.quaternary](prominence-swift.enum/quaternary.md): A color with a quaternary prominence, the least prominent in the interface.

### Initializers

- [init(rawValue:)](prominence-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Working with color prominence

- [prominence](prominence-swift.property.md)
- [withProminence(\_:)](withprominence%28__%29.md): Returns the version of the current color that results from applying the specified prominence.

# UIColorProminence (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

A type that indicates the prominence of a color in the interface.

## Declaration

```objectivec
enum UIColorProminence : NSInteger;
```

<a id="overview"></a>

## Overview

Interface elements, such as text labels, can have a different level of prominence in the UI. For example, a title label appears more prominently than a subtitle or caption. When you specify a label’s color, you can pass one of the [UIColorProminence](prominence-swift.enum.md) constants to [colorWithProminence:](withprominence%28__%29.md) to communicate how prominently to display that color in the UI.

The following code creates a label with a secondary, vibrant red color:

```swift
let label = UILabel()
label.preferredVibrancy = .automatic
label.textColor = .systemRed.withProminence(.secondary) 
```

## Topics

### Constants

- [UIColorProminencePrimary](prominence-swift.enum/primary.md): A color with a primary prominence, the most prominent in the interface.
- [UIColorProminenceSecondary](prominence-swift.enum/secondary.md): A color with a secondary prominence.
- [UIColorProminenceTertiary](prominence-swift.enum/tertiary.md): A color with a tertiary prominence.
- [UIColorProminenceQuaternary](prominence-swift.enum/quaternary.md): A color with a quaternary prominence, the least prominent in the interface.

## See Also

### Working with color prominence

- [prominence](prominence-swift.property.md)
- [colorWithProminence:](withprominence%28__%29.md): Returns the version of the current color that results from applying the specified prominence.
