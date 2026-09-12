> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspellchecker/menu(for:string:options:atlocation:in:)](https://developer.apple.com/documentation/appkit/nsspellchecker/menu(for:string:options:atlocation:in:))

# menu(for:string:options:atLocation:in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Provides a menu containing contextual menu items suitable for certain kinds of detected results.

## Declaration

```swift
func menu(for result: NSTextCheckingResult, string checkedString: String, options: [NSSpellChecker.OptionKey : Any]? = nil, atLocation location: NSPoint, in view: NSView) -> NSMenu?
```

## Parameters

- `result`: The [NSTextCheckingResult](https://developer.apple.com/documentation/foundation/nstextcheckingresult) instance for the checked string.
- `checkedString`: The string that has been checked.
- `options`: The options dictionary allows clients to pass in information associated with the document. See `Spell Checking Option Dictionary Keys` for possible key-value pairs.
- `location`: The location, in the view’s coordinate system, to display the menu.
- `view`: The view object over which to display the contextual menu.

<a id="return-value"></a>

## Return Value

A menu suitable for displaying as a contextual menu, or adding to another contextual menu as a submenu.

## See Also

### Data Detector Interaction

- [NSSpellChecker.OptionKey](optionkey.md): Constants that define options for text checking.

# menuForResult:string:options:atLocation:inView: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Provides a menu containing contextual menu items suitable for certain kinds of detected results.

## Declaration

```objectivec
- (NSMenu *) menuForResult:(NSTextCheckingResult *) result string:(NSString *) checkedString options:(NSDictionary<NSString *,id> *) options atLocation:(NSPoint) location inView:(NSView *) view;
```

## Parameters

- `result`: The [NSTextCheckingResult](https://developer.apple.com/documentation/foundation/nstextcheckingresult) instance for the checked string.
- `checkedString`: The string that has been checked.
- `options`: The options dictionary allows clients to pass in information associated with the document. See `Spell Checking Option Dictionary Keys` for possible key-value pairs.
- `location`: The location, in the view’s coordinate system, to display the menu.
- `view`: The view object over which to display the contextual menu.

<a id="return-value"></a>

## Return Value

A menu suitable for displaying as a contextual menu, or adding to another contextual menu as a submenu.

## See Also

### Data Detector Interaction

- [NSTextCheckingOptionKey](optionkey.md): Constants that define options for text checking.
