> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/domelement/image()](https://developer.apple.com/documentation/webkit/domelement/image())

# image() (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns an image associated with the receiver.

## Declaration

```swift
func image() -> NSImage!
```

<a id="Discussion"></a>

## Discussion

Returns an `NSImage` for the receiver if it is a `DOMHTMLImageElement` object—a `DOMHTMLObjectElement` object with an image loaded or a `DOMHTMLInputElement` object of type image. Returns `nil` if there is an error loading the image or the element does not contain an image.

# image (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns an image associated with the receiver.

## Declaration

```objectivec
- (NSImage *) image;
```

<a id="Discussion"></a>

## Discussion

Returns an `NSImage` for the receiver if it is a `DOMHTMLImageElement` object—a `DOMHTMLObjectElement` object with an image loaded or a `DOMHTMLInputElement` object of type image. Returns `nil` if there is an error loading the image or the element does not contain an image.
