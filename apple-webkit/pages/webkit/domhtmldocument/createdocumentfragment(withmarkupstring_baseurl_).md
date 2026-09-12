> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/domhtmldocument/createdocumentfragment(withmarkupstring:baseurl:)](https://developer.apple.com/documentation/webkit/domhtmldocument/createdocumentfragment(withmarkupstring:baseurl:))

# createDocumentFragment(withMarkupString:baseURL:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Creates a document fragment containing the given HTML markup.

## Declaration

```swift
func createDocumentFragment(withMarkupString markupString: String!, baseURL: URL!) -> DOMDocumentFragment!
```

## Parameters

- `markupString`: The HTML content to parse into a DOM tree.
- `baseURL`: The URI from which the content originated. Used for interpreting relative URLs.

<a id="return-value"></a>

## Return Value

A `DOMDocumentFragment` derived from the original markup string.

<a id="Discussion"></a>

## Discussion

This is a convenience method for the `createDocumentFragment` method in `DOMDocument`. It creates a fragment that has the HTML markup parsed into child nodes of the fragment using the `baseURL` to resolve any relative paths for images or other resources.

## See Also

### Creating Document Fragments

- [createDocumentFragment(withText:)](createdocumentfragment%28withtext_%29.md): Creates a document fragment containing the given text.

# createDocumentFragmentWithMarkupString:baseURL: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Creates a document fragment containing the given HTML markup.

## Declaration

```objectivec
- (DOMDocumentFragment *) createDocumentFragmentWithMarkupString:(NSString *) markupString baseURL:(NSURL *) baseURL;
```

## Parameters

- `markupString`: The HTML content to parse into a DOM tree.
- `baseURL`: The URI from which the content originated. Used for interpreting relative URLs.

<a id="return-value"></a>

## Return Value

A `DOMDocumentFragment` derived from the original markup string.

<a id="Discussion"></a>

## Discussion

This is a convenience method for the `createDocumentFragment` method in `DOMDocument`. It creates a fragment that has the HTML markup parsed into child nodes of the fragment using the `baseURL` to resolve any relative paths for images or other resources.

## See Also

### Creating Document Fragments

- [createDocumentFragmentWithText:](createdocumentfragment%28withtext_%29.md): Creates a document fragment containing the given text.
