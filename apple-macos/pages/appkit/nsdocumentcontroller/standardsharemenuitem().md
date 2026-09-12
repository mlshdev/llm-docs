> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocumentcontroller/standardsharemenuitem()](https://developer.apple.com/documentation/appkit/nsdocumentcontroller/standardsharemenuitem())

# standardShareMenuItem() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

Returns a menu item that your app uses for sharing the current document.

## Declaration

```swift
func standardShareMenuItem() -> NSMenuItem
```

<a id="return-value"></a>

## Return Value

An [NSMenuItem](../nsmenuitem.md) for the Share menu.

<a id="Discussion"></a>

## Discussion

Use this method to perform custom placement of the Share menu if your [NSDocument](../nsdocument.md) subclass returns `false` for [allowsAutomaticShareMenu](allowsautomaticsharemenu.md).

## See Also

### Sharing

- [allowsAutomaticShareMenu](allowsautomaticsharemenu.md): A Boolean value that the system uses to insert a Share menu in the File menu.

# standardShareMenuItem (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

Returns a menu item that your app uses for sharing the current document.

## Declaration

```objectivec
- (NSMenuItem *) standardShareMenuItem;
```

<a id="return-value"></a>

## Return Value

An [NSMenuItem](../nsmenuitem.md) for the Share menu.

<a id="Discussion"></a>

## Discussion

Use this method to perform custom placement of the Share menu if your [NSDocument](../nsdocument.md) subclass returns `false` for [allowsAutomaticShareMenu](allowsautomaticsharemenu.md).

## See Also

### Sharing

- [allowsAutomaticShareMenu](allowsautomaticsharemenu.md): A Boolean value that the system uses to insert a Share menu in the File menu.
