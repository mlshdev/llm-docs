> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/init(imageliteralresourcename:)](https://developer.apple.com/documentation/appkit/nsimage/init(imageliteralresourcename:))

# init(imageLiteralResourceName:)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.9+

Creates an image initialized with the specified resource name.

## Declaration

```swift
@nonobjc required convenience init(imageLiteralResourceName name: String)
```

## See Also

### Creating Images by Name

- [Configuring and displaying symbol images in your UI](https://developer.apple.com/documentation/uikit/configuring-and-displaying-symbol-images-in-your-ui): Create scalable images that integrate with your app’s text, and adjust the appearance of those images dynamically.
- [init(named:)](init%28named_%29.md): Returns the image object associated with the specified name.
- [init(systemSymbolName:accessibilityDescription:)](init%28systemsymbolname_accessibilitydescription_%29.md): Creates a symbol image with the system symbol name and accessibility description you specify.
- [init(systemSymbolName:variableValue:accessibilityDescription:)](init%28systemsymbolname_variablevalue_accessibilitydescription_%29.md): Creates a symbol image with the system symbol name and variable value you specify.
- [init(symbolName:variableValue:)](init%28symbolname_variablevalue_%29.md): Creates a symbol image with the symbol name and variable value you specify.
- [init(symbolName:bundle:variableValue:)](init%28symbolname_bundle_variablevalue_%29.md): Creates a symbol image with the specified symbol name and variable value.
- [init(resource:)](init%28resource_%29.md): Initialize a `NSImage` with an image resource.
- [setName(\_:)](setname%28__%29.md): Registers the image object under the specified name.
- [name()](name%28%29.md): Returns the name associated with the image, if any.
- [NSImage.Name](name-swift.typealias.md): Named images, defined by the system or you, for use in your app.
