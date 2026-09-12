> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/registerednibsbyidentifier](https://developer.apple.com/documentation/appkit/nstableview/registerednibsbyidentifier)

# registeredNibsByIdentifier (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

The dictionary of all registered nib files for view-based table view identifiers.

## Declaration

```swift
var registeredNibsByIdentifier: [NSUserInterfaceItemIdentifier : NSNib]? { get }
```

<a id="Discussion"></a>

## Discussion

Each key in the dictionary is the identifier string (given by [NSUserInterfaceItemIdentifier](../nsuserinterfaceitemidentifier.md)) used to register the nib file in the [register(\_:forIdentifier:)](register%28__foridentifier_%29.md) method. The value of each key is the corresponding [NSNib](../nsnib.md) object.

> **Note**

>  This method applies only to [NSView](../nsview.md)-based table views.

## See Also

### NSView-Based Table Nib File Registration

- [register(\_:forIdentifier:)](register%28__foridentifier_%29.md): Registers a NIB for the specified identifier, so that view-based table views can use it to instantiate views.

# registeredNibsByIdentifier (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

The dictionary of all registered nib files for view-based table view identifiers.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSDictionary<NSString *,NSNib *> * registeredNibsByIdentifier;
```

<a id="Discussion"></a>

## Discussion

Each key in the dictionary is the identifier string (given by [NSUserInterfaceItemIdentifier](../nsuserinterfaceitemidentifier.md)) used to register the nib file in the [registerNib:forIdentifier:](register%28__foridentifier_%29.md) method. The value of each key is the corresponding [NSNib](../nsnib.md) object.

> **Note**

>  This method applies only to [NSView](../nsview.md)-based table views.

## See Also

### NSView-Based Table Nib File Registration

- [registerNib:forIdentifier:](register%28__foridentifier_%29.md): Registers a NIB for the specified identifier, so that view-based table views can use it to instantiate views.
