> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1399792-gettextencodingbase](https://developer.apple.com/documentation/coreservices/1399792-gettextencodingbase)

# GetTextEncodingBase

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Returns the base encoding of the specified text encoding.

## Declaration

```objectivec
TextEncodingBase GetTextEncodingBase(TextEncoding encoding);
```

## Parameters

- `encoding`: A text encoding specification whose base encoding you want to obtain.

<a id="return_value"></a>

## Return Value

The base encodingportion of the specified text encoding.

<a id="discussion"></a>

## Discussion

See the data type  [TextEncodingRun](textencodingrun.md)

## See Also

### Obtaining Information From a Text Encoding Specification

- [GetTextEncodingFormat](1400318-gettextencodingformat.md): Returns the format value of the specified text encoding.
- [GetTextEncodingName](1399645-gettextencodingname.md): Returns the localized name for a specified text encoding.
- [GetTextEncodingVariant](1400250-gettextencodingvariant.md): Returns the variant from the specified text encoding.
- [ResolveDefaultTextEncoding](1400111-resolvedefaulttextencoding.md): Returns a text encoding specification in which any meta-valueshave been resolved to real values. Currently, this affects onlythe base encoding values packed into the text encoding specification.
