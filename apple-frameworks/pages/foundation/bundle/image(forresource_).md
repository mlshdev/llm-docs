> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/bundle/image(forresource:)](https://developer.apple.com/documentation/foundation/bundle/image(forresource:))

# image(forResource:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Returns an `NSImage` instance associated with the specified name, which can be backed by multiple files representing different resolution versions of the image.

## Declaration

```swift
func image(forResource name: NSImage.Name) -> NSImage?
```

## Parameters

- `name`: The filename of the image resource file. Including a filename extension is optional.

<a id="return-value"></a>

## Return Value

The `NSImage` object associated with the specified name, or `nil` if no file is found.

<a id="Discussion"></a>

## Discussion

This method accommodates Apple’s naming conventions for high-resolution versions of the image. For example, if your bundle contains files named `button.png`, `button@2x.png`, and `button.pdf` then `imageForResource:@"button"` returns an `NSImage` object backed by all three files. Each time the `NSImage` object is drawn, it selects the representation best for the drawing context.

Images requested using this method whose name ends in the word `Template` are automatically marked as template images.

This method does not look up images based on [setName(\_:)](https://developer.apple.com/documentation/appkit/nsimage/setname%28_:%29) or get named system images. Use [init(named:)](https://developer.apple.com/documentation/appkit/nsimage/init%28named:%29) for that purpose.

This method does not cache its search results.

## See Also

### Related Documentation

- [init(named:)](https://developer.apple.com/documentation/appkit/nsimage/init%28named:%29): Returns the image object associated with the specified name.

### Finding image resources

- [urlForImageResource(\_:)](urlforimageresource%28__%29.md): Returns the location of the specified image resource as an NSURL.
- [pathForImageResource(\_:)](pathforimageresource%28__%29.md): Returns the location of the specified image resource file.

# imageForResource: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Returns an `NSImage` instance associated with the specified name, which can be backed by multiple files representing different resolution versions of the image.

## Declaration

```objectivec
- (NSImage *) imageForResource:(NSImageName) name;
```

## Parameters

- `name`: The filename of the image resource file. Including a filename extension is optional.

<a id="return-value"></a>

## Return Value

The `NSImage` object associated with the specified name, or `nil` if no file is found.

<a id="Discussion"></a>

## Discussion

This method accommodates Apple’s naming conventions for high-resolution versions of the image. For example, if your bundle contains files named `button.png`, `button@2x.png`, and `button.pdf` then `imageForResource:@"button"` returns an `NSImage` object backed by all three files. Each time the `NSImage` object is drawn, it selects the representation best for the drawing context.

Images requested using this method whose name ends in the word `Template` are automatically marked as template images.

This method does not look up images based on [setName:](https://developer.apple.com/documentation/appkit/nsimage/setname%28_:%29) or get named system images. Use [imageNamed:](https://developer.apple.com/documentation/appkit/nsimage/init%28named:%29) for that purpose.

This method does not cache its search results.

## See Also

### Related Documentation

- [imageNamed:](https://developer.apple.com/documentation/appkit/nsimage/init%28named:%29): Returns the image object associated with the specified name.

### Finding image resources

- [URLForImageResource:](urlforimageresource%28__%29.md): Returns the location of the specified image resource as an NSURL.
- [pathForImageResource:](pathforimageresource%28__%29.md): Returns the location of the specified image resource file.
