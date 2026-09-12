> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuielement/sizeclass](https://developer.apple.com/documentation/xcuiautomation/xcuielement/sizeclass)

# XCUIElement.SizeClass (Swift)

**Framework:** XCUIAutomation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

The user interface size classes you can inspect in a UI test.

## Declaration

```swift
enum SizeClass
```

## Topics

### Enumeration cases

- [XCUIElement.SizeClass.regular](sizeclass/regular.md): A constant that represents an element for the regular size class.
- [XCUIElement.SizeClass.compact](sizeclass/compact.md): A constant that represents an element for the compact size class.
- [XCUIElement.SizeClass.unspecified](sizeclass/unspecified.md): A constant that represents an element for the unspecified size class.

### Initializers

- [init(rawValue:)](sizeclass/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting types

- [XCUIElement.ElementType](elementtype.md): The types of UI elements that you find, inspect, and interact with in a UI test.
- [XCUIElement.AttributeName](attributename.md): A set of string constants that serve as keys for storing element attributes in a dictionary.

# XCUIUserInterfaceSizeClass (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

The user interface size classes you can inspect in a UI test.

## Declaration

```objectivec
enum XCUIUserInterfaceSizeClass : NSInteger;
```

## Topics

### Enumeration cases

- [XCUIUserInterfaceSizeClassRegular](sizeclass/regular.md): A constant that represents an element for the regular size class.
- [XCUIUserInterfaceSizeClassCompact](sizeclass/compact.md): A constant that represents an element for the compact size class.
- [XCUIUserInterfaceSizeClassUnspecified](sizeclass/unspecified.md): A constant that represents an element for the unspecified size class.

## See Also

### Supporting types

- [XCUIElementType](elementtype.md): The types of UI elements that you find, inspect, and interact with in a UI test.
- [XCUIElementAttributeName](attributename.md): A set of string constants that serve as keys for storing element attributes in a dictionary.
