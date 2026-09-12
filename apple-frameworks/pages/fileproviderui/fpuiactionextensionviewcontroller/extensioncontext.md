> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileproviderui/fpuiactionextensionviewcontroller/extensioncontext](https://developer.apple.com/documentation/fileproviderui/fpuiactionextensionviewcontroller/extensioncontext)

# extensionContext (Swift)

**Framework:** File Provider UI  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.15+ · visionOS 1.0+

The extension context provided by the host app.

## Declaration

```swift
var extensionContext: FPUIActionExtensionContext { get }
```

## See Also

### Working with Actions

- [prepare(forAction:itemIdentifiers:)](prepare%28foraction_itemidentifiers_%29.md): Performs any necessary setup or configuration for the specified action.
- [prepare(forError:)](prepare%28forerror_%29.md): Performs any necessary setup or configuration when an authentication error occurs.
- [FPUIActionExtensionContext](../fpuiactionextensioncontext.md): An extension context provided to File Provider UI extensions.

# extensionContext (Objective-C)

**Framework:** File Provider UI  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.15+ · visionOS 1.0+

The extension context provided by the host app.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) FPUIActionExtensionContext * extensionContext;
```

## See Also

### Working with Actions

- [prepareForActionWithIdentifier:itemIdentifiers:](prepare%28foraction_itemidentifiers_%29.md): Performs any necessary setup or configuration for the specified action.
- [prepareForError:](prepare%28forerror_%29.md): Performs any necessary setup or configuration when an authentication error occurs.
- [FPUIActionExtensionContext](../fpuiactionextensioncontext.md): An extension context provided to File Provider UI extensions.
