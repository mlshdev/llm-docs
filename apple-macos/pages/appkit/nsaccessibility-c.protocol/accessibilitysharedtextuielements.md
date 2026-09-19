> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsaccessibility-c.protocol/accessibilitysharedtextuielements

# accessibilitySharedTextUIElements

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

Other elements that share text with the accessibility element.

## Declaration

```objectivec
@property (copy, nullable) NSArray * accessibilitySharedTextUIElements;
```

<a id="Discussion"></a>

## Discussion

Use this property to manage text that is split across multiple elements—for example, an ebook reader that splits the text into multiple pages.
