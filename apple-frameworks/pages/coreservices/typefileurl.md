> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/typefileurl](https://developer.apple.com/documentation/coreservices/typefileurl)

# typeFileURL

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.1+

A file URL. That is, the associated data consists of the bytes of a UTF-8 encoded URL with a scheme of "file". This type is appropriate for describing a file that may not yet exist—see [Technical Note 2022](http://developer.apple.com/technotes/tn/tn2022.html) for more information.

## Declaration

```swift
var typeFileURL: DescType { get }
```

<a id="discussion"></a>

## Discussion

You can translate between a descriptor of this type and an instance of `CFURL` by calling [CFURLCreateWithBytes(\_:\_:\_:\_:\_:)](../corefoundation/cfurlcreatewithbytes%28__________%29.md) and specifying `kCFStringEncodingUTF8` for the encoding. Or, if you have a [CFURL](../corefoundation/cfurl.md), you can call [CFURLCreateData(\_:\_:\_:\_:)](../corefoundation/cfurlcreatedata%28________%29.md) to get the data as an instance of `CFData` (again specifying an encoding of `kCFStringEncodingUTF8`), and[CFDataGetBytes(\_:\_:\_:)](../corefoundation/cfdatagetbytes%28______%29.md) to get the actual bytes to insert into a descriptor of this type.
