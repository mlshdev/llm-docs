> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacepicker/focus()](https://developer.apple.com/documentation/watchkit/wkinterfacepicker/focus())

# focus() (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Configures the picker to receive input from the Digital Crown.

## Declaration

```swift
func focus()
```

<a id="Discussion"></a>

## Discussion

The picker adds custom highlighting when it is configured as the target of crown input. For an interface that contains multiple pickers, you might use this method to switch the focus at an appropriate time. Because scrolling in an interface controller causes the picker to lose focus, you can also use this method to select the picker again later.

## See Also

### Managing Input from the Digital Crown

- [resignFocus()](resignfocus%28%29.md): Removes focus from the picker, causing it to stop receiving input from the Digital Crown.

# focus (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Configures the picker to receive input from the Digital Crown.

## Declaration

```objectivec
- (void) focus;
```

<a id="Discussion"></a>

## Discussion

The picker adds custom highlighting when it is configured as the target of crown input. For an interface that contains multiple pickers, you might use this method to switch the focus at an appropriate time. Because scrolling in an interface controller causes the picker to lose focus, you can also use this method to select the picker again later.

## See Also

### Managing Input from the Digital Crown

- [resignFocus](resignfocus%28%29.md): Removes focus from the picker, causing it to stop receiving input from the Digital Crown.
