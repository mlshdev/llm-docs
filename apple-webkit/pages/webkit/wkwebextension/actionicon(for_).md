> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/actionicon(for:)](https://developer.apple.com/documentation/webkit/wkwebextension/actionicon(for:))

# actionIcon(for:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Returns the default action icon for the specified size.

## Declaration

```swift
func actionIcon(for size: CGSize) -> UIImage?
```

```swift
func actionIcon(for size: CGSize) -> NSImage?
```

## Parameters

- `size`: The size to use when looking up the action icon.

<a id="return-value"></a>

## Return Value

The action icon, or `nil` if the icon was unable to be loaded.

<a id="discussion"></a>

## Discussion

This icon serves as a default and should be used to represent the extension in contexts like action sheets or toolbars prior to the extension being loaded into an extension context. Once the extension is loaded, use the [action(for:)](../wkwebextensioncontext/action%28for_%29.md) API to get the tab-specific icon.

The returned image will be the best match for the specified size that is available in the extension’s action icon set. If no matching icon is available, the method will fall back to the extension’s icon.

## See Also

### Related Documentation

- [icon(for:)](icon%28for_%29.md): Returns the extension’s icon image for the specified size.

# actionIconForSize: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Returns the default action icon for the specified size.

## Declaration

```objectivec
- (UIImage *) actionIconForSize:(CGSize) size;
```

```objectivec
- (NSImage *) actionIconForSize:(CGSize) size;
```

## Parameters

- `size`: The size to use when looking up the action icon.

<a id="return-value"></a>

## Return Value

The action icon, or `nil` if the icon was unable to be loaded.

<a id="discussion"></a>

## Discussion

This icon serves as a default and should be used to represent the extension in contexts like action sheets or toolbars prior to the extension being loaded into an extension context. Once the extension is loaded, use the [actionForTab:](../wkwebextensioncontext/action%28for_%29.md) API to get the tab-specific icon.

The returned image will be the best match for the specified size that is available in the extension’s action icon set. If no matching icon is available, the method will fall back to the extension’s icon.

## See Also

### Related Documentation

- [iconForSize:](icon%28for_%29.md): Returns the extension’s icon image for the specified size.
