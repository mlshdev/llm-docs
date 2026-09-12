> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visualintelligence/semanticcontentdescriptor](https://developer.apple.com/documentation/visualintelligence/semanticcontentdescriptor)

# SemanticContentDescriptor

**Framework:** Visual Intelligence  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS

A type that represents a scene that visual intelligence captures, for example, a screenshot, photo, or photo and video stream.

## Declaration

```swift
struct SemanticContentDescriptor
```

## Mentioned In

- [Integrating your app with visual intelligence](integrating-your-app-with-visual-intelligence.md)

## Topics

### Accessing semantic content

- [labels](semanticcontentdescriptor/labels.md): A list of labels that visual intelligence uses to classify items onscreen or in visual intelligence camera.
- [pixelBuffer](semanticcontentdescriptor/pixelbuffer.md): The pixel buffer that visual intelligence captures.

### Protocol conformance

- [defaultResolverSpecification](semanticcontentdescriptor/defaultresolverspecification.md): A default implementation of an internal type that the App Intents framework uses to convert data values with resolvers.
- [SemanticContentDescriptor.Specification](semanticcontentdescriptor/specification.md): A type that specifies how the system resolves a semantic content descriptor.
- [SemanticContentDescriptor.ValueType](semanticcontentdescriptor/valuetype.md): A type that represents the value of a semantic content descriptor.
- [SemanticContentDescriptor.UnwrappedType](semanticcontentdescriptor/unwrappedtype.md): A type that represents the unwrapped value of a semantic content descriptor.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomLocalizedStringResourceConvertible](../foundation/customlocalizedstringresourceconvertible.md)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [DisplayRepresentable](../appintents/displayrepresentable.md)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [InstanceDisplayRepresentable](../appintents/instancedisplayrepresentable.md)
- [IntentValueConvertible](../appintents/intentvalueconvertible.md)
- [IntentValueExpressing](../appintents/intentvalueexpressing.md)
- [PersistentlyIdentifiable](../appintents/persistentlyidentifiable.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [TypeDisplayRepresentable](../appintents/typedisplayrepresentable.md)

## See Also

### Search integration

- [Integrating your app with visual intelligence](integrating-your-app-with-visual-intelligence.md): Enable people to find app content that matches their surroundings or objects onscreen with visual intelligence.
- [Adopting App Intents to support system experiences](../appintents/adopting-app-intents-to-support-system-experiences.md): Create app intents and entities so people can use your app’s content and actions across system experiences.
