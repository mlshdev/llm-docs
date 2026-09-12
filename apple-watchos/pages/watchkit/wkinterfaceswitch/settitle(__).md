> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfaceswitch/settitle(_:)](https://developer.apple.com/documentation/watchkit/wkinterfaceswitch/settitle(_:))

# setTitle(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Sets the switch title to the specified string.

## Declaration

```swift
func setTitle(_ title: String?)
```

## Parameters

- `title`: The text to be displayed in the switch. Specifying `nil` clears the current text from the switch.

<a id="Discussion"></a>

## Discussion

This method looks for a localized version of title in your WatchKit extension’s `Localizable.strings` file. If it finds one, it uses the localized string for the switch title. If it does not find a localized version of the string, it uses the value in the title directly. The text replaces the previous text set for the switch.

The switch title is drawn using the font and styling information from your storyboard.

## See Also

### Related Documentation

- [App Programming Guide for watchOS](https://developer.apple.com/library/archive/documentation/General/Conceptual/WatchKitProgrammingGuide/index.html#//apple_ref/doc/uid/TP40014969)

### Setting the Switch’s Title

- [setAttributedTitle(\_:)](setattributedtitle%28__%29.md): Sets the switch title to the specified attributed string.

# setTitle: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Sets the switch title to the specified string.

## Declaration

```objectivec
- (void) setTitle:(NSString *) title;
```

## Parameters

- `title`: The text to be displayed in the switch. Specifying `nil` clears the current text from the switch.

<a id="Discussion"></a>

## Discussion

This method looks for a localized version of title in your WatchKit extension’s `Localizable.strings` file. If it finds one, it uses the localized string for the switch title. If it does not find a localized version of the string, it uses the value in the title directly. The text replaces the previous text set for the switch.

The switch title is drawn using the font and styling information from your storyboard.

## See Also

### Related Documentation

- [App Programming Guide for watchOS](https://developer.apple.com/library/archive/documentation/General/Conceptual/WatchKitProgrammingGuide/index.html#//apple_ref/doc/uid/TP40014969)

### Setting the Switch’s Title

- [setAttributedTitle:](setattributedtitle%28__%29.md): Sets the switch title to the specified attributed string.
