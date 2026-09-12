> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelsession/sessionproperty](https://developer.apple.com/documentation/foundationmodels/languagemodelsession/sessionproperty)

# LanguageModelSession.SessionProperty

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A property wrapper that provides access to properties from within profiles,  dynamic instructions, and tools.

## Declaration

```swift
@propertyWrapper struct SessionProperty<Value>
```

## Mentioned In

- [Composing dynamic sessions with instructions and profiles](../composing-dynamic-sessions-with-instructions-and-profiles.md)

<a id="overview"></a>

## Overview

Use this to access properties across a language model session, like to access the session history:

```swift
// Get a reference to the session history.
@SessionProperty(\.history)
var history
```

To create a custom session property, use [SessionPropertyEntry()](../sessionpropertyentry%28%29.md) to define a custom key that you access with [LanguageModelSession.SessionProperty](sessionproperty.md).

## Topics

### Creating a session property

- [init(\_:)](sessionproperty/init%28__%29.md): Creates a session property with the specified key path.

### Accessing the property value

- [wrappedValue](sessionproperty/wrappedvalue.md): The wrapped value of this property wrapper.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Custom session properties

- [SessionPropertyKey](../sessionpropertykey.md): A protocol for defining a custom session property key.
- [SessionPropertyValues](../sessionpropertyvalues.md): A container for property values.
- [SessionPropertyEntry()](../sessionpropertyentry%28%29.md)
