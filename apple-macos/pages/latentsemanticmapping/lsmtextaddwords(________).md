> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/latentsemanticmapping/lsmtextaddwords(_:_:_:_:)](https://developer.apple.com/documentation/latentsemanticmapping/lsmtextaddwords(_:_:_:_:))

# LSMTextAddWords(\_:\_:\_:\_:) (Swift)

**Framework:** Latent Semantic Mapping  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS

Breaks a string into words using the specified locale, and adds the words to the text.

## Declaration

```swift
func LSMTextAddWords(_ textref: LSMText, _ words: CFString, _ locale: CFLocale?, _ flags: CFOptionFlags) -> OSStatus
```

## See Also

### Adding to the Text

- [LSMTextAddToken(\_:\_:)](lsmtextaddtoken%28____%29.md): Adds an arbitrary binary token to the text.
- [LSMTextAddWord(\_:\_:)](lsmtextaddword%28____%29.md): Adds a word to the text.
- [Parsing Flags](parsing-flags.md): Options for parsing words to add to the text.

# LSMTextAddWords (Objective-C)

**Framework:** Latent Semantic Mapping  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS

Breaks a string into words using the specified locale, and adds the words to the text.

## Declaration

```objectivec
OSStatus LSMTextAddWords(LSMTextRef textref, CFStringRef words, CFLocaleRef locale, CFOptionFlags flags);
```

## See Also

### Adding to the Text

- [LSMTextAddToken](lsmtextaddtoken%28____%29.md): Adds an arbitrary binary token to the text.
- [LSMTextAddWord](lsmtextaddword%28____%29.md): Adds a word to the text.
- [Parsing Flags](parsing-flags.md): Options for parsing words to add to the text.
