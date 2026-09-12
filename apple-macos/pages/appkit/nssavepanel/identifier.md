> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssavepanel/identifier](https://developer.apple.com/documentation/appkit/nssavepanel/identifier)

# identifier (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Sets and returns the identifier.

## Declaration

```swift
var identifier: NSUserInterfaceItemIdentifier? { get set }
```

<a id="discussion"></a>

## Discussion

The panel’s current state such as the root directory and the current directory are saved and restored relative to the identifier.

> **Note**

> When the identifier is changed, the properties that depend on the identifier are updated from user defaults. Properties that have a null value in user defaults are not changed (and keep their existing value).

> **Note**

> Can only be set during the configuration phase.

# identifier (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Sets and returns the identifier.

## Declaration

```objectivec
@property (copy, nullable) NSUserInterfaceItemIdentifier identifier;
```

<a id="discussion"></a>

## Discussion

The panel’s current state such as the root directory and the current directory are saved and restored relative to the identifier.

> **Note**

> When the identifier is changed, the properties that depend on the identifier are updated from user defaults. Properties that have a null value in user defaults are not changed (and keep their existing value).

> **Note**

> Can only be set during the configuration phase.
