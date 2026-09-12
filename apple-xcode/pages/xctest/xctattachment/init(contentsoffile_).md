> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctattachment/init(contentsoffile:)](https://developer.apple.com/documentation/xctest/xctattachment/init(contentsoffile:))

# init(contentsOfFile:) (Swift)

**Framework:** XCTest  
**Kind:** Initializer

## Declaration

```swift
convenience init(contentsOfFile url: URL)
```

<a id="discussion"></a>

## Discussion

Creates an attachment with an existing file on disk. Attachment’s uniform type identifier is inferred from the file extension. If no type can be inferred from the extension, fallback is “public.data”.

> **Note**

> Only works for files, not directories.

# attachmentWithContentsOfFileAtURL: (Objective-C)

**Framework:** XCTest  
**Kind:** Type Method

## Declaration

```objectivec
+ (instancetype) attachmentWithContentsOfFileAtURL:(NSURL *) url;
```

<a id="discussion"></a>

## Discussion

Creates an attachment with an existing file on disk. Attachment’s uniform type identifier is inferred from the file extension. If no type can be inferred from the extension, fallback is “public.data”.

> **Note**

> Only works for files, not directories.
