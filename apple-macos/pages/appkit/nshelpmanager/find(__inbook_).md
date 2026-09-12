> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nshelpmanager/find(_:inbook:)](https://developer.apple.com/documentation/appkit/nshelpmanager/find(_:inbook:))

# find(\_:inBook:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Performs a search for the specified string in the specified book.

## Declaration

```swift
func find(_ query: String, inBook book: NSHelpManager.BookName?)
```

## Parameters

- `query`: String to search for.
- `book`: Localized help book to search. When `nil`, all installed help books are searched.

<a id="Discussion"></a>

## Discussion

To search for a string in your bundle’s localized help book, you could use code similar to the following:

```objc
NSString *locBookName = [[NSBundle mainBundle] objectForInfoDictionaryKey: @"CFBundleHelpBookName"];
[[NSHelpManager sharedHelpManager] findString:@"Hello"  inBook:locBookName];
```

This is a wrapper for `AHRegisterHelpBook` (which is called only once to register the help book specified in the application’s main bundle) and `AHSearch`.

## See Also

### Displaying Help

- [openHelpAnchor(\_:inBook:)](openhelpanchor%28__inbook_%29.md): Finds and displays the text at the given anchor location in the given book.
- [NSHelpManager.AnchorName](anchorname.md)
- [NSHelpManager.BookName](bookname.md)

# findString:inBook: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Performs a search for the specified string in the specified book.

## Declaration

```objectivec
- (void) findString:(NSString *) query inBook:(NSHelpBookName) book;
```

## Parameters

- `query`: String to search for.
- `book`: Localized help book to search. When `nil`, all installed help books are searched.

<a id="Discussion"></a>

## Discussion

To search for a string in your bundle’s localized help book, you could use code similar to the following:

```objc
NSString *locBookName = [[NSBundle mainBundle] objectForInfoDictionaryKey: @"CFBundleHelpBookName"];
[[NSHelpManager sharedHelpManager] findString:@"Hello"  inBook:locBookName];
```

This is a wrapper for `AHRegisterHelpBook` (which is called only once to register the help book specified in the application’s main bundle) and `AHSearch`.

## See Also

### Displaying Help

- [openHelpAnchor:inBook:](openhelpanchor%28__inbook_%29.md): Finds and displays the text at the given anchor location in the given book.
- [NSHelpAnchorName](anchorname.md)
- [NSHelpBookName](bookname.md)
