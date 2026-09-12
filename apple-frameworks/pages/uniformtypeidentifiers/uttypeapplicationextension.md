> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uniformtypeidentifiers/uttypeapplicationextension](https://developer.apple.com/documentation/uniformtypeidentifiers/uttypeapplicationextension)

# UTTypeApplicationExtension

**Interface language:** Objective-C

**Framework:** Uniform Type Identifiers  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A type that represents an app extension.

## Declaration

```objectivec
extern UTType * const UTTypeApplicationExtension;
```

<a id="Discussion"></a>

## Discussion

The identifier for this type is `com.apple.application-and-system-extension`.

This type conforms to [UTTypeXPCService](uttypexpcservice.md).

## See Also

### Apple system types

- [UTTypeFramework](uttypeframework.md): A type that represents an Apple framework bundle.
- [UTTypeApplicationBundle](uttypeapplicationbundle.md): A type that represents a bundled app.
- [UTTypeSpotlightImporter](uttypespotlightimporter.md): A type that represents a Spotlight metadata importer bundle.
- [UTTypeQuickLookGenerator](uttypequicklookgenerator.md): A type that represents a QuickLook preview generator bundle.
- [UTTypeXPCService](uttypexpcservice.md): A type that represents an XPC service bundle.
- [UTTypeSystemPreferencesPane](uttypesystempreferencespane.md): A type that represents a System Preferences pane.
