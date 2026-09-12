> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuielement/attributename](https://developer.apple.com/documentation/xcuiautomation/xcuielement/attributename)

# XCUIElement.AttributeName (Swift)

**Framework:** XCUIAutomation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

A set of string constants that serve as keys for storing element attributes in a dictionary.

## Declaration

```swift
struct AttributeName
```

## Topics

### Keys

- [children](attributename/children.md): A string constant that serves as a dictionary key identifying an element’s children.
- [elementType](attributename/elementtype.md): A string constant that serves as a dictionary key identifying an element’s type.
- [enabled](attributename/enabled.md): A string constant that serves as a dictionary key identifying whether an element is enabled.
- [frame](attributename/frame.md): A string constant that serves as a dictionary key identifying an element’s frame.
- [hasFocus](attributename/hasfocus.md): A string constant that serves as a dictionary key identifying whether an element has focus.
- [horizontalSizeClass](attributename/horizontalsizeclass.md): A string constant that serves as a dictionary key identifying an element’s horizontal size class.
- [identifier](attributename/identifier.md): A string constant that serves as a dictionary key identifying an element’s identifier.
- [label](attributename/label.md): A string constant that serves as a dictionary key identifying an element’s label.
- [placeholderValue](attributename/placeholdervalue.md): A string constant that serves as a dictionary key identifying an element’s placeholder value.
- [selected](attributename/selected.md): A string constant that serves as a dictionary key identifying whether an element is selected.
- [title](attributename/title.md): A string constant that serves as a dictionary key identifying an element’s title.
- [value](attributename/value.md): A string constant that serves as a dictionary key identifying an element’s value.
- [verticalSizeClass](attributename/verticalsizeclass.md): A string constant that serves as a dictionary key identifying an element’s vertical size class.

### Initializers

- [init(rawValue:)](attributename/init%28rawvalue_%29.md): Creates an attribute name dictionary key from a string value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting types

- [XCUIElement.ElementType](elementtype.md): The types of UI elements that you find, inspect, and interact with in a UI test.
- [XCUIElement.SizeClass](sizeclass.md): The user interface size classes you can inspect in a UI test.

# XCUIElementAttributeName (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

A set of string constants that serve as keys for storing element attributes in a dictionary.

## Declaration

```objectivec
typedef NSString * XCUIElementAttributeName;
```

## Topics

### Keys

- [XCUIElementAttributeNameChildren](attributename/children.md): A string constant that serves as a dictionary key identifying an element’s children.
- [XCUIElementAttributeNameElementType](attributename/elementtype.md): A string constant that serves as a dictionary key identifying an element’s type.
- [XCUIElementAttributeNameEnabled](attributename/enabled.md): A string constant that serves as a dictionary key identifying whether an element is enabled.
- [XCUIElementAttributeNameFrame](attributename/frame.md): A string constant that serves as a dictionary key identifying an element’s frame.
- [XCUIElementAttributeNameHasFocus](attributename/hasfocus.md): A string constant that serves as a dictionary key identifying whether an element has focus.
- [XCUIElementAttributeNameHorizontalSizeClass](attributename/horizontalsizeclass.md): A string constant that serves as a dictionary key identifying an element’s horizontal size class.
- [XCUIElementAttributeNameIdentifier](attributename/identifier.md): A string constant that serves as a dictionary key identifying an element’s identifier.
- [XCUIElementAttributeNameLabel](attributename/label.md): A string constant that serves as a dictionary key identifying an element’s label.
- [XCUIElementAttributeNamePlaceholderValue](attributename/placeholdervalue.md): A string constant that serves as a dictionary key identifying an element’s placeholder value.
- [XCUIElementAttributeNameSelected](attributename/selected.md): A string constant that serves as a dictionary key identifying whether an element is selected.
- [XCUIElementAttributeNameTitle](attributename/title.md): A string constant that serves as a dictionary key identifying an element’s title.
- [XCUIElementAttributeNameValue](attributename/value.md): A string constant that serves as a dictionary key identifying an element’s value.
- [XCUIElementAttributeNameVerticalSizeClass](attributename/verticalsizeclass.md): A string constant that serves as a dictionary key identifying an element’s vertical size class.

## See Also

### Supporting types

- [XCUIElementType](elementtype.md): The types of UI elements that you find, inspect, and interact with in a UI test.
- [XCUIUserInterfaceSizeClass](sizeclass.md): The user interface size classes you can inspect in a UI test.
