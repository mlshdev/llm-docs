> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1400250-gettextencodingvariant](https://developer.apple.com/documentation/coreservices/1400250-gettextencodingvariant)

# GetTextEncodingVariant

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Returns the variant from the specified text encoding.

## Declaration

```objectivec
TextEncodingVariant GetTextEncodingVariant(TextEncoding encoding);
```

## Parameters

- `encoding`: A text encoding specification.

<a id="return_value"></a>

## Return Value

The text encodingvariant portion of the specified text encoding.

## See Also

### Obtaining Information From a Text Encoding Specification

- [GetTextEncodingBase](1399792-gettextencodingbase.md): Returns the base encoding of the specified text encoding.
- [GetTextEncodingFormat](1400318-gettextencodingformat.md): Returns the format value of the specified text encoding.
- [GetTextEncodingName](1399645-gettextencodingname.md): Returns the localized name for a specified text encoding.
- [ResolveDefaultTextEncoding](1400111-resolvedefaulttextencoding.md): Returns a text encoding specification in which any meta-valueshave been resolved to real values. Currently, this affects onlythe base encoding values packed into the text encoding specification.
