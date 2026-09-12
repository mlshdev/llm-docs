> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinput/insert(_:replacementrange:)](https://developer.apple.com/documentation/uikit/uitextinput/insert(_:replacementrange:))

# insert(\_:replacementRange:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

Inserts an adaptive image into the text at the specifed location.

## Declaration

```swift
optional func insert(_ adaptiveImageGlyph: NSAdaptiveImageGlyph, replacementRange: UITextRange)
```

## Parameters

- `adaptiveImageGlyph`: The adaptive image to add to the text.
- `replacementRange`: The text range at which to insert the image.

## See Also

### Supporting adaptive images

- [supportsAdaptiveImageGlyph](supportsadaptiveimageglyph.md): A Boolean value that indicates whether the document supports adaptive images in the input.

# insertAdaptiveImageGlyph:replacementRange: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

Inserts an adaptive image into the text at the specifed location.

## Declaration

```objectivec
- (void) insertAdaptiveImageGlyph:(NSAdaptiveImageGlyph *) adaptiveImageGlyph replacementRange:(UITextRange *) replacementRange;
```

## Parameters

- `adaptiveImageGlyph`: The adaptive image to add to the text.
- `replacementRange`: The text range at which to insert the image.

## See Also

### Supporting adaptive images

- [supportsAdaptiveImageGlyph](supportsadaptiveimageglyph.md): A Boolean value that indicates whether the document supports adaptive images in the input.
