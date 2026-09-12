> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/domdocument/url(withattributestring:)](https://developer.apple.com/documentation/webkit/domdocument/url(withattributestring:))

# url(withAttributeString:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS

Constructs a URL given an attribute string.

## Declaration

```swift
func url(withAttributeString string: String!) -> URL!
```

## Parameters

- `string`: The HTML attribute string to convert.

<a id="return-value"></a>

## Return Value

An `NSURL` object containing an absolute URL derived from the specified attribute string.

<a id="Discussion"></a>

## Discussion

This method constructs a URL given the string value of an element attribute. Examples include the `href` attribute of a `DOMHTMLAnchorElement` object, or the `src` attribute of a `DOMHTMLImageElement` object. This method only applies to attributes that refer to URLs.

This method is similar to [init(string:)](https://developer.apple.com/documentation/foundation/nsurl/init%28string:%29) in the `NSURL` class, except that `URLWithAttributeString:` handles relative URLs automatically based on the current document’s location.

# URLWithAttributeString: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS

Constructs a URL given an attribute string.

## Declaration

```objectivec
- (NSURL *) URLWithAttributeString:(NSString *) string;
```

## Parameters

- `string`: The HTML attribute string to convert.

<a id="return-value"></a>

## Return Value

An `NSURL` object containing an absolute URL derived from the specified attribute string.

<a id="Discussion"></a>

## Discussion

This method constructs a URL given the string value of an element attribute. Examples include the `href` attribute of a `DOMHTMLAnchorElement` object, or the `src` attribute of a `DOMHTMLImageElement` object. This method only applies to attributes that refer to URLs.

This method is similar to [initWithString:](https://developer.apple.com/documentation/foundation/nsurl/init%28string:%29) in the `NSURL` class, except that `URLWithAttributeString:` handles relative URLs automatically based on the current document’s location.
