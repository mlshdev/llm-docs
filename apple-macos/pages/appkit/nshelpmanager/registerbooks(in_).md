> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nshelpmanager/registerbooks(in:)](https://developer.apple.com/documentation/appkit/nshelpmanager/registerbooks(in:))

# registerBooks(in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Registers one or more help books in the given bundle.

## Declaration

```swift
func registerBooks(in bundle: Bundle) -> Bool
```

## Parameters

- `bundle`: The bundle for additional help books. Books in the main bundle are automatically registered.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if registration is successful, [false](https://developer.apple.com/documentation/swift/false) if the bundle doesn’t contain any help books or if registration fails.

<a id="Discussion"></a>

## Discussion

You use `registerBooksInBundle:` to register help books in, for example, a plug-in bundle. The `Info.plist` in the bundle should contain a help book directory path, which specifies one or more folders containing help books.

The main bundle is automatically registered by [openHelpAnchor(\_:inBook:)](openhelpanchor%28__inbook_%29.md) and [find(\_:inBook:)](find%28__inbook_%29.md).

# registerBooksInBundle: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Registers one or more help books in the given bundle.

## Declaration

```objectivec
- (BOOL) registerBooksInBundle:(NSBundle *) bundle;
```

## Parameters

- `bundle`: The bundle for additional help books. Books in the main bundle are automatically registered.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if registration is successful, [false](https://developer.apple.com/documentation/swift/false) if the bundle doesn’t contain any help books or if registration fails.

<a id="Discussion"></a>

## Discussion

You use `registerBooksInBundle:` to register help books in, for example, a plug-in bundle. The `Info.plist` in the bundle should contain a help book directory path, which specifies one or more folders containing help books.

The main bundle is automatically registered by [openHelpAnchor:inBook:](openhelpanchor%28__inbook_%29.md) and [findString:inBook:](find%28__inbook_%29.md).
