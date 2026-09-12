> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/latentsemanticmapping/lsmtextaddword(_:_:)](https://developer.apple.com/documentation/latentsemanticmapping/lsmtextaddword(_:_:))

# LSMTextAddWord(\_:\_:) (Swift)

**Framework:** Latent Semantic Mapping  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS

Adds a word to the text.

## Declaration

```swift
func LSMTextAddWord(_ textref: LSMText, _ word: CFString) -> OSStatus
```

<a id="Discussion"></a>

## Discussion

The order of words is significant if the map uses pairs or triplets, and the count of words is always significant.

## See Also

### Adding to the Text

- [LSMTextAddToken(\_:\_:)](lsmtextaddtoken%28____%29.md): Adds an arbitrary binary token to the text.
- [LSMTextAddWords(\_:\_:\_:\_:)](lsmtextaddwords%28________%29.md): Breaks a string into words using the specified locale, and adds the words to the text.
- [Parsing Flags](parsing-flags.md): Options for parsing words to add to the text.

# LSMTextAddWord (Objective-C)

**Framework:** Latent Semantic Mapping  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS

Adds a word to the text.

## Declaration

```objectivec
OSStatus LSMTextAddWord(LSMTextRef textref, CFStringRef word);
```

<a id="Discussion"></a>

## Discussion

The order of words is significant if the map uses pairs or triplets, and the count of words is always significant.

## See Also

### Adding to the Text

- [LSMTextAddToken](lsmtextaddtoken%28____%29.md): Adds an arbitrary binary token to the text.
- [LSMTextAddWords](lsmtextaddwords%28________%29.md): Breaks a string into words using the specified locale, and adds the words to the text.
- [Parsing Flags](parsing-flags.md): Options for parsing words to add to the text.
