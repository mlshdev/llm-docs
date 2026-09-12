> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/init(systemsymbolname:variablevalue:accessibilitydescription:)](https://developer.apple.com/documentation/appkit/nsimage/init(systemsymbolname:variablevalue:accessibilitydescription:))

# init(systemSymbolName:variableValue:accessibilityDescription:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 13.0+

Creates a symbol image with the system symbol name and variable value you specify.

## Declaration

```swift
convenience init?(systemSymbolName name: String, variableValue value: Double, accessibilityDescription description: String?)
```

## Parameters

- `name`: The name of the system symbol image.
- `value`: The value the system uses to customize the symbol’s content, between `0` and `1`.
- `description`: The accessibility description for the symbol image, if any.

<a id="Discussion"></a>

## Discussion

The `value` parameter is valid for symbols that support variable rendering.

To look up the names of system symbol images, download the SF Symbols app from [Apple Design Resources](https://developer.apple.com/design/resources/).

## See Also

### Creating Images by Name

- [Configuring and displaying symbol images in your UI](https://developer.apple.com/documentation/uikit/configuring-and-displaying-symbol-images-in-your-ui): Create scalable images that integrate with your app’s text, and adjust the appearance of those images dynamically.
- [init(named:)](init%28named_%29.md): Returns the image object associated with the specified name.
- [init(systemSymbolName:accessibilityDescription:)](init%28systemsymbolname_accessibilitydescription_%29.md): Creates a symbol image with the system symbol name and accessibility description you specify.
- [init(symbolName:variableValue:)](init%28symbolname_variablevalue_%29.md): Creates a symbol image with the symbol name and variable value you specify.
- [init(symbolName:bundle:variableValue:)](init%28symbolname_bundle_variablevalue_%29.md): Creates a symbol image with the specified symbol name and variable value.
- [init(resource:)](init%28resource_%29.md): Initialize a `NSImage` with an image resource.
- [setName(\_:)](setname%28__%29.md): Registers the image object under the specified name.
- [name()](name%28%29.md): Returns the name associated with the image, if any.
- [NSImage.Name](name-swift.typealias.md): Named images, defined by the system or you, for use in your app.
- [init(imageLiteralResourceName:)](init%28imageliteralresourcename_%29.md): Creates an image initialized with the specified resource name.

# imageWithSystemSymbolName:variableValue:accessibilityDescription: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 13.0+

Creates a symbol image with the system symbol name and variable value you specify.

## Declaration

```objectivec
+ (instancetype) imageWithSystemSymbolName:(NSString *) name variableValue:(double) value accessibilityDescription:(NSString *) description;
```

## Parameters

- `name`: The name of the system symbol image.
- `value`: The value the system uses to customize the symbol’s content, between `0` and `1`.
- `description`: The accessibility description for the symbol image, if any.

<a id="Discussion"></a>

## Discussion

The `value` parameter is valid for symbols that support variable rendering.

To look up the names of system symbol images, download the SF Symbols app from [Apple Design Resources](https://developer.apple.com/design/resources/).

## See Also

### Creating Images by Name

- [Configuring and displaying symbol images in your UI](https://developer.apple.com/documentation/uikit/configuring-and-displaying-symbol-images-in-your-ui): Create scalable images that integrate with your app’s text, and adjust the appearance of those images dynamically.
- [imageNamed:](init%28named_%29.md): Returns the image object associated with the specified name.
- [imageWithSystemSymbolName:accessibilityDescription:](init%28systemsymbolname_accessibilitydescription_%29.md): Creates a symbol image with the system symbol name and accessibility description you specify.
- [imageWithSymbolName:variableValue:](init%28symbolname_variablevalue_%29.md): Creates a symbol image with the symbol name and variable value you specify.
- [imageWithSymbolName:bundle:variableValue:](init%28symbolname_bundle_variablevalue_%29.md): Creates a symbol image with the specified symbol name and variable value.
- [setName:](setname%28__%29.md): Registers the image object under the specified name.
- [name](name%28%29.md): Returns the name associated with the image, if any.
- [NSImageName](name-swift.typealias.md): Named images, defined by the system or you, for use in your app.
