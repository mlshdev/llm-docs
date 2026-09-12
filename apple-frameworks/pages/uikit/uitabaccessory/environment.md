> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabaccessory/environment](https://developer.apple.com/documentation/uikit/uitabaccessory/environment)

# UITabAccessory.Environment (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

## Declaration

```swift
enum Environment
```

## Topics

### Enumeration Cases

- [UITabAccessory.Environment.inline](environment/inline.md): The environment for when the accessory is laid out inline with the collapsed bottom tab bar.
- [UITabAccessory.Environment.none](environment/none.md): The trait collection is from a view that is not in an active tab accessory environment.
- [UITabAccessory.Environment.regular](environment/regular.md): The environment for when the accessory is laid out either:
- [UITabAccessory.Environment.unspecified](environment/unspecified.md): Indicates the absence of any information about whether or not the trait collection is from a view that is in a tab accessory.

### Initializers

- [init(rawValue:)](environment/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# UITabAccessoryEnvironment (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

## Declaration

```objectivec
enum UITabAccessoryEnvironment : NSInteger;
```

## Topics

### Enumeration Cases

- [UITabAccessoryEnvironmentInline](environment/inline.md): The environment for when the accessory is laid out inline with the collapsed bottom tab bar.
- [UITabAccessoryEnvironmentNone](environment/none.md): The trait collection is from a view that is not in an active tab accessory environment.
- [UITabAccessoryEnvironmentRegular](environment/regular.md): The environment for when the accessory is laid out either:
- [UITabAccessoryEnvironmentUnspecified](environment/unspecified.md): Indicates the absence of any information about whether or not the trait collection is from a view that is in a tab accessory.
