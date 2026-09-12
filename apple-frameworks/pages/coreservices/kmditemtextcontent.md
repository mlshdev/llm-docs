> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/kmditemtextcontent](https://developer.apple.com/documentation/coreservices/kmditemtextcontent)

# kMDItemTextContent (Swift)

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** macOS 10.4+

Contains a text representation of the content of the document. Data in multiple fields should be combined using a whitespace character as a separator. A CFString.

## Declaration

```swift
let kMDItemTextContent: CFString!
```

<a id="discussion"></a>

## Discussion

An application's Spotlight importer provides the content of this attribute. Applications can search for values in this attribute, but are not able to read the content of this attribute directly.

# kMDItemTextContent (Objective-C)

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** macOS 10.4+

Contains a text representation of the content of the document. Data in multiple fields should be combined using a whitespace character as a separator. A CFString.

## Declaration

```objectivec
const CFStringRef kMDItemTextContent;
```

<a id="discussion"></a>

## Discussion

An application's Spotlight importer provides the content of this attribute. Applications can search for values in this attribute, but are not able to read the content of this attribute directly.
