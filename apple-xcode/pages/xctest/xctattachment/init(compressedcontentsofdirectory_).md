> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctattachment/init(compressedcontentsofdirectory:)](https://developer.apple.com/documentation/xctest/xctattachment/init(compressedcontentsofdirectory:))

# init(compressedContentsOfDirectory:) (Swift)

**Framework:** XCTest  
**Kind:** Initializer

## Declaration

```swift
convenience init(compressedContentsOfDirectory url: URL)
```

<a id="discussion"></a>

## Discussion

Creates an attachment with an existing directory on disk. Automatically zips the directory, the content type is “public.zip-archive”.

# attachmentWithCompressedContentsOfDirectoryAtURL: (Objective-C)

**Framework:** XCTest  
**Kind:** Type Method

## Declaration

```objectivec
+ (instancetype) attachmentWithCompressedContentsOfDirectoryAtURL:(NSURL *) url;
```

<a id="discussion"></a>

## Discussion

Creates an attachment with an existing directory on disk. Automatically zips the directory, the content type is “public.zip-archive”.
