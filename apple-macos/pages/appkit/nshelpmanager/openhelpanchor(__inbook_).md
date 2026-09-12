> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nshelpmanager/openhelpanchor(_:inbook:)](https://developer.apple.com/documentation/appkit/nshelpmanager/openhelpanchor(_:inbook:))

# openHelpAnchor(\_:inBook:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Finds and displays the text at the given anchor location in the given book.

## Declaration

```swift
func openHelpAnchor(_ anchor: NSHelpManager.AnchorName, inBook book: NSHelpManager.BookName?)
```

## Parameters

- `anchor`: Location of the desired text.
- `book`: Help book containing the anchor. When `nil`, all installed help books are searched.

<a id="Discussion"></a>

## Discussion

To open an anchor in your bundle’s localized help book, you could use code similar to the following:

```objc
NSString *locBookName = [[NSBundle mainBundle] objectForInfoDictionaryKey: @"CFBundleHelpBookName"];
[[NSHelpManager sharedHelpManager] openHelpAnchor:@"anchor1"  inBook:locBookName];
```

This method is a wrapper for `AHRegisterHelpBook` (which is called only once to register the help book specified in the application’s main bundle) and `AHLookupAnchor`.

## See Also

### Displaying Help

- [find(\_:inBook:)](find%28__inbook_%29.md): Performs a search for the specified string in the specified book.
- [NSHelpManager.AnchorName](anchorname.md)
- [NSHelpManager.BookName](bookname.md)

# openHelpAnchor:inBook: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Finds and displays the text at the given anchor location in the given book.

## Declaration

```objectivec
- (void) openHelpAnchor:(NSHelpAnchorName) anchor inBook:(NSHelpBookName) book;
```

## Parameters

- `anchor`: Location of the desired text.
- `book`: Help book containing the anchor. When `nil`, all installed help books are searched.

<a id="Discussion"></a>

## Discussion

To open an anchor in your bundle’s localized help book, you could use code similar to the following:

```objc
NSString *locBookName = [[NSBundle mainBundle] objectForInfoDictionaryKey: @"CFBundleHelpBookName"];
[[NSHelpManager sharedHelpManager] openHelpAnchor:@"anchor1"  inBook:locBookName];
```

This method is a wrapper for `AHRegisterHelpBook` (which is called only once to register the help book specified in the application’s main bundle) and `AHLookupAnchor`.

## See Also

### Displaying Help

- [findString:inBook:](find%28__inbook_%29.md): Performs a search for the specified string in the specified book.
- [NSHelpAnchorName](anchorname.md)
- [NSHelpBookName](bookname.md)
