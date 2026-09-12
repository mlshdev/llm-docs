> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/openconfiguration/requiresuniversallinks](https://developer.apple.com/documentation/appkit/nsworkspace/openconfiguration/requiresuniversallinks)

# requiresUniversalLinks (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

A Boolean value indicating whether you require the URL to have an associated universal link.

## Declaration

```swift
var requiresUniversalLinks: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false), which tells the app to open any URL you provide. Set the value to [true](https://developer.apple.com/documentation/swift/true) when you want the app to open only valid universal links.

The app must be specifically configured to open universal links, and attempts to open such links fail with an appropriate error if the app isn’t properly configured. Attempts may also fail with an error if the user disabled support for opening links with the specified app.

## See Also

### Handling URLs

- [isForPrinting](isforprinting.md): A Boolean value indicating whether you want to print the contents of documents and URLs instead of opening them.

# requiresUniversalLinks (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

A Boolean value indicating whether you require the URL to have an associated universal link.

## Declaration

```objectivec
@property BOOL requiresUniversalLinks;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false), which tells the app to open any URL you provide. Set the value to [true](https://developer.apple.com/documentation/swift/true) when you want the app to open only valid universal links.

The app must be specifically configured to open universal links, and attempts to open such links fail with an appropriate error if the app isn’t properly configured. Attempts may also fail with an error if the user disabled support for opening links with the specified app.

## See Also

### Handling URLs

- [forPrinting](isforprinting.md): A Boolean value indicating whether you want to print the contents of documents and URLs instead of opening them.
