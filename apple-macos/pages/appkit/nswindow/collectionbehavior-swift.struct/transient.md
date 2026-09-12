> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/collectionbehavior-swift.struct/transient](https://developer.apple.com/documentation/appkit/nswindow/collectionbehavior-swift.struct/transient)

# transient (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.6+

The window floats in Spaces and hides in Mission Control.

## Declaration

```swift
static var transient: NSWindow.CollectionBehavior { get }
```

<a id="Discussion"></a>

## Discussion

This is the default behavior if `windowLevel` isn’t equal to [normal](../level-swift.struct/normal.md).

## See Also

### Spaces and Mission Control

- [managed](managed.md): The window participates in Mission Control and Spaces.

# NSWindowCollectionBehaviorTransient (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.6+

The window floats in Spaces and hides in Mission Control.

## Declaration

```objectivec
NSWindowCollectionBehaviorTransient
```

<a id="Discussion"></a>

## Discussion

This is the default behavior if `windowLevel` isn’t equal to [NSNormalWindowLevel](../level-swift.struct/normal.md).

## See Also

### Spaces and Mission Control

- [NSWindowCollectionBehaviorManaged](managed.md): The window participates in Mission Control and Spaces.
