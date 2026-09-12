> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributescopes](https://developer.apple.com/documentation/foundation/attributescopes)

# AttributeScopes

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Collections of attributes that system frameworks define.

## Declaration

```swift
@frozen enum AttributeScopes
```

<a id="overview"></a>

## Overview

Attribute scopes define groups of attributes appropriate for use with attributed strings in a certain domain. Attribute definitions contain a name, value type, and encode/decode methods to support serialization.

For example, the [AttributeScopes.FoundationAttributes](attributescopes/foundationattributes.md) scope provides an attribute type for a link to a URL, [AttributeScopes.FoundationAttributes.LinkAttribute](attributescopes/foundationattributes/linkattribute.md), along with a property to access this type, [link](attributescopes/foundationattributes/link.md). Because [AttributeScopes.FoundationAttributes](attributescopes/foundationattributes.md) implements [AttributeDynamicLookup](attributedynamiclookup.md), you can access the link attribute by name, as this example shows:

```swift
var attrStr = AttributedString("Example site")
attrStr.link = URL(string: "http://example.com")
```

## Topics

### Foundation-Defined Attributes

- [foundation](attributescopes/foundation.md): A property for accessing the attribute scopes that Foundation defines.
- [AttributeScopes.FoundationAttributes](attributescopes/foundationattributes.md): Attribute scopes that Foundation defines.

### SwiftUI-Defined Attributes

- [swiftUI](attributescopes/swiftui.md): A property for accessing the attribute scopes that SwiftUI defines.
- [AttributeScopes.SwiftUIAttributes](attributescopes/swiftuiattributes.md): Attribute scopes that SwiftUI defines.

### UIKit-Defined Attributes

- [uiKit](attributescopes/uikit.md): A property for accessing the attribute scopes that UIKit defines.
- [AttributeScopes.UIKitAttributes](attributescopes/uikitattributes.md): Attribute scopes that UIKit defines.

### AppKit-Defined Attributes

- [appKit](attributescopes/appkit.md): A property for accessing the attribute scopes that AppKit defines.
- [AttributeScopes.AppKitAttributes](attributescopes/appkitattributes.md): Attribute scopes that AppKit defines.

### Translation-Defined Attributes

- [translation](attributescopes/translation.md): Provides access to translation-related attributes.
- [AttributeScopes.TranslationAttributes](attributescopes/translationattributes.md): A scope that defines translation-specific properties on attributed strings.

### Structures

- [AttributeScopes.AccessibilityAttributes](attributescopes/accessibilityattributes.md)
- [AttributeScopes.CoreTextAttributes](attributescopes/coretextattributes.md): A namespace for attributes defined by CoreText.
- [AttributeScopes.SpeechAttributes](attributescopes/speechattributes.md)

### Instance Properties

- [accessibility](attributescopes/accessibility.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)

## See Also

### Using Defined Attributes

- [AttributeDynamicLookup](attributedynamiclookup.md): A type to support dynamic member lookup of attributes and containers.
- [ScopedAttributeContainer](scopedattributecontainer.md): An attribute container that allows dynamic member lookup of its contents within the specified attribute scope.
