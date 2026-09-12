> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/sessionpropertykey](https://developer.apple.com/documentation/foundationmodels/sessionpropertykey)

# SessionPropertyKey

**Framework:** Foundation Models  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A protocol for defining a custom session property key.

## Declaration

```swift
protocol SessionPropertyKey : SendableMetatype
```

## Topics

### Inspecting a property key

- [defaultValue](sessionpropertykey/defaultvalue.md): The default value of the property key.
- [Value](sessionpropertykey/value.md): The type of value that represent this property key.

## Relationships

### Inherits From

- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Custom session properties

- [LanguageModelSession.SessionProperty](languagemodelsession/sessionproperty.md): A property wrapper that provides access to properties from within profiles, dynamic instructions, and tools.
- [SessionPropertyValues](sessionpropertyvalues.md): A container for property values.
- [SessionPropertyEntry()](sessionpropertyentry%28%29.md)
