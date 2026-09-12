> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/setname(_:)](https://developer.apple.com/documentation/appkit/nsimage/setname(_:))

# setName(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Registers the image object under the specified name.

## Declaration

```swift
func setName(_ string: NSImage.Name?) -> Bool
```

## Parameters

- `string`: The name to associate with the receiver. Specify `nil` if you want to remove the image from the image cache.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver was successfully registered with the given name; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If the receiver is already registered under a different name, this method unregisters the other name. If a different image is already registered under the name specified in `aString`, this method does nothing and returns [false](https://developer.apple.com/documentation/swift/false).

When naming an image using this method, it is convention not to include filename extensions in the names you specify. That way, you can easily distinguish between images you have named explicitly and those you want to load from the app’s bundle. For information about the rules used to search for images, and for information about the ownership policy of named images, see the [init(named:)](init%28named_%29.md) method.

## See Also

### Creating Images by Name

- [Configuring and displaying symbol images in your UI](https://developer.apple.com/documentation/uikit/configuring-and-displaying-symbol-images-in-your-ui): Create scalable images that integrate with your app’s text, and adjust the appearance of those images dynamically.
- [init(named:)](init%28named_%29.md): Returns the image object associated with the specified name.
- [init(systemSymbolName:accessibilityDescription:)](init%28systemsymbolname_accessibilitydescription_%29.md): Creates a symbol image with the system symbol name and accessibility description you specify.
- [init(systemSymbolName:variableValue:accessibilityDescription:)](init%28systemsymbolname_variablevalue_accessibilitydescription_%29.md): Creates a symbol image with the system symbol name and variable value you specify.
- [init(symbolName:variableValue:)](init%28symbolname_variablevalue_%29.md): Creates a symbol image with the symbol name and variable value you specify.
- [init(symbolName:bundle:variableValue:)](init%28symbolname_bundle_variablevalue_%29.md): Creates a symbol image with the specified symbol name and variable value.
- [init(resource:)](init%28resource_%29.md): Initialize a `NSImage` with an image resource.
- [name()](name%28%29.md): Returns the name associated with the image, if any.
- [NSImage.Name](name-swift.typealias.md): Named images, defined by the system or you, for use in your app.
- [init(imageLiteralResourceName:)](init%28imageliteralresourcename_%29.md): Creates an image initialized with the specified resource name.

# setName: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Registers the image object under the specified name.

## Declaration

```objectivec
- (BOOL) setName:(NSImageName) string;
```

## Parameters

- `string`: The name to associate with the receiver. Specify `nil` if you want to remove the image from the image cache.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver was successfully registered with the given name; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If the receiver is already registered under a different name, this method unregisters the other name. If a different image is already registered under the name specified in `aString`, this method does nothing and returns [false](https://developer.apple.com/documentation/swift/false).

When naming an image using this method, it is convention not to include filename extensions in the names you specify. That way, you can easily distinguish between images you have named explicitly and those you want to load from the app’s bundle. For information about the rules used to search for images, and for information about the ownership policy of named images, see the [imageNamed:](init%28named_%29.md) method.

## See Also

### Creating Images by Name

- [Configuring and displaying symbol images in your UI](https://developer.apple.com/documentation/uikit/configuring-and-displaying-symbol-images-in-your-ui): Create scalable images that integrate with your app’s text, and adjust the appearance of those images dynamically.
- [imageNamed:](init%28named_%29.md): Returns the image object associated with the specified name.
- [imageWithSystemSymbolName:accessibilityDescription:](init%28systemsymbolname_accessibilitydescription_%29.md): Creates a symbol image with the system symbol name and accessibility description you specify.
- [imageWithSystemSymbolName:variableValue:accessibilityDescription:](init%28systemsymbolname_variablevalue_accessibilitydescription_%29.md): Creates a symbol image with the system symbol name and variable value you specify.
- [imageWithSymbolName:variableValue:](init%28symbolname_variablevalue_%29.md): Creates a symbol image with the symbol name and variable value you specify.
- [imageWithSymbolName:bundle:variableValue:](init%28symbolname_bundle_variablevalue_%29.md): Creates a symbol image with the specified symbol name and variable value.
- [name](name%28%29.md): Returns the name associated with the image, if any.
- [NSImageName](name-swift.typealias.md): Named images, defined by the system or you, for use in your app.
