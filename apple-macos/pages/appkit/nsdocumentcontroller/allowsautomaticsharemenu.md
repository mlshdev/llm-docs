> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocumentcontroller/allowsautomaticsharemenu](https://developer.apple.com/documentation/appkit/nsdocumentcontroller/allowsautomaticsharemenu)

# allowsAutomaticShareMenu (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

A Boolean value that the system uses to insert a Share menu in the File menu.

## Declaration

```swift
var allowsAutomaticShareMenu: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If your application has any [NSDocument](../nsdocument.md) subclasses with [autosavesInPlace](../nsdocument/autosavesinplace.md) set to `true`, the system defaults `allowsAutomaticShareMenu` to `true`. To disable the Share menu entirely, or to enable custom placement or construction of the share menu, override this property to return `false` in your app.

The system may not insert a Share menu if `allowsAutomaticShareMenu` is `true` and [NSDocumentController](../nsdocumentcontroller.md) detects that the app has a Share menu.

## See Also

### Sharing

- [standardShareMenuItem()](standardsharemenuitem%28%29.md): Returns a menu item that your app uses for sharing the current document.

# allowsAutomaticShareMenu (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

A Boolean value that the system uses to insert a Share menu in the File menu.

## Declaration

```objectivec
@property (readonly) BOOL allowsAutomaticShareMenu;
```

<a id="Discussion"></a>

## Discussion

If your application has any [NSDocument](../nsdocument.md) subclasses with [autosavesInPlace](../nsdocument/autosavesinplace.md) set to `true`, the system defaults `allowsAutomaticShareMenu` to `true`. To disable the Share menu entirely, or to enable custom placement or construction of the share menu, override this property to return `false` in your app.

The system may not insert a Share menu if `allowsAutomaticShareMenu` is `true` and [NSDocumentController](../nsdocumentcontroller.md) detects that the app has a Share menu.

## See Also

### Sharing

- [standardShareMenuItem](standardsharemenuitem%28%29.md): Returns a menu item that your app uses for sharing the current document.
