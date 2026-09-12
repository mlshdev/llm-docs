> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfilepromiseprovider/delegate](https://developer.apple.com/documentation/appkit/nsfilepromiseprovider/delegate)

# delegate (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

## Declaration

```swift
weak var delegate: (any NSFilePromiseProviderDelegate)? { get set }
```

## See Also

### Instance Properties

- [fileType](filetype.md): The file type of the file promise provider.
- [userInfo](userinfo.md): Optional user information to pass to the file promise provider.

# delegate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

## Declaration

```objectivec
@property (weak, nullable) id<NSFilePromiseProviderDelegate> delegate;
```

## See Also

### Instance Properties

- [fileType](filetype.md): The file type of the file promise provider.
- [userInfo](userinfo.md): Optional user information to pass to the file promise provider.
