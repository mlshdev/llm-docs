> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/collectionbehavior-swift.struct/managed](https://developer.apple.com/documentation/appkit/nswindow/collectionbehavior-swift.struct/managed)

# managed (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.6+

The window participates in Mission Control and Spaces.

## Declaration

```swift
static var managed: NSWindow.CollectionBehavior { get }
```

<a id="Discussion"></a>

## Discussion

This is the default behavior if `windowLevel` is equal to [normal](../level-swift.struct/normal.md).

## See Also

### Spaces and Mission Control

- [transient](transient.md): The window floats in Spaces and hides in Mission Control.

# NSWindowCollectionBehaviorManaged (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.6+

The window participates in Mission Control and Spaces.

## Declaration

```objectivec
NSWindowCollectionBehaviorManaged
```

<a id="Discussion"></a>

## Discussion

This is the default behavior if `windowLevel` is equal to [NSNormalWindowLevel](../level-swift.struct/normal.md).

## See Also

### Spaces and Mission Control

- [NSWindowCollectionBehaviorTransient](transient.md): The window floats in Spaces and hides in Mission Control.
