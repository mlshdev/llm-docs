> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuiapplication/init(url:)-90e7z](https://developer.apple.com/documentation/xcuiautomation/xcuiapplication/init(url:)-90e7z)

# init(url:) (Swift)

**Framework:** XCUIAutomation  
**Kind:** Initializer  
**Availability:** macOS · Xcode 16.3+

Creates a proxy for the application at the specified file system URL.

## Declaration

```swift
init(url: URL)
```

<a id="Discussion"></a>

## Discussion

This initializer is only available on macOS.

## See Also

### Creating an application proxy

- [init()](init%28%29.md): Creates a proxy for the application that’s configured as the Target Application in Xcode’s target settings.
- [init(bundleIdentifier:)](init%28bundleidentifier_%29.md): Creates a proxy for an application for the specified bundle identifier.

# initWithURL: (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** macOS · Xcode 16.3+

Creates a proxy for the application at the specified file system URL.

## Declaration

```objectivec
- (instancetype) initWithURL:(NSURL *) url;
```

<a id="Discussion"></a>

## Discussion

This initializer is only available on macOS.

## See Also

### Creating an application proxy

- [init](init%28%29.md): Creates a proxy for the application that’s configured as the Target Application in Xcode’s target settings.
- [new](new.md): Creates a proxy for the application specified as the Target Application in Xcode’s target settings.
- [initWithBundleIdentifier:](init%28bundleidentifier_%29.md): Creates a proxy for an application for the specified bundle identifier.
