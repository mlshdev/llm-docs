> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/init(symbolname:bundle:variablevalue:)](https://developer.apple.com/documentation/appkit/nsimage/init(symbolname:bundle:variablevalue:))

# init(symbolName:bundle:variableValue:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 13.0+

Creates a symbol image with the specified symbol name and variable value.

## Declaration

```swift
convenience init?(symbolName name: String, bundle: Bundle?, variableValue value: Double)
```

## Parameters

- `name`: The name of the symbol image.
- `bundle`: The bundle containing the image file or asset catalog.
- `value`: The value the system uses to customize the symbol’s content, between `0` and `1`.

<a id="Discussion"></a>

## Discussion

The `value` parameter is valid for symbols that support variable rendering.

## See Also

### Creating Images by Name

- [Configuring and displaying symbol images in your UI](https://developer.apple.com/documentation/uikit/configuring-and-displaying-symbol-images-in-your-ui): Create scalable images that integrate with your app’s text, and adjust the appearance of those images dynamically.
- [init(named:)](init%28named_%29.md): Returns the image object associated with the specified name.
- [init(systemSymbolName:accessibilityDescription:)](init%28systemsymbolname_accessibilitydescription_%29.md): Creates a symbol image with the system symbol name and accessibility description you specify.
- [init(systemSymbolName:variableValue:accessibilityDescription:)](init%28systemsymbolname_variablevalue_accessibilitydescription_%29.md): Creates a symbol image with the system symbol name and variable value you specify.
- [init(symbolName:variableValue:)](init%28symbolname_variablevalue_%29.md): Creates a symbol image with the symbol name and variable value you specify.
- [init(resource:)](init%28resource_%29.md): Initialize a `NSImage` with an image resource.
- [setName(\_:)](setname%28__%29.md): Registers the image object under the specified name.
- [name()](name%28%29.md): Returns the name associated with the image, if any.
- [NSImage.Name](name-swift.typealias.md): Named images, defined by the system or you, for use in your app.
- [init(imageLiteralResourceName:)](init%28imageliteralresourcename_%29.md): Creates an image initialized with the specified resource name.

# imageWithSymbolName:bundle:variableValue: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 13.0+

Creates a symbol image with the specified symbol name and variable value.

## Declaration

```objectivec
+ (instancetype) imageWithSymbolName:(NSString *) name bundle:(NSBundle *) bundle variableValue:(double) value;
```

## Parameters

- `name`: The name of the symbol image.
- `bundle`: The bundle containing the image file or asset catalog.
- `value`: The value the system uses to customize the symbol’s content, between `0` and `1`.

<a id="Discussion"></a>

## Discussion

The `value` parameter is valid for symbols that support variable rendering.

## See Also

### Creating Images by Name

- [Configuring and displaying symbol images in your UI](https://developer.apple.com/documentation/uikit/configuring-and-displaying-symbol-images-in-your-ui): Create scalable images that integrate with your app’s text, and adjust the appearance of those images dynamically.
- [imageNamed:](init%28named_%29.md): Returns the image object associated with the specified name.
- [imageWithSystemSymbolName:accessibilityDescription:](init%28systemsymbolname_accessibilitydescription_%29.md): Creates a symbol image with the system symbol name and accessibility description you specify.
- [imageWithSystemSymbolName:variableValue:accessibilityDescription:](init%28systemsymbolname_variablevalue_accessibilitydescription_%29.md): Creates a symbol image with the system symbol name and variable value you specify.
- [imageWithSymbolName:variableValue:](init%28symbolname_variablevalue_%29.md): Creates a symbol image with the symbol name and variable value you specify.
- [setName:](setname%28__%29.md): Registers the image object under the specified name.
- [name](name%28%29.md): Returns the name associated with the image, if any.
- [NSImageName](name-swift.typealias.md): Named images, defined by the system or you, for use in your app.
