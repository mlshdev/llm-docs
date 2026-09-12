> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/catextlayertruncationmode/none](https://developer.apple.com/documentation/quartzcore/catextlayertruncationmode/none)

# none (Swift)

**Framework:** Core Animation  
**Kind:** Type Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Each line is displayed so that the text is either wrapped or clipped.

## Declaration

```swift
static let none: CATextLayerTruncationMode
```

<a id="discussion"></a>

## Discussion

If the [isWrapped](../catextlayer/iswrapped.md) property is [true](https://developer.apple.com/documentation/swift/true), the text is wrapped to the receiver’s bounds, otherwise the text is clipped to the receiver’s bounds.

## See Also

### Constants

- [start](start.md): Each line is displayed so that the end fits in the container and the missing text is indicated by some kind of ellipsis glyph.
- [end](end.md): Each line is displayed so that the beginning fits in the container and the missing text is indicated by some kind of ellipsis glyph.
- [middle](middle.md): Each line is displayed so that the beginning and end fit in the container and the missing text is indicated by some kind of ellipsis glyph in the middle.

# kCATruncationNone (Objective-C)

**Framework:** Core Animation  
**Kind:** Global Variable  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Each line is displayed so that the text is either wrapped or clipped.

## Declaration

```objectivec
extern CATextLayerTruncationMode const kCATruncationNone;
```

<a id="discussion"></a>

## Discussion

If the [wrapped](../catextlayer/iswrapped.md) property is [true](https://developer.apple.com/documentation/swift/true), the text is wrapped to the receiver’s bounds, otherwise the text is clipped to the receiver’s bounds.

## See Also

### Constants

- [kCATruncationStart](start.md): Each line is displayed so that the end fits in the container and the missing text is indicated by some kind of ellipsis glyph.
- [kCATruncationEnd](end.md): Each line is displayed so that the beginning fits in the container and the missing text is indicated by some kind of ellipsis glyph.
- [kCATruncationMiddle](middle.md): Each line is displayed so that the beginning and end fit in the container and the missing text is indicated by some kind of ellipsis glyph in the middle.
