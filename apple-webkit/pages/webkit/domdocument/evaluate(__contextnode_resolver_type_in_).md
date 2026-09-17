> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/webkit/domdocument/evaluate(_:contextnode:resolver:type:in:)

# evaluate(\_:contextNode:resolver:type:in:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.14)

## Declaration

```swift
func evaluate(_ expression: String!, contextNode: DOMNode!, resolver: (any DOMXPathNSResolver)!, type: UInt16, in inResult: DOMXPathResult!) -> DOMXPathResult!
```

# evaluate:contextNode:resolver:type:inResult: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.14)

## Declaration

```objectivec
- (DOMXPathResult *) evaluate:(NSString *) expression contextNode:(DOMNode *) contextNode resolver:(id<DOMXPathNSResolver>) resolver type:(unsigned short) type inResult:(DOMXPathResult *) inResult;
```
