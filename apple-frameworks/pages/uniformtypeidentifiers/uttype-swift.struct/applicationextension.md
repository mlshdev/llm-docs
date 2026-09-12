> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uniformtypeidentifiers/uttype-swift.struct/applicationextension](https://developer.apple.com/documentation/uniformtypeidentifiers/uttype-swift.struct/applicationextension)

# applicationExtension

**Framework:** Uniform Type Identifiers  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A type that represents an app extension.

## Declaration

```swift
static var applicationExtension: UTType { get }
```

<a id="Discussion"></a>

## Discussion

The identifier for this type is `com.apple.application-and-system-extension`.

This type conforms to [UTTypeXPCService](../uttypexpcservice.md).

## See Also

### Apple system types

- [framework](framework.md): A type that represents an Apple framework bundle.
- [applicationBundle](applicationbundle.md): A type that represents a bundled app.
- [spotlightImporter](spotlightimporter.md): A type that represents a Spotlight metadata importer bundle.
- [quickLookGenerator](quicklookgenerator.md): A type that represents a QuickLook preview generator bundle.
- [xpcService](xpcservice.md): A type that represents an XPC service bundle.
- [systemPreferencesPane](systempreferencespane.md): A type that represents a System Preferences pane.
