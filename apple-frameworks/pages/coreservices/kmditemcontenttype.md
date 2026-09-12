> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/kmditemcontenttype](https://developer.apple.com/documentation/coreservices/kmditemcontenttype)

# kMDItemContentType (Swift)

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** macOS 10.4+

The UTI pedigree of a file. A CFString.

## Declaration

```swift
let kMDItemContentType: CFString!
```

<a id="discussion"></a>

## Discussion

 For example, a jpeg image file will have a value of public.jpeg/public.image/public.data. The value of this attribute is set by the MDImporter. Changes to this value are lost when the file attributes are next imported.

# kMDItemContentType (Objective-C)

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** macOS 10.4+

The UTI pedigree of a file. A CFString.

## Declaration

```objectivec
const CFStringRef kMDItemContentType;
```

<a id="discussion"></a>

## Discussion

 For example, a jpeg image file will have a value of public.jpeg/public.image/public.data. The value of this attribute is set by the MDImporter. Changes to this value are lost when the file attributes are next imported.
