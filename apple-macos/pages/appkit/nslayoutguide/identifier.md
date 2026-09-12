> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutguide/identifier](https://developer.apple.com/documentation/appkit/nslayoutguide/identifier)

# identifier (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

A string used to identify the layout guide.

## Declaration

```swift
var identifier: NSUserInterfaceItemIdentifier { get set }
```

<a id="Discussion"></a>

## Discussion

By default, the `identifier` property is `nil`. You can assign a string to help identify this guide. This string appears as part of the guide’s description when the guide is printed to the console. You can also use the identifier to find a particular layout guide from among the guides owned by a view.

Identifiers starting with “NS” or “UI” are reserved by the system. The system may assign these identifiers to the guides it creates.

## See Also

### Working With Layout Guides

- [frame](frame.md): The layout guide’s frame in its owning view’s coordinate system.
- [owningView](owningview.md): The view that owns this layout guide.

# identifier (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

A string used to identify the layout guide.

## Declaration

```objectivec
@property (copy) NSUserInterfaceItemIdentifier identifier;
```

<a id="Discussion"></a>

## Discussion

By default, the `identifier` property is `nil`. You can assign a string to help identify this guide. This string appears as part of the guide’s description when the guide is printed to the console. You can also use the identifier to find a particular layout guide from among the guides owned by a view.

Identifiers starting with “NS” or “UI” are reserved by the system. The system may assign these identifiers to the guides it creates.

## See Also

### Working With Layout Guides

- [frame](frame.md): The layout guide’s frame in its owning view’s coordinate system.
- [owningView](owningview.md): The view that owns this layout guide.
