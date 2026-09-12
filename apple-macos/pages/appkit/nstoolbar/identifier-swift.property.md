> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbar/identifier-swift.property](https://developer.apple.com/documentation/appkit/nstoolbar/identifier-swift.property)

# identifier (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS

The value you use to identify the toolbar in your app.

## Declaration

```swift
var identifier: NSToolbar.Identifier { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to distinguish toolbars in your app. Multiple toolbars can share the same identifier, and you might do so for windows that display similar content. When two or more toolbars share an identifier, they synchronize their state and display the same set of items.

If the toolbar autosaves its contents, the system associates the configuration data with this identifier.

## See Also

### Related Documentation

- [autosavesConfiguration](autosavesconfiguration.md): A Boolean value that indicates whether the toolbar autosaves its configuration.

### Getting the toolbar’s identity

- [NSToolbar.Identifier](identifier-swift.typealias.md): A string value that you use to differentiate your app’s toolbars.

# identifier (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ · macOS

The value you use to identify the toolbar in your app.

## Declaration

```objectivec
@property (copy, readonly) NSToolbarIdentifier identifier;
```

<a id="Discussion"></a>

## Discussion

Use this property to distinguish toolbars in your app. Multiple toolbars can share the same identifier, and you might do so for windows that display similar content. When two or more toolbars share an identifier, they synchronize their state and display the same set of items.

If the toolbar autosaves its contents, the system associates the configuration data with this identifier.

## See Also

### Related Documentation

- [autosavesConfiguration](autosavesconfiguration.md): A Boolean value that indicates whether the toolbar autosaves its configuration.

### Getting the toolbar’s identity

- [NSToolbarIdentifier](identifier-swift.typealias.md): A string value that you use to differentiate your app’s toolbars.
