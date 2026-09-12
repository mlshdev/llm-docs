> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspreviewrepresentableactivityitem/item](https://developer.apple.com/documentation/appkit/nspreviewrepresentableactivityitem/item)

# item (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The app-specific item you want to share.

## Declaration

```swift
var item: Any { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to provide the data you want to pass to the sharing service. The item must conform to the [NSPasteboardWriting](../nspasteboardwriting.md) protocol, or be an [NSItemProvider](https://developer.apple.com/documentation/foundation/nsitemprovider) or [NSDocument](../nsdocument.md) object.

# item (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The app-specific item you want to share.

## Declaration

```objectivec
@property (strong, readonly) id item;
```

<a id="Discussion"></a>

## Discussion

Use this property to provide the data you want to pass to the sharing service. The item must conform to the [NSPasteboardWriting](../nspasteboardwriting.md) protocol, or be an [NSItemProvider](https://developer.apple.com/documentation/foundation/nsitemprovider) or [NSDocument](../nsdocument.md) object.
