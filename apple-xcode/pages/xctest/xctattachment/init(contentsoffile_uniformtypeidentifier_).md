> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctattachment/init(contentsoffile:uniformtypeidentifier:)](https://developer.apple.com/documentation/xctest/xctattachment/init(contentsoffile:uniformtypeidentifier:))

# init(contentsOfFile:uniformTypeIdentifier:) (Swift)

**Framework:** XCTest  
**Kind:** Initializer

## Declaration

```swift
convenience init(contentsOfFile url: URL, uniformTypeIdentifier identifier: String)
```

<a id="discussion"></a>

## Discussion

Creates an attachment with an existing file on disk and type.

> **Note**

> Only works for files, not directories.

# attachmentWithContentsOfFileAtURL:uniformTypeIdentifier: (Objective-C)

**Framework:** XCTest  
**Kind:** Type Method

## Declaration

```objectivec
+ (instancetype) attachmentWithContentsOfFileAtURL:(NSURL *) url uniformTypeIdentifier:(NSString *) identifier;
```

<a id="discussion"></a>

## Discussion

Creates an attachment with an existing file on disk and type.

> **Note**

> Only works for files, not directories.
