> Snapshot-pinned source payload for Apple watchOS snapshot-2bb3946a9b15; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/watchkit/wkinterfacepicker/resignfocus()

# resignFocus() (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Removes focus from the picker, causing it to stop receiving input from the Digital Crown.

## Declaration

```swift
func resignFocus()
```

<a id="Discussion"></a>

## Discussion

When no picker has focus, input from the Digital Crown is once again used to scroll the contents of the screen.

## See Also

### Managing Input from the Digital Crown

- [focus()](focus%28%29.md): Configures the picker to receive input from the Digital Crown.

# resignFocus (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Removes focus from the picker, causing it to stop receiving input from the Digital Crown.

## Declaration

```objectivec
- (void) resignFocus;
```

<a id="Discussion"></a>

## Discussion

When no picker has focus, input from the Digital Crown is once again used to scroll the contents of the screen.

## See Also

### Managing Input from the Digital Crown

- [focus](focus%28%29.md): Configures the picker to receive input from the Digital Crown.
