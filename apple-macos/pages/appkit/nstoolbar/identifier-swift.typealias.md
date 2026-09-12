> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbar/identifier-swift.typealias](https://developer.apple.com/documentation/appkit/nstoolbar/identifier-swift.typealias)

# NSToolbar.Identifier (Swift)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS

A string value that you use to differentiate your app’s toolbars.

## Declaration

```swift
typealias Identifier = String
```

<a id="Discussion"></a>

## Discussion

Multiple toolbar objects can have the same identifier. If two or more toolbars share an identifier, the system synchronizes the state of the toolbars and displays the same items for each one.

## See Also

### Getting the toolbar’s identity

- [identifier](identifier-swift.property.md): The value you use to identify the toolbar in your app.

# NSToolbarIdentifier (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.1+ · macOS

A string value that you use to differentiate your app’s toolbars.

## Declaration

```objectivec
typedef NSString * NSToolbarIdentifier;
```

<a id="Discussion"></a>

## Discussion

Multiple toolbar objects can have the same identifier. If two or more toolbars share an identifier, the system synchronizes the state of the toolbars and displays the same items for each one.

## See Also

### Getting the toolbar’s identity

- [identifier](identifier-swift.property.md): The value you use to identify the toolbar in your app.
