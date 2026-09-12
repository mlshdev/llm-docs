> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/action/icon(for:)](https://developer.apple.com/documentation/webkit/wkwebextension/action/icon(for:))

# icon(for:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Returns the action icon for the specified size.

## Declaration

```swift
func icon(for size: CGSize) -> UIImage?
```

```swift
func icon(for size: CGSize) -> NSImage?
```

## Parameters

- `size`: The size to use when looking up the action icon.

<a id="return-value"></a>

## Return Value

The action icon, or `nil` if the icon was unable to be loaded.

<a id="discussion"></a>

## Discussion

This icon should represent the extension in action sheets or toolbars. The returned image will be the best match for the specified size that is available in the extension’s action icon set. If no matching icon is available, the method will fall back to the extension’s icon.

# iconForSize: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Returns the action icon for the specified size.

## Declaration

```objectivec
- (UIImage *) iconForSize:(CGSize) size;
```

```objectivec
- (NSImage *) iconForSize:(CGSize) size;
```

## Parameters

- `size`: The size to use when looking up the action icon.

<a id="return-value"></a>

## Return Value

The action icon, or `nil` if the icon was unable to be loaded.

<a id="discussion"></a>

## Discussion

This icon should represent the extension in action sheets or toolbars. The returned image will be the best match for the specified size that is available in the extension’s action icon set. If no matching icon is available, the method will fall back to the extension’s icon.
