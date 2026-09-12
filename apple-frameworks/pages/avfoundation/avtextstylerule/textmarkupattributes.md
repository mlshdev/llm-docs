> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avtextstylerule/textmarkupattributes](https://developer.apple.com/documentation/avfoundation/avtextstylerule/textmarkupattributes)

# textMarkupAttributes (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A dictionary of text style attributes to apply to the text.

## Declaration

```swift
var textMarkupAttributes: [String : Any] { get }
```

<a id="Discussion"></a>

## Discussion

The supported keys for this dictionary are defined in `CMTextMarkup.h`.

## See Also

### Accessing the style attributes

- [textSelector](textselector.md): A string that identifies the text the style attributes apply to.

# textMarkupAttributes (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A dictionary of text style attributes to apply to the text.

## Declaration

```objectivec
@property (nonatomic, readonly) NSDictionary<NSString *,id> * textMarkupAttributes;
```

<a id="Discussion"></a>

## Discussion

The supported keys for this dictionary are defined in `CMTextMarkup.h`.

## See Also

### Accessing the style attributes

- [textSelector](textselector.md): A string that identifies the text the style attributes apply to.
