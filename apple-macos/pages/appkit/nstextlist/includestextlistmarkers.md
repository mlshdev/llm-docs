> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextlist/includestextlistmarkers](https://developer.apple.com/documentation/appkit/nstextlist/includestextlistmarkers)

# includesTextListMarkers (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 26.0+

A Boolean value that indicates whether TextKit includes text list markers in the contents.

## Declaration

```swift
class var includesTextListMarkers: Bool { get }
```

<a id="discussion"></a>

## Discussion

The default value is `false`.

## See Also

### Getting list options

- [isOrdered](isordered.md)
- [listOptions](listoptions.md): Returns the list options mask value of the receiver.
- [NSTextList.Options](options.md): Values that available options for text list items.

# includesTextListMarkers (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 26.0+

A Boolean value that indicates whether TextKit includes text list markers in the contents.

## Declaration

```objectivec
@property (class, readonly) BOOL includesTextListMarkers;
```

<a id="discussion"></a>

## Discussion

The default value is `false`.

## See Also

### Getting list options

- [ordered](isordered.md)
- [listOptions](listoptions.md): Returns the list options mask value of the receiver.
- [NSTextListOptions](options.md): Values that available options for text list items.
