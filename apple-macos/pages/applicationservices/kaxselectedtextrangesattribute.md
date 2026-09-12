> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/kaxselectedtextrangesattribute](https://developer.apple.com/documentation/applicationservices/kaxselectedtextrangesattribute)

# kAXSelectedTextRangesAttribute (Swift)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

## Declaration

```swift
var kAXSelectedTextRangesAttribute: String { get }
```

<a id="discussion"></a>

## Discussion

An array of noncontiguous ranges of characters (not bytes) that defines the current selections of an editable text element.

Value: A CFArrayRef of kAXValueCFRanges.

Writable? Yes.

Recommended for text elements that support noncontiguous selections.

# kAXSelectedTextRangesAttribute (Objective-C)

**Framework:** Application Services  
**Kind:** Macro  
**Availability:** macOS 10.5+

## Declaration

```objectivec
#define kAXSelectedTextRangesAttribute
```

<a id="discussion"></a>

## Discussion

An array of noncontiguous ranges of characters (not bytes) that defines the current selections of an editable text element.

Value: A CFArrayRef of kAXValueCFRanges.

Writable? Yes.

Recommended for text elements that support noncontiguous selections.
