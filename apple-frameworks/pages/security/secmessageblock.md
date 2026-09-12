> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secmessageblock](https://developer.apple.com/documentation/security/secmessageblock)

# SecMessageBlock (Swift)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A block that delivers messages during asynchronous operations.

## Declaration

```swift
typealias SecMessageBlock = (CFTypeRef?, CFError?, Bool) -> Void
```

## Parameters

- `message`: A CFType containing the message. This is where either intermediate or final results are returned.
- `error`: If an error occurred, this will contain a CFErrorRef, otherwise this will be NULL. If not NULL the caller is responsible for releasing the CFErrorRef.
- `isFinal`: If set the message returned is the final result otherwise it is an intermediate result.

# SecMessageBlock (Objective-C)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A block that delivers messages during asynchronous operations.

## Declaration

```objectivec
typedef void (^)(const void *, struct __CFError *, unsigned char) SecMessageBlock;
```

## Parameters

- `message`: A CFType containing the message. This is where either intermediate or final results are returned.
- `error`: If an error occurred, this will contain a CFErrorRef, otherwise this will be NULL. If not NULL the caller is responsible for releasing the CFErrorRef.
- `isFinal`: If set the message returned is the final result otherwise it is an intermediate result.
