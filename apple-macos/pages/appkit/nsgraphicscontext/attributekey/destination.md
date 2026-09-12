> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgraphicscontext/attributekey/destination](https://developer.apple.com/documentation/appkit/nsgraphicscontext/attributekey/destination)

# destination (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Specifies the destination.

## Declaration

```swift
static let destination: NSGraphicsContext.AttributeKey
```

<a id="Discussion"></a>

## Discussion

This value can be an instance of [NSWindow](../../nswindow.md) or [NSBitmapImageRep](../../nsbitmapimagerep.md) when creating a graphics context.

When determining the type of a graphics context, this value can be an [NSMutableData](https://developer.apple.com/documentation/foundation/nsmutabledata), [NSString](https://developer.apple.com/documentation/foundation/nsstring), or [NSURL](https://developer.apple.com/documentation/foundation/nsurl) object.

## See Also

### Attribute Keys

- [representationFormat](representationformat.md): Specifies the destination file format.

# NSGraphicsContextDestinationAttributeName (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

Specifies the destination.

## Declaration

```objectivec
extern NSGraphicsContextAttributeKey NSGraphicsContextDestinationAttributeName;
```

<a id="Discussion"></a>

## Discussion

This value can be an instance of [NSWindow](../../nswindow.md) or [NSBitmapImageRep](../../nsbitmapimagerep.md) when creating a graphics context.

When determining the type of a graphics context, this value can be an [NSMutableData](https://developer.apple.com/documentation/foundation/nsmutabledata), [NSString](https://developer.apple.com/documentation/foundation/nsstring), or [NSURL](https://developer.apple.com/documentation/foundation/nsurl) object.

## See Also

### Attribute Keys

- [NSGraphicsContextRepresentationFormatAttributeName](representationformat.md): Specifies the destination file format.
