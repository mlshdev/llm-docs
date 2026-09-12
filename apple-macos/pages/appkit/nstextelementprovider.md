> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextelementprovider](https://developer.apple.com/documentation/appkit/nstextelementprovider)

# NSTextElementProvider (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS 12.0+

A protocol the text content manager and its concrete subclasses conform to, which defines the interface for interacting with custom content types of a text document.

## Declaration

```swift
protocol NSTextElementProvider : NSObjectProtocol
```

## Topics

### Accessing the range of the text element

- [documentRange](nstextelementprovider/documentrange.md): Describes the starting and ending locations for the document.

### Accessing and updating the text

- [enumerateTextElements(from:options:using:)](nstextelementprovider/enumeratetextelements%28from_options_using_%29.md): Enumerates text elements starting at the text location you provide.
- [NSTextLayoutFragment.EnumerationOptions](nstextlayoutfragment/enumerationoptions.md): Values that describe options for enumerating text layout fragments.
- [location(\_:offsetBy:)](nstextelementprovider/location%28__offsetby_%29.md): Returns a new location from location with offset you provide.
- [replaceContents(in:with:)](nstextelementprovider/replacecontents%28in_with_%29.md): Replaces the characters specified by range with the text elements you provide.

### Adjusting the range of the text element

- [adjustedRange(from:forEditingTextSelection:)](nstextelementprovider/adjustedrange%28from_foreditingtextselection_%29.md): A method you implement if the location backing store requires manual adjustment after editing.
- [offset(from:to:)](nstextelementprovider/offset%28from_to_%29.md): Returns the offset between the two specified locations.

### Controlling synchronization with the backing store

- [synchronizeToBackingStore(\_:)](nstextelementprovider/synchronizetobackingstore%28__%29.md): Synchronizes changes to the backing store.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [NSTextContentManager](nstextcontentmanager.md)
- [NSTextContentStorage](nstextcontentstorage.md)

## See Also

### Content elements

- [Enriching your text in text views](https://developer.apple.com/documentation/uikit/enriching-your-text-in-text-views): Support line numbering, section collapsing, inline attachment caching, exclusion paths, text attachments, and text lists in a text view.
- [NSTextParagraph](nstextparagraph.md): A class that represents a single paragraph backed by an attributed string as the contents.
- [NSTextListElement](nstextlistelement.md): A class that represents a text list node.
- [NSTextElement](nstextelement.md): An abstract base class that represents the smallest units of text layout such as paragraphs or attachments.

# NSTextElementProvider (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS 12.0+

A protocol the text content manager and its concrete subclasses conform to, which defines the interface for interacting with custom content types of a text document.

## Declaration

```objectivec
@protocol NSTextElementProvider <NSObject>
```

## Topics

### Accessing the range of the text element

- [documentRange](nstextelementprovider/documentrange.md): Describes the starting and ending locations for the document.

### Accessing and updating the text

- [enumerateTextElementsFromLocation:options:usingBlock:](nstextelementprovider/enumeratetextelements%28from_options_using_%29.md): Enumerates text elements starting at the text location you provide.
- [NSTextLayoutFragmentEnumerationOptions](nstextlayoutfragment/enumerationoptions.md): Values that describe options for enumerating text layout fragments.
- [locationFromLocation:withOffset:](nstextelementprovider/location%28__offsetby_%29.md): Returns a new location from location with offset you provide.
- [replaceContentsInRange:withTextElements:](nstextelementprovider/replacecontents%28in_with_%29.md): Replaces the characters specified by range with the text elements you provide.

### Adjusting the range of the text element

- [adjustedRangeFromRange:forEditingTextSelection:](nstextelementprovider/adjustedrange%28from_foreditingtextselection_%29.md): A method you implement if the location backing store requires manual adjustment after editing.
- [offsetFromLocation:toLocation:](nstextelementprovider/offset%28from_to_%29.md): Returns the offset between the two specified locations.

### Controlling synchronization with the backing store

- [synchronizeToBackingStore:](nstextelementprovider/synchronizetobackingstore%28__%29.md): Synchronizes changes to the backing store.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [NSTextContentManager](nstextcontentmanager.md)

## See Also

### Content elements

- [NSTextParagraph](nstextparagraph.md): A class that represents a single paragraph backed by an attributed string as the contents.
- [NSTextListElement](nstextlistelement.md): A class that represents a text list node.
- [NSTextElement](nstextelement.md): An abstract base class that represents the smallest units of text layout such as paragraphs or attachments.
