> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstouchbar/isvisible](https://developer.apple.com/documentation/appkit/nstouchbar/isvisible)

# isVisible (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+

A Boolean value that Indicates whether the Touch Bar is eligible for display.

## Declaration

```swift
var isVisible: Bool { get }
```

<a id="Discussion"></a>

## Discussion

A value of [true](https://developer.apple.com/documentation/swift/true) indicates that the bar is attached to an eligible bar provider and that its items are displayable, assuming adequate geometric space. A *bar provider* is an object that conforms to the [NSTouchBarProvider](../nstouchbarprovider.md) protocol. For more on bar providers, read [Bar objects](../nstouchbar.md#Bar-objects).

This property is key–value observable.

## See Also

### Observing bar status

- [itemIdentifiers](itemidentifiers.md): The list of identifiers for the current items in the Touch Bar.
- [item(forIdentifier:)](item%28foridentifier_%29.md): Returns the Touch Bar item that corresponds to a given identifier.

# visible (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ · macOS 10.12.2+

A Boolean value that Indicates whether the Touch Bar is eligible for display.

## Declaration

```objectivec
@property (readonly, getter=isVisible) BOOL visible;
```

<a id="Discussion"></a>

## Discussion

A value of [true](https://developer.apple.com/documentation/swift/true) indicates that the bar is attached to an eligible bar provider and that its items are displayable, assuming adequate geometric space. A *bar provider* is an object that conforms to the [NSTouchBarProvider](../nstouchbarprovider.md) protocol. For more on bar providers, read [Bar objects](../nstouchbar.md#Bar-objects).

This property is key–value observable.

## See Also

### Observing bar status

- [itemIdentifiers](itemidentifiers.md): The list of identifiers for the current items in the Touch Bar.
- [itemForIdentifier:](item%28foridentifier_%29.md): Returns the Touch Bar item that corresponds to a given identifier.
