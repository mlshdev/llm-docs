> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilitylayoutitem/setaccessibilityframe(_:)](https://developer.apple.com/documentation/appkit/nsaccessibilitylayoutitem/setaccessibilityframe(_:))

# setAccessibilityFrame(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the accessibility element’s frame.

## Declaration

```swift
optional func setAccessibilityFrame(_ frame: NSRect)
```

## Parameters

- `frame`: The new frame in screen coordinates.

<a id="Discussion"></a>

## Discussion

This method is the setter method for the [NSAccessibilityProtocol](../nsaccessibilityprotocol.md) protocol’s [accessibilityFrame](../nsaccessibility-c.protocol/accessibilityframe.md) property. By implementing this method, you allow accessibility clients to modify this element’s frame.

# setAccessibilityFrame: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the accessibility element’s frame.

## Declaration

```objectivec
- (void) setAccessibilityFrame:(NSRect) frame;
```

## Parameters

- `frame`: The new frame in screen coordinates.

<a id="Discussion"></a>

## Discussion

This method is the setter method for the [NSAccessibility](../nsaccessibilityprotocol.md) protocol’s [accessibilityFrame](../nsaccessibility-c.protocol/accessibilityframe.md) property. By implementing this method, you allow accessibility clients to modify this element’s frame.
