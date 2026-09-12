> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsobjectcontroller/automaticallypreparescontent](https://developer.apple.com/documentation/appkit/nsobjectcontroller/automaticallypreparescontent)

# automaticallyPreparesContent (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that shows whether the receiver automatically creates and inserts new content objects automatically when loading from a nib file.

## Declaration

```swift
var automaticallyPreparesContent: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If `flag` is [true](https://developer.apple.com/documentation/swift/true) and the receiver is not using a managed object context, [prepareContent()](preparecontent%28%29.md) is used to create the content object. If `flag` is [true](https://developer.apple.com/documentation/swift/true) and a managed object context is set, the initial content is fetched from the managed object context using the current fetch predicate. The default is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing content

- [content](content.md): The receiver’s content object.
- [prepareContent()](preparecontent%28%29.md): Typically overridden by subclasses that require additional control over the creation of new objects.

# automaticallyPreparesContent (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that shows whether the receiver automatically creates and inserts new content objects automatically when loading from a nib file.

## Declaration

```objectivec
@property BOOL automaticallyPreparesContent;
```

<a id="Discussion"></a>

## Discussion

If `flag` is [true](https://developer.apple.com/documentation/swift/true) and the receiver is not using a managed object context, [prepareContent](preparecontent%28%29.md) is used to create the content object. If `flag` is [true](https://developer.apple.com/documentation/swift/true) and a managed object context is set, the initial content is fetched from the managed object context using the current fetch predicate. The default is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing content

- [content](content.md): The receiver’s content object.
- [prepareContent](preparecontent%28%29.md): Typically overridden by subclasses that require additional control over the creation of new objects.
