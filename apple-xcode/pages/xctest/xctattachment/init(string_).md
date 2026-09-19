> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-d045c48ba442; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/xctest/xctattachment/init(string:)

# init(string:) (Swift)

**Framework:** XCTest  
**Kind:** Initializer

Creates an attachment containing the provided string.

## Declaration

```swift
convenience init(string: String)
```

## Parameters

- `string`: The string to wrap as an attachment.

<a id="Discussion"></a>

## Discussion

Creates an attachment with a [uniformTypeIdentifier](uniformtypeidentifier.md) of ```"``public.plain-text"```.

# attachmentWithString: (Objective-C)

**Framework:** XCTest  
**Kind:** Type Method

Creates an attachment containing the provided string.

## Declaration

```objectivec
+ (instancetype) attachmentWithString:(NSString *) string;
```

## Parameters

- `string`: The string to wrap as an attachment.

<a id="Discussion"></a>

## Discussion

Creates an attachment with a [uniformTypeIdentifier](uniformtypeidentifier.md) of ```"``public.plain-text"```.
