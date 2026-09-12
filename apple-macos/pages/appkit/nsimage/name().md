> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/name()](https://developer.apple.com/documentation/appkit/nsimage/name())

# name() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the name associated with the image, if any.

## Declaration

```swift
func name() -> NSImage.Name?
```

<a id="return-value"></a>

## Return Value

The name associated with the image, or `nil` if it has no associated name.

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
- [NSImage.Name](name-swift.typealias.md): Named images, defined by the system or you, for use in your app.
- [init(imageLiteralResourceName:)](init%28imageliteralresourcename_%29.md): Creates an image initialized with the specified resource name.

# name (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the name associated with the image, if any.

## Declaration

```objectivec
- (NSImageName) name;
```

<a id="return-value"></a>

## Return Value

The name associated with the image, or `nil` if it has no associated name.

## See Also

### Creating Images by Name

- [Configuring and displaying symbol images in your UI](https://developer.apple.com/documentation/uikit/configuring-and-displaying-symbol-images-in-your-ui): Create scalable images that integrate with your app’s text, and adjust the appearance of those images dynamically.
- [imageNamed:](init%28named_%29.md): Returns the image object associated with the specified name.
- [imageWithSystemSymbolName:accessibilityDescription:](init%28systemsymbolname_accessibilitydescription_%29.md): Creates a symbol image with the system symbol name and accessibility description you specify.
- [imageWithSystemSymbolName:variableValue:accessibilityDescription:](init%28systemsymbolname_variablevalue_accessibilitydescription_%29.md): Creates a symbol image with the system symbol name and variable value you specify.
- [imageWithSymbolName:variableValue:](init%28symbolname_variablevalue_%29.md): Creates a symbol image with the symbol name and variable value you specify.
- [imageWithSymbolName:bundle:variableValue:](init%28symbolname_bundle_variablevalue_%29.md): Creates a symbol image with the specified symbol name and variable value.
- [setName:](setname%28__%29.md): Registers the image object under the specified name.
- [NSImageName](name-swift.typealias.md): Named images, defined by the system or you, for use in your app.
