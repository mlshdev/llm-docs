> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1400111-resolvedefaulttextencoding](https://developer.apple.com/documentation/coreservices/1400111-resolvedefaulttextencoding)

# ResolveDefaultTextEncoding

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Returns a text encoding specification in which any meta-valueshave been resolved to real values. Currently, this affects onlythe base encoding values packed into the text encoding specification.

## Declaration

```objectivec
TextEncoding ResolveDefaultTextEncoding(TextEncoding encoding);
```

## Parameters

- `encoding`: A text encoding specification possibly containing meta-values that you want to resolve to a text encoding specification containing only real values.

<a id="return_value"></a>

## Return Value

A text encoding specificationcontaining only real base encoding values.

<a id="discussion"></a>

## Discussion

This function is useful for application developers who areproviding APIs that take text encoding specifications as parameters.All APIs in the Unicode Converter and Text Encoding Converter performthis translation automatically.

## See Also

### Obtaining Information From a Text Encoding Specification

- [GetTextEncodingBase](1399792-gettextencodingbase.md): Returns the base encoding of the specified text encoding.
- [GetTextEncodingFormat](1400318-gettextencodingformat.md): Returns the format value of the specified text encoding.
- [GetTextEncodingName](1399645-gettextencodingname.md): Returns the localized name for a specified text encoding.
- [GetTextEncodingVariant](1400250-gettextencodingvariant.md): Returns the variant from the specified text encoding.
