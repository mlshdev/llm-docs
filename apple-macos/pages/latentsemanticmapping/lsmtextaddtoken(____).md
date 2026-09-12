> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/latentsemanticmapping/lsmtextaddtoken(_:_:)](https://developer.apple.com/documentation/latentsemanticmapping/lsmtextaddtoken(_:_:))

# LSMTextAddToken(\_:\_:) (Swift)

**Framework:** Latent Semantic Mapping  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS

Adds an arbitrary binary token to the text.

## Declaration

```swift
func LSMTextAddToken(_ textref: LSMText, _ token: CFData) -> OSStatus
```

<a id="Discussion"></a>

## Discussion

The order of tokens is significant if the map uses pairs or triplets, and the count of tokens is always significant.

## See Also

### Adding to the Text

- [LSMTextAddWord(\_:\_:)](lsmtextaddword%28____%29.md): Adds a word to the text.
- [LSMTextAddWords(\_:\_:\_:\_:)](lsmtextaddwords%28________%29.md): Breaks a string into words using the specified locale, and adds the words to the text.
- [Parsing Flags](parsing-flags.md): Options for parsing words to add to the text.

# LSMTextAddToken (Objective-C)

**Framework:** Latent Semantic Mapping  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS

Adds an arbitrary binary token to the text.

## Declaration

```objectivec
OSStatus LSMTextAddToken(LSMTextRef textref, CFDataRef token);
```

<a id="Discussion"></a>

## Discussion

The order of tokens is significant if the map uses pairs or triplets, and the count of tokens is always significant.

## See Also

### Adding to the Text

- [LSMTextAddWord](lsmtextaddword%28____%29.md): Adds a word to the text.
- [LSMTextAddWords](lsmtextaddwords%28________%29.md): Breaks a string into words using the specified locale, and adds the words to the text.
- [Parsing Flags](parsing-flags.md): Options for parsing words to add to the text.
