> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/allowedinputsourcelocales](https://developer.apple.com/documentation/appkit/nstextview/allowedinputsourcelocales)

# allowedInputSourceLocales (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

An array of locale identifiers representing input sources that are allowed to be enabled when the receiver has the keyboard focus.

## Declaration

```swift
var allowedInputSourceLocales: [String]? { get set }
```

<a id="Discussion"></a>

## Discussion

You can use the meta-locale identifier, [NSAllRomanInputSourcesLocaleIdentifier](../nsallromaninputsourceslocaleidentifier.md), to specify input sources that are limited for Roman script editing.

## See Also

### Inserting text

- [insertText(\_:)](inserttext%28__%29.md): Deprecated. Inserts `aString` into the receiver’s text at the insertion point if there is one, otherwise replacing the selection.

# allowedInputSourceLocales (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

An array of locale identifiers representing input sources that are allowed to be enabled when the receiver has the keyboard focus.

## Declaration

```objectivec
@property (copy, nullable) NSArray<NSString *> * allowedInputSourceLocales;
```

<a id="Discussion"></a>

## Discussion

You can use the meta-locale identifier, [NSAllRomanInputSourcesLocaleIdentifier](../nsallromaninputsourceslocaleidentifier.md), to specify input sources that are limited for Roman script editing.

## See Also

### Inserting text

- [insertText:](inserttext%28__%29.md): Deprecated. Inserts `aString` into the receiver’s text at the insertion point if there is one, otherwise replacing the selection.
