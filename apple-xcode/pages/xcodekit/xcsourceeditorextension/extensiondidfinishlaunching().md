> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcodekit/xcsourceeditorextension/extensiondidfinishlaunching()](https://developer.apple.com/documentation/xcodekit/xcsourceeditorextension/extensiondidfinishlaunching())

# extensionDidFinishLaunching() (Swift)

**Framework:** XcodeKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Tells the extension that it successfully launched and may begin to receive editor commands.

## Declaration

```swift
optional func extensionDidFinishLaunching()
```

<a id="Discussion"></a>

## Discussion

There are no guarantees about the thread or queue on which this method is called.

# extensionDidFinishLaunching (Objective-C)

**Framework:** XcodeKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Tells the extension that it successfully launched and may begin to receive editor commands.

## Declaration

```objectivec
- (void) extensionDidFinishLaunching;
```

<a id="Discussion"></a>

## Discussion

There are no guarantees about the thread or queue on which this method is called.
