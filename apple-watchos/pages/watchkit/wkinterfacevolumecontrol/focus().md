> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacevolumecontrol/focus()](https://developer.apple.com/documentation/watchkit/wkinterfacevolumecontrol/focus())

# focus() (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 6.0+

Sets the volume control as the focus for input from the Digital Crown.

## Declaration

```swift
func focus()
```

<a id="Discussion"></a>

## Discussion

When the volume control has the focus, the system highlights it. The user can then use the Digital Crown to increase or decrease the volume.

## See Also

### Managing Input from the Digital Crown

- [resignFocus()](resignfocus%28%29.md): Removes focus from the volume control, causing it to stop receiving input from the Digital Crown.

# focus (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 6.0+

Sets the volume control as the focus for input from the Digital Crown.

## Declaration

```objectivec
- (void) focus;
```

<a id="Discussion"></a>

## Discussion

When the volume control has the focus, the system highlights it. The user can then use the Digital Crown to increase or decrease the volume.

## See Also

### Managing Input from the Digital Crown

- [resignFocus](resignfocus%28%29.md): Removes focus from the volume control, causing it to stop receiving input from the Digital Crown.
