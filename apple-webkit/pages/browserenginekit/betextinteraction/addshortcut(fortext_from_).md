> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinteraction/addshortcut(fortext:from:)](https://developer.apple.com/documentation/browserenginekit/betextinteraction/addshortcut(fortext:from:))

# addShortcut(forText:from:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Presents UI for a person to add a text-replacement shortcut to the keyboard dictionary.

## Declaration

```swift
func addShortcut(forText text: String, from presentationRect: CGRect)
```

## See Also

### Text replacements

- [showReplacements(forText:)](showreplacements%28fortext_%29.md): Displays inline text replacements for the current selection.

# addShortcutForText:fromRect: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Presents UI for a person to add a text-replacement shortcut to the keyboard dictionary.

## Declaration

```objectivec
- (void) addShortcutForText:(NSString *) text fromRect:(CGRect) presentationRect;
```

## See Also

### Text replacements

- [showReplacementsForText:](showreplacements%28fortext_%29.md): Displays inline text replacements for the current selection.
