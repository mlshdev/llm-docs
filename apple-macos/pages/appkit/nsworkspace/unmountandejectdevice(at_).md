> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/unmountandejectdevice(at:)](https://developer.apple.com/documentation/appkit/nsworkspace/unmountandejectdevice(at:))

# unmountAndEjectDevice(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Attempts to eject the volume mounted at the given path.

## Declaration

```swift
func unmountAndEjectDevice(at url: URL) throws
```

## Parameters

- `url`: The URL of the volume to eject.

<a id="Discussion"></a>

## Discussion

You can safely call this method from any thread of your app.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Unmounting a Device

- [unmountAndEjectDevice(atPath:)](unmountandejectdevice%28atpath_%29.md): Unmounts and ejects the device at the specified path.

# unmountAndEjectDeviceAtURL:error: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Attempts to eject the volume mounted at the given path.

## Declaration

```objectivec
- (BOOL) unmountAndEjectDeviceAtURL:(NSURL *) url error:(NSError **) error;
```

## Parameters

- `url`: The URL of the volume to eject.
- `error`: If the operation fails, this error contains more information about the failure.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the system successfully unmounted and ejected the volume; otherwise [false](https://developer.apple.com/documentation/swift/false). For example, the method might return [false](https://developer.apple.com/documentation/swift/false) if the volume is not ejectable.

<a id="Discussion"></a>

## Discussion

You can safely call this method from any thread of your app.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Unmounting a Device

- [unmountAndEjectDeviceAtPath:](unmountandejectdevice%28atpath_%29.md): Unmounts and ejects the device at the specified path.
