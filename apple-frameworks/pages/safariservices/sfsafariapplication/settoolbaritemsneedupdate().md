> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/safariservices/sfsafariapplication/settoolbaritemsneedupdate()

# setToolbarItemsNeedUpdate() (Swift)

**Framework:** Safari Services  
**Kind:** Type Method  
**Availability:** macOS 10.12+

Updates the enabled states and badges of toolbar items.

## Declaration

```swift
class func setToolbarItemsNeedUpdate()
```

<a id="Discussion"></a>

## Discussion

This method calls the [validateToolbarItem(in:validationHandler:)](../sfsafariextensionhandling/validatetoolbaritem%28in_validationhandler_%29.md) method on the extension’s principal object for each open window. See [SFSafariExtensionHandling](../sfsafariextensionhandling.md).

# setToolbarItemsNeedUpdate (Objective-C)

**Framework:** Safari Services  
**Kind:** Type Method  
**Availability:** macOS 10.12+

Updates the enabled states and badges of toolbar items.

## Declaration

```objectivec
+ (void) setToolbarItemsNeedUpdate;
```

<a id="Discussion"></a>

## Discussion

This method calls the [validateToolbarItemInWindow:validationHandler:](../sfsafariextensionhandling/validatetoolbaritem%28in_validationhandler_%29.md) method on the extension’s principal object for each open window. See [SFSafariExtensionHandling](../sfsafariextensionhandling.md).
