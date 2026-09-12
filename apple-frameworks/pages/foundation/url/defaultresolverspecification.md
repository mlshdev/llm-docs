> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/url/defaultresolverspecification](https://developer.apple.com/documentation/foundation/url/defaultresolverspecification)

# defaultResolverSpecification

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The default resolver specification that the App Intents framework uses.

## Declaration

```swift
static var defaultResolverSpecification: some ResolverSpecification { get }
```

<a id="Discussion"></a>

## Discussion

Don’t use this property directly. The App Intents framework uses it.

## See Also

### App Intents support

- [URL.Specification](specification.md): The specification type for conforming with App Intents.
- [URL.UnwrappedType](unwrappedtype.md): The core type for conforming with App Intents.
- [URL.ValueType](valuetype.md): The value type for conforming with App Intents.
