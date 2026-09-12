> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacevolumecontrol/resignfocus()](https://developer.apple.com/documentation/watchkit/wkinterfacevolumecontrol/resignfocus())

# resignFocus() (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 6.0+

Removes focus from the volume control, causing it to stop receiving input from the Digital Crown.

## Declaration

```swift
func resignFocus()
```

<a id="Discussion"></a>

## Discussion

If the volume control is inside a scrollable view, resigning the focus enables scrolling with the Digital Crown.

## See Also

### Managing Input from the Digital Crown

- [focus()](focus%28%29.md): Sets the volume control as the focus for input from the Digital Crown.

# resignFocus (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 6.0+

Removes focus from the volume control, causing it to stop receiving input from the Digital Crown.

## Declaration

```objectivec
- (void) resignFocus;
```

<a id="Discussion"></a>

## Discussion

If the volume control is inside a scrollable view, resigning the focus enables scrolling with the Digital Crown.

## See Also

### Managing Input from the Digital Crown

- [focus](focus%28%29.md): Sets the volume control as the focus for input from the Digital Crown.
