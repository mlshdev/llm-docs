> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quicklookui/qlpreviewpanel/enterfullscreenmode(_:withoptions:)](https://developer.apple.com/documentation/quicklookui/qlpreviewpanel/enterfullscreenmode(_:withoptions:))

# enterFullScreenMode(\_:withOptions:) (Swift)

**Framework:** Quick Look UI  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Instructs the panel to enter full screen mode.

## Declaration

```swift
func enterFullScreenMode(_ screen: NSScreen!, withOptions options: [AnyHashable : Any]! = [:]) -> Bool
```

## Parameters

- `screen`: This parameter isn’t currently used—pass `nil`.
- `options`: This parameter isn’t currently used—pass `nil`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the panel was able to enter full screen mode; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If the panel isn’t onscreen, the panel goes directly to full screen mode.

The panel chooses the appropriate screen depending on where the panel is or, if entering fullscreen directly, where the panel zooms from.

## See Also

### Managing Full Screen Mode

- [exitFullScreenMode(options:)](exitfullscreenmode%28options_%29.md): Instructs the panel to exit full screen mode.
- [isInFullScreenMode](isinfullscreenmode.md): The property that indicates whether the panel is in full screen mode.

# enterFullScreenMode:withOptions: (Objective-C)

**Framework:** Quick Look UI  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Instructs the panel to enter full screen mode.

## Declaration

```objectivec
- (BOOL) enterFullScreenMode:(NSScreen *) screen withOptions:(NSDictionary *) options;
```

## Parameters

- `screen`: This parameter isn’t currently used—pass `nil`.
- `options`: This parameter isn’t currently used—pass `nil`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the panel was able to enter full screen mode; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If the panel isn’t onscreen, the panel goes directly to full screen mode.

The panel chooses the appropriate screen depending on where the panel is or, if entering fullscreen directly, where the panel zooms from.

## See Also

### Managing Full Screen Mode

- [exitFullScreenModeWithOptions:](exitfullscreenmode%28options_%29.md): Instructs the panel to exit full screen mode.
- [inFullScreenMode](isinfullscreenmode.md): The property that indicates whether the panel is in full screen mode.
