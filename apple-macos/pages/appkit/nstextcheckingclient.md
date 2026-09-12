> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextcheckingclient](https://developer.apple.com/documentation/appkit/nstextcheckingclient)

# NSTextCheckingClient (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

## Declaration

```swift
protocol NSTextCheckingClient : NSTextInputClient, NSTextInputTraits
```

## Topics

### Instance Methods

- [addAnnotations(\_:range:)](nstextcheckingclient/addannotations%28__range_%29.md)
- [annotatedSubstring(forProposedRange:actualRange:)](nstextcheckingclient/annotatedsubstring%28forproposedrange_actualrange_%29.md)
- [candidateListTouchBarItem()](nstextcheckingclient/candidatelisttouchbaritem%28%29.md)
- [removeAnnotation(\_:range:)](nstextcheckingclient/removeannotation%28__range_%29.md)
- [replaceCharacters(in:withAnnotatedString:)](nstextcheckingclient/replacecharacters%28in_withannotatedstring_%29.md)
- [selectAndShow(\_:)](nstextcheckingclient/selectandshow%28__%29.md)
- [setAnnotations(\_:range:)](nstextcheckingclient/setannotations%28__range_%29.md)
- [view(for:firstRect:actualRange:)](nstextcheckingclient/view%28for_firstrect_actualrange_%29.md)

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSTextInputClient](nstextinputclient.md)
- [NSTextInputTraits](nstextinputtraits.md)

## See Also

### Text-checking

- [NSTextCheckingController](nstextcheckingcontroller.md)
- [NSTextInputTraits](nstextinputtraits.md)
- [NSTextInputTraitType](nstextinputtraittype.md)

# NSTextCheckingClient (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

## Declaration

```objectivec
@protocol NSTextCheckingClient <NSTextInputClient, NSTextInputTraits>
```

## Topics

### Instance Methods

- [addAnnotations:range:](nstextcheckingclient/addannotations%28__range_%29.md)
- [annotatedSubstringForProposedRange:actualRange:](nstextcheckingclient/annotatedsubstring%28forproposedrange_actualrange_%29.md)
- [candidateListTouchBarItem](nstextcheckingclient/candidatelisttouchbaritem%28%29.md)
- [removeAnnotation:range:](nstextcheckingclient/removeannotation%28__range_%29.md)
- [replaceCharactersInRange:withAnnotatedString:](nstextcheckingclient/replacecharacters%28in_withannotatedstring_%29.md)
- [selectAndShowRange:](nstextcheckingclient/selectandshow%28__%29.md)
- [setAnnotations:range:](nstextcheckingclient/setannotations%28__range_%29.md)
- [viewForRange:firstRect:actualRange:](nstextcheckingclient/view%28for_firstrect_actualrange_%29.md)

## Relationships

### Inherits From

- [NSTextInputClient](nstextinputclient.md)
- [NSTextInputTraits](nstextinputtraits.md)

## See Also

### Text-checking

- [NSTextCheckingController](nstextcheckingcontroller.md)
- [NSTextInputTraits](nstextinputtraits.md)
- [NSTextInputTraitType](nstextinputtraittype.md)
