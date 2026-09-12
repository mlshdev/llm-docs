> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/domhtmldocument/createdocumentfragment(withtext:)](https://developer.apple.com/documentation/webkit/domhtmldocument/createdocumentfragment(withtext:))

# createDocumentFragment(withText:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Creates a document fragment containing the given text.

## Declaration

```swift
func createDocumentFragment(withText text: String!) -> DOMDocumentFragment!
```

## Parameters

- `text`: The text to convert.

<a id="return-value"></a>

## Return Value

A `DOMDocumentFragment` object derived from the source text.

<a id="Discussion"></a>

## Discussion

This is a convenience method for the `createDocumentFragment` method in `DOMDocument`. This method creates a fragment that contains the supplied plain text.

## See Also

### Creating Document Fragments

- [createDocumentFragment(withMarkupString:baseURL:)](createdocumentfragment%28withmarkupstring_baseurl_%29.md): Creates a document fragment containing the given HTML markup.

# createDocumentFragmentWithText: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Creates a document fragment containing the given text.

## Declaration

```objectivec
- (DOMDocumentFragment *) createDocumentFragmentWithText:(NSString *) text;
```

## Parameters

- `text`: The text to convert.

<a id="return-value"></a>

## Return Value

A `DOMDocumentFragment` object derived from the source text.

<a id="Discussion"></a>

## Discussion

This is a convenience method for the `createDocumentFragment` method in `DOMDocument`. This method creates a fragment that contains the supplied plain text.

## See Also

### Creating Document Fragments

- [createDocumentFragmentWithMarkupString:baseURL:](createdocumentfragment%28withmarkupstring_baseurl_%29.md): Creates a document fragment containing the given HTML markup.
