> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontroller/extensions](https://developer.apple.com/documentation/webkit/wkwebextensioncontroller/extensions)

# extensions (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

A set of all the currently loaded extensions.

## Declaration

```swift
var extensions: Set<WKWebExtension> { get }
```

## See Also

### Related Documentation

- [extensionContexts](extensioncontexts.md): A set of all the currently loaded extension contexts.

# extensions (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

A set of all the currently loaded extensions.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSSet<WKWebExtension *> * extensions;
```

## See Also

### Related Documentation

- [extensionContexts](extensioncontexts.md): A set of all the currently loaded extension contexts.
