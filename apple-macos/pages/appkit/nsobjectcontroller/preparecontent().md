> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsobjectcontroller/preparecontent()](https://developer.apple.com/documentation/appkit/nsobjectcontroller/preparecontent())

# prepareContent() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Typically overridden by subclasses that require additional control over the creation of new objects.

## Declaration

```swift
func prepareContent()
```

<a id="Discussion"></a>

## Discussion

Subclasses that implement this method are responsible for creating the new content object and setting it as the receiver’s content object. This method is only called if [automaticallyPreparesContent](automaticallypreparescontent.md) has been set to [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Managing content

- [content](content.md): The receiver’s content object.
- [automaticallyPreparesContent](automaticallypreparescontent.md): A Boolean that shows whether the receiver automatically creates and inserts new content objects automatically when loading from a nib file.

# prepareContent (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Typically overridden by subclasses that require additional control over the creation of new objects.

## Declaration

```objectivec
- (void) prepareContent;
```

<a id="Discussion"></a>

## Discussion

Subclasses that implement this method are responsible for creating the new content object and setting it as the receiver’s content object. This method is only called if [automaticallyPreparesContent](automaticallypreparescontent.md) has been set to [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Managing content

- [content](content.md): The receiver’s content object.
- [automaticallyPreparesContent](automaticallypreparescontent.md): A Boolean that shows whether the receiver automatically creates and inserts new content objects automatically when loading from a nib file.
