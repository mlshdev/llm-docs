> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quicklookui/qlpreviewpanel/exitfullscreenmode(options:)](https://developer.apple.com/documentation/quicklookui/qlpreviewpanel/exitfullscreenmode(options:))

# exitFullScreenMode(options:) (Swift)

**Framework:** Quick Look UI  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Instructs the panel to exit full screen mode.

## Declaration

```swift
func exitFullScreenMode(options: [AnyHashable : Any]! = [:])
```

## Parameters

- `options`: This parameter isn’t used — pass `nil`.

## See Also

### Managing Full Screen Mode

- [enterFullScreenMode(\_:withOptions:)](enterfullscreenmode%28__withoptions_%29.md): Instructs the panel to enter full screen mode.
- [isInFullScreenMode](isinfullscreenmode.md): The property that indicates whether the panel is in full screen mode.

# exitFullScreenModeWithOptions: (Objective-C)

**Framework:** Quick Look UI  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Instructs the panel to exit full screen mode.

## Declaration

```objectivec
- (void) exitFullScreenModeWithOptions:(NSDictionary *) options;
```

## Parameters

- `options`: This parameter isn’t used — pass `nil`.

## See Also

### Managing Full Screen Mode

- [enterFullScreenMode:withOptions:](enterfullscreenmode%28__withoptions_%29.md): Instructs the panel to enter full screen mode.
- [inFullScreenMode](isinfullscreenmode.md): The property that indicates whether the panel is in full screen mode.
