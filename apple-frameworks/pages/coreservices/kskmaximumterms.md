> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/kskmaximumterms](https://developer.apple.com/documentation/coreservices/kskmaximumterms)

# kSKMaximumTerms (Swift)

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** macOS 10.4+

## Declaration

```swift
let kSKMaximumTerms: CFString!
```

<a id="discussion"></a>

## Discussion

The maximum number of number unique terms to index in each document. Specified as a CFNumber object.

Search Kit indexes from the beginning of a document. When it has indexed the first n unique terms, it stops.

The default number of maximum terms, which applies if you do not provide a number, is 2000.

To tell Search Kit to index all the terms in each document without limit, specify a value of 0.

# kSKMaximumTerms (Objective-C)

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** macOS 10.4+

## Declaration

```objectivec
const CFStringRef kSKMaximumTerms;
```

<a id="discussion"></a>

## Discussion

The maximum number of number unique terms to index in each document. Specified as a CFNumber object.

Search Kit indexes from the beginning of a document. When it has indexed the first n unique terms, it stops.

The default number of maximum terms, which applies if you do not provide a number, is 2000.

To tell Search Kit to index all the terms in each document without limit, specify a value of 0.
